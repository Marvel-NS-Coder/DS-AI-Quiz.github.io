/**
 * Data Science & AI Quiz Application - Logic Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Config & State derived dynamically from questions.js (quizQuestions array)
  const TOTAL_QUESTIONS = quizQuestions.length;
  const QUIZ_DURATION_SECONDS = 600; // 10 minutes
  const PASS_PERCENTAGE = 70; // 70% passing grade
  
  let timeRemaining = QUIZ_DURATION_SECONDS;
  let timerInterval = null;
  let quizSubmitted = false;

  // DOM Elements
  const submitBtn = document.getElementById('submitBtn');
  const timerDisplay = document.getElementById('timerDisplay');
  const timerBox = document.getElementById('timerBox');
  const progressText = document.getElementById('progressText');
  const progressBarFill = document.getElementById('progressBarFill');
  
  // Results Modal Elements
  const resultsModal = document.getElementById('resultsModal');
  const resultsTitle = document.getElementById('resultsTitle');
  const resultsDescription = document.getElementById('resultsDescription');
  const scorePercentage = document.getElementById('scorePercentage');
  const scoreRatio = document.getElementById('scoreRatio');
  const resultsStatusBadge = document.getElementById('resultsStatusBadge');
  const resultsIconContainer = document.getElementById('resultsIconContainer');
  const restartBtn = document.getElementById('restartBtn');

  // SVG Icons for Results Modal
  const successSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  `;

  const failureSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  `;

  // Dynamically render the questions first
  renderQuestions();
  
  // Initialize Quiz functions
  startTimer();
  setupOptionCards();
  updateProgress();

  // 0. Render Questions from quizQuestions configuration array
  function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    quizQuestions.forEach((q, idx) => {
      const qNum = idx + 1;
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = `question${qNum}`;
      card.setAttribute('data-correct', q.correctAnswer);
      
      let optionsHTML = '';
      Object.entries(q.options).forEach(([key, val]) => {
        optionsHTML += `
          <label class="option-card" for="q${qNum}_${key.toLowerCase()}">
            <input type="radio" name="q${qNum}" id="q${qNum}_${key.toLowerCase()}" value="${key}">
            <span class="option-marker">${key}</span>
            <span class="option-text">${val}</span>
          </label>
        `;
      });

      card.innerHTML = `
        <div class="question-header">
          <span class="question-badge ${q.badgeClass || 'badge-simple'}">${q.badge}</span>
          <span class="question-number">Question ${qNum} of ${TOTAL_QUESTIONS}</span>
        </div>
        <h2 class="question-text">${qNum}. ${q.question}</h2>
        <div class="options-grid">
          ${optionsHTML}
        </div>
      `;
      
      container.appendChild(card);
    });
  }

  // 1. Timer Logic
  function startTimer() {
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay();

      // Visual warning colors for low time
      if (timeRemaining <= 60 && timeRemaining > 10) {
        timerDisplay.classList.add('timer-warning');
      } else if (timeRemaining <= 10) {
        timerDisplay.classList.remove('timer-warning');
        timerDisplay.classList.add('timer-critical');
      }

      // Timeout auto-submission
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        submitQuiz(true);
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    
    timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
  }

  // 2. Interactive Selection & Option Styles
  function setupOptionCards() {
    const optionCards = document.querySelectorAll('.option-card');
    
    optionCards.forEach(card => {
      // Handle click on the label container
      card.addEventListener('click', function(e) {
        if (quizSubmitted) return;
        
        // Find input within card
        const radio = this.querySelector('input[type="radio"]');
        if (!radio) return;

        // Select the radio button
        radio.checked = true;

        // Find all option cards in this question card and remove selected styling
        const questionCard = this.closest('.question-card');
        const siblings = questionCard.querySelectorAll('.option-card');
        siblings.forEach(sib => sib.classList.remove('selected'));

        // Add selected class to current card
        this.classList.add('selected');

        // Update progress indicators
        updateProgress();
      });
    });
  }

  // 3. Progress Updates
  function getAnsweredCount() {
    let answered = 0;
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) answered++;
    }
    return answered;
  }

  function updateProgress() {
    const answeredCount = getAnsweredCount();
    progressText.textContent = `${answeredCount} / ${TOTAL_QUESTIONS} Answered`;
    
    const percentage = TOTAL_QUESTIONS > 0 ? (answeredCount / TOTAL_QUESTIONS) * 100 : 0;
    progressBarFill.style.width = `${percentage}%`;
  }

  // 4. Submit Action & Score Evaluation
  submitBtn.addEventListener('click', () => {
    if (quizSubmitted) return;

    const answeredCount = getAnsweredCount();
    
    if (answeredCount < TOTAL_QUESTIONS) {
      const confirmSubmit = confirm(`You have only answered ${answeredCount} out of ${TOTAL_QUESTIONS} questions. Are you sure you want to submit?`);
      if (!confirmSubmit) return;
    } else {
      const confirmSubmit = confirm("Are you sure you want to submit your quiz and complete the assessment?");
      if (!confirmSubmit) return;
    }

    submitQuiz(false);
  });

  function submitQuiz(isTimeout = false) {
    if (quizSubmitted) return;
    quizSubmitted = true;
    
    // Stop the timer
    if (timerInterval) {
      clearInterval(timerInterval);
    }

    // Disable all inputs to prevent changing answers
    const allRadioInputs = document.querySelectorAll('input[type="radio"]');
    allRadioInputs.forEach(input => {
      input.disabled = true;
    });

    const allOptionCards = document.querySelectorAll('.option-card');
    allOptionCards.forEach(card => {
      card.classList.add('disabled');
    });

    submitBtn.disabled = true;
    submitBtn.textContent = "Assessment Submitted";

    // Grade the Quiz
    let score = 0;
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const questionCard = document.getElementById(`question${i}`);
      if (!questionCard) continue;
      
      const correctAnswer = questionCard.getAttribute('data-correct');
      const selectedInput = document.querySelector(`input[name="q${i}"]:checked`);
      
      if (selectedInput && selectedInput.value === correctAnswer) {
        score++;
      }
    }

    const percentage = TOTAL_QUESTIONS > 0 ? Math.round((score / TOTAL_QUESTIONS) * 100) : 0;
    const hasPassed = percentage >= PASS_PERCENTAGE;

    // Populate Results Modal
    if (isTimeout) {
      resultsTitle.textContent = "Time Expired!";
      resultsDescription.textContent = "The 10-minute timer ran out. Your assessment was submitted automatically.";
    } else {
      resultsTitle.textContent = "Assessment Completed";
      resultsDescription.textContent = "Your answers have been successfully submitted and evaluated.";
    }

    scorePercentage.textContent = `${percentage}%`;
    scoreRatio.textContent = `${score} / ${TOTAL_QUESTIONS} Correct`;

    // Apply pass/fail styling
    resultsStatusBadge.className = 'results-status-badge'; // reset
    resultsIconContainer.className = 'results-icon-container'; // reset

    if (hasPassed) {
      resultsStatusBadge.textContent = 'PASSED';
      resultsStatusBadge.classList.add('badge-passed');
      resultsIconContainer.classList.add('icon-success');
      resultsIconContainer.innerHTML = successSvg;
    } else {
      resultsStatusBadge.textContent = 'FAILED';
      resultsStatusBadge.classList.add('badge-failed');
      resultsIconContainer.classList.add('icon-error');
      resultsIconContainer.innerHTML = failureSvg;
    }

    // Update details description pass requirement
    const detailsEl = document.getElementById('resultsDetails');
    if (detailsEl) {
      detailsEl.textContent = `A passing score of ${PASS_PERCENTAGE}% or higher is required.`;
    }

    // Show Results Modal
    resultsModal.classList.add('show');
  }

  // 5. Close results modal to review answers (read-only)
  restartBtn.addEventListener('click', () => {
    resultsModal.classList.remove('show');
    // Scroll body to top to allow candidate to review their selected options
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Developer Testing Helper (expose to console for evaluation)
  window.__dev_helper = {
    setTimer: (seconds) => {
      timeRemaining = seconds;
      updateTimerDisplay();
    },
    autoFillCorrect: () => {
      for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const questionCard = document.getElementById(`question${i}`);
        if (!questionCard) continue;
        const correctAnswer = questionCard.getAttribute('data-correct');
        const correctInput = document.getElementById(`q${i}_${correctAnswer.toLowerCase()}`);
        if (correctInput) {
          correctInput.checked = true;
          const card = correctInput.closest('.option-card');
          card.classList.add('selected');
        }
      }
      updateProgress();
    }
  };
});
