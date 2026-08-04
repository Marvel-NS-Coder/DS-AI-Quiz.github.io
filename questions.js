/**
 * =======================================================================
 * DEVELOPER ASSESSMENT CONFIGURATION
 * Edit this file to add, modify, or remove questions from the quiz.
 *
 * Questions are organized into multiple SETS (quizQuestions_set1,
 * quizQuestions_set2, ...). Each time the quiz loads, one set is picked
 * at random from quizQuestions_list and assigned to quizQuestions, which
 * is the array the rest of the app (quiz.js) consumes.
 *
 * Each question object in a set has the following structure:
 * - id: Unique number identifier (unique within its own set)
 * - badge: Badge category name (e.g. "Conceptual", "Statistics", etc.)
 * - badgeClass: Styling for badge category ('badge-simple' or 'badge-advanced')
 * - question: The text of the question
 * - options: Key-value map of multiple choice options (A, B, C, D)
 * - correctAnswer: The capital letter representing the correct answer ('A', 'B', 'C', or 'D')
 * =======================================================================
 */

// ---------------------------------------------------------------------
// SET 1 — Original 10 questions
// ---------------------------------------------------------------------
const quizQuestions_set1 = [
  {
    id: 1,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "What does \"overfitting\" mean in the context of machine learning?",
    options: {
      A: "The model performs well on both training and test data.",
      B: "The model does not learn from the training data.",
      C: "The model learns noise in the training data, reducing its ability to generalize to new data.",
      D: "The model reduces the dimensionality of the input data."
    },
    correctAnswer: "C"
  },
  {
    id: 2,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "Which of the following algorithms is classified as a type of supervised learning?",
    options: {
      A: "K-Means Clustering",
      B: "Linear Regression",
      C: "Principal Component Analysis (PCA)",
      D: "Apriori Association Mining"
    },
    correctAnswer: "B"
  },
  {
    id: 3,
    badge: "Practical Application",
    badgeClass: "badge-simple",
    question: "In a binary classification problem, if your dataset has 95% positive class and 5% negative class samples, which metric is the most misleading if used as the primary evaluation metric?",
    options: {
      A: "Accuracy",
      B: "Precision",
      C: "Recall",
      D: "F1-score"
    },
    correctAnswer: "A"
  },
  {
    id: 4,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "What is the primary purpose of a validation dataset during machine learning model development?",
    options: {
      A: "To train the model weights directly.",
      B: "To tune hyperparameters and evaluate model performance during training.",
      C: "To perform final testing and evaluation of the finished model.",
      D: "To clean and preprocess the raw data before splitting."
    },
    correctAnswer: "B"
  },
  {
    id: 5,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "What is the primary function of an activation function (e.g., ReLU) in a neural network?",
    options: {
      A: "To introduce non-linearity, allowing the network to learn complex non-linear patterns.",
      B: "To normalize the input data to a standardized range between 0 and 1.",
      C: "To dynamically adjust the learning rate during backpropagation.",
      D: "To prevent the gradients from vanishing during deep network training."
    },
    correctAnswer: "A"
  },
  {
    id: 6,
    badge: "Advanced AI",
    badgeClass: "badge-advanced",
    question: "In a Transformer architecture, why is the dot product of queries (Q) and keys (K) scaled by 1 / &radic;d<sub>k</sub> in the attention calculation?",
    options: {
      A: "To align the dimensionalities of the Query and Key matrices for valid matrix multiplication.",
      B: "To speed up GPU computation by converting dot-products into a standard float division.",
      C: "To prevent dot-products from growing extremely large, which would push the softmax function into regions with vanishingly small gradients.",
      D: "To act as a regularization mechanism similar to dropout by scaling down less important weights."
    },
    correctAnswer: "C"
  },
  {
    id: 7,
    badge: "Advanced ML",
    badgeClass: "badge-advanced",
    question: "The \"double descent\" phenomenon in modern deep learning challenges the classical bias-variance trade-off. At what point does the test error typically peak before decreasing again?",
    options: {
      A: "When the model is small and in the high-bias classical underfitting regime.",
      B: "At the \"interpolation threshold,\" where the model is just complex enough to achieve near-zero training error.",
      C: "In the extreme overparameterization regime, where model parameters vastly exceed the number of training samples.",
      D: "During the early iterations of gradient descent, when weights are close to their initialization values."
    },
    correctAnswer: "B"
  },
  {
    id: 8,
    badge: "Optimization",
    badgeClass: "badge-advanced",
    question: "When training a neural network using the Adam optimizer, how does Adam fundamentally differ from standard Stochastic Gradient Descent (SGD) with momentum?",
    options: {
      A: "Adam scales the global learning rate exponentially relative to the number of completed training epochs.",
      B: "Adam uses a fixed second moment for all parameters while only updating the momentum vector dynamically.",
      C: "Adam computes the exact Hessian matrix of the parameters to perform second-order gradient updates.",
      D: "Adam computes adaptive learning rates for each parameter by tracking estimates of both the first moment (mean) and the second raw moment (uncentered variance) of the gradients."
    },
    correctAnswer: "D"
  },
  {
    id: 9,
    badge: "Statistics",
    badgeClass: "badge-advanced",
    question: "Consider Simpson's Paradox in statistics. Which of the following best describes this phenomenon?",
    options: {
      A: "A statistical trend appears in several different groups of data but disappears or reverses when the groups are combined.",
      B: "A model performs exceptionally well on the training data but completely fails to generalize to independent test data.",
      C: "Increasing the sample size of a study results in a higher probability of committing a Type I statistical error.",
      D: "In a linear regression model, two or more predictor variables are highly correlated with each other (multicollinearity)."
    },
    correctAnswer: "A"
  },
  {
    id: 10,
    badge: "Generative AI",
    badgeClass: "badge-advanced",
    question: "What is the fundamental difference in how GANs (Generative Adversarial Networks) and Diffusion Models generate new data samples?",
    options: {
      A: "GANs generate data through an autoregressive token-by-token process, while Diffusion Models generate the entire sample in a single forward pass.",
      B: "GANs optimize the evidence lower bound (ELBO) directly, while Diffusion Models use adversarial loss.",
      C: "GANs learn a mapping from a latent distribution using a generator-discriminator game, while Diffusion Models learn to iteratively reverse a noise addition process to reconstruct data.",
      D: "GANs are unsupervised while Diffusion Models are strictly supervised using labeled training datasets."
    },
    correctAnswer: "C"
  }
];

// ---------------------------------------------------------------------
// SET 2 — One question drawn from each of the 10 supplementary topic
// sections (Overfitting, Supervised Learning, Imbalanced Metrics,
// Validation Dataset, Activation Functions, Transformer Attention,
// Double Descent, Adam Optimizer, Simpson's Paradox, GANs vs Diffusion)
// ---------------------------------------------------------------------
const quizQuestions_set2 = [
  {
    id: 1,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "What is \"underfitting,\" and how does it differ from overfitting in terms of bias and variance?",
    options: {
      A: "Underfitting means the model is too simple to capture patterns (high bias, low variance); overfitting means the model captures noise (low bias, high variance).",
      B: "Underfitting and overfitting are the same phenomenon, just at different training epochs.",
      C: "Underfitting means the model memorizes training data; overfitting means it fails to learn anything.",
      D: "Underfitting only occurs in deep learning, while overfitting only occurs in classical ML models."
    },
    correctAnswer: "A"
  },
  {
    id: 2,
    badge: "Practical Application",
    badgeClass: "badge-simple",
    question: "Which of the following algorithms is best suited for a clustering task with no labeled data?",
    options: {
      A: "Logistic Regression",
      B: "K-Means",
      C: "Random Forest",
      D: "Support Vector Machine"
    },
    correctAnswer: "B"
  },
  {
    id: 3,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "Why is precision-recall AUC often preferred over ROC-AUC for highly imbalanced datasets?",
    options: {
      A: "PR-AUC is easier to compute than ROC-AUC.",
      B: "PR-AUC focuses on performance for the minority (positive) class, which ROC-AUC can mask due to a large number of true negatives.",
      C: "ROC-AUC cannot be computed for imbalanced datasets at all.",
      D: "PR-AUC and ROC-AUC always give identical results, so preference doesn't matter."
    },
    correctAnswer: "B"
  },
  {
    id: 4,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "What is the difference between a validation set and a test set in the model development lifecycle?",
    options: {
      A: "They are identical and interchangeable terms.",
      B: "The validation set is used for tuning hyperparameters/model selection, while the test set gives an unbiased final performance estimate.",
      C: "The test set is used during training, while the validation set is used only after deployment.",
      D: "The validation set is always larger than the test set."
    },
    correctAnswer: "B"
  },
  {
    id: 5,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "Why would a neural network with only linear activation functions fail to learn complex, non-linear patterns regardless of depth?",
    options: {
      A: "Because linear layers stacked together still collapse into a single linear transformation.",
      B: "Because linear activations cause immediate numerical overflow.",
      C: "Because linear activations require more training data than non-linear ones.",
      D: "Because linear activations only work for binary classification."
    },
    correctAnswer: "A"
  },
  {
    id: 6,
    badge: "Advanced AI",
    badgeClass: "badge-advanced",
    question: "What would happen to the softmax output in self-attention if the Q&middot;K dot product were not scaled at all, especially for large d<sub>k</sub>?",
    options: {
      A: "Nothing changes; scaling is purely cosmetic.",
      B: "The dot products would grow large in magnitude, pushing softmax into regions with extremely small gradients.",
      C: "The attention weights would become uniform regardless of input.",
      D: "The model would train faster without scaling."
    },
    correctAnswer: "B"
  },
  {
    id: 7,
    badge: "Advanced ML",
    badgeClass: "badge-advanced",
    question: "How does double descent challenge the classical assumption that increasing model complexity always eventually hurts generalization?",
    options: {
      A: "It shows test error can decrease again after an initial rise, once model capacity grows well past the interpolation point.",
      B: "It proves the classical bias-variance trade-off is entirely wrong in all cases.",
      C: "It shows that more complex models always perform worse, confirming the classical view.",
      D: "It only applies to linear regression models."
    },
    correctAnswer: "A"
  },
  {
    id: 8,
    badge: "Optimization",
    badgeClass: "badge-advanced",
    question: "What do the first and second moment estimates in Adam represent, and how are they used to update parameters?",
    options: {
      A: "They represent the mean and uncentered variance of past gradients, used to adapt the learning rate per parameter.",
      B: "They represent the maximum and minimum gradient values seen so far.",
      C: "They represent the loss value and its second derivative only.",
      D: "They represent random noise added to gradients for regularization."
    },
    correctAnswer: "A"
  },
  {
    id: 9,
    badge: "Statistics",
    badgeClass: "badge-advanced",
    question: "Give an example of how aggregating data across groups can reverse a trend seen within each individual group.",
    options: {
      A: "A treatment performs better than a control within every hospital individually, but appears worse overall when hospital data is combined without adjusting for patient severity mix.",
      B: "This can never happen; aggregated trends always match group-level trends.",
      C: "It only occurs when sample sizes are identical across all groups.",
      D: "It only applies to time-series data, not cross-sectional data."
    },
    correctAnswer: "A"
  },
  {
    id: 10,
    badge: "Generative AI",
    badgeClass: "badge-advanced",
    question: "Why are GANs typically faster at inference than diffusion models, and what trade-off does this involve?",
    options: {
      A: "GANs generate samples in a single forward pass, while diffusion models require many iterative denoising steps, often trading off some sample diversity/stability for speed.",
      B: "GANs are always slower because they use two networks instead of one.",
      C: "Diffusion models generate samples in a single step, making them faster than GANs.",
      D: "There is no speed difference between the two approaches."
    },
    correctAnswer: "A"
  }
];

// ---------------------------------------------------------------------
// SET 3 — New topics (Bias-Variance Tradeoff, Feature Scaling,
// Train-Test Split, Confusion Matrix, Types of ML, Regularization,
// Ensemble Methods, PCA, Batch Normalization, RNN Gradients)
// 5 Easy / 3 Medium / 2 Advanced
// ---------------------------------------------------------------------
const quizQuestions_set3 = [
  {
    id: 1,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "What does the bias-variance tradeoff describe in machine learning models?",
    options: {
      A: "The relationship between model complexity and error due to underfitting (bias) versus overfitting (variance).",
      B: "The tradeoff between training time and inference time.",
      C: "The relationship between dataset size and feature count.",
      D: "The tradeoff between GPU memory and CPU memory usage."
    },
    correctAnswer: "A"
  },
  {
    id: 2,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "Why is feature scaling important for algorithms like KNN or Gradient Descent-based models?",
    options: {
      A: "It removes the need for a train-test split entirely.",
      B: "Features with larger numeric ranges can disproportionately dominate distance calculations or slow convergence if left unscaled.",
      C: "It automatically increases model accuracy to 100%.",
      D: "It converts categorical features into numeric ones."
    },
    correctAnswer: "B"
  },
  {
    id: 3,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "What is the primary reason for splitting a dataset into training and test sets?",
    options: {
      A: "To reduce the total amount of data that needs to be stored.",
      B: "To evaluate how well the model generalizes to unseen data rather than just memorizing the training data.",
      C: "To make the model train faster by using less data.",
      D: "To ensure the model only learns from the most recent data points."
    },
    correctAnswer: "B"
  },
  {
    id: 4,
    badge: "Practical Application",
    badgeClass: "badge-simple",
    question: "In a confusion matrix, what does a \"false positive\" represent?",
    options: {
      A: "The model correctly predicts the positive class.",
      B: "The model incorrectly predicts the negative class as positive.",
      C: "The model correctly predicts the negative class.",
      D: "The model incorrectly predicts the positive class as negative."
    },
    correctAnswer: "B"
  },
  {
    id: 5,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "Which type of ML involves an agent learning via rewards/penalties from its environment?",
    options: {
      A: "Supervised Learning",
      B: "Unsupervised Learning",
      C: "Reinforcement Learning",
      D: "Semi-supervised Learning"
    },
    correctAnswer: "C"
  },
  {
    id: 6,
    badge: "Practical Application",
    badgeClass: "badge-simple",
    question: "Key difference between L1 (Lasso) and L2 (Ridge) regularization?",
    options: {
      A: "L1 can shrink some coefficients exactly to zero (feature selection), while L2 shrinks coefficients smoothly toward zero without eliminating them.",
      B: "L1 and L2 always produce identical coefficients.",
      C: "L2 eliminates the intercept term while L1 does not.",
      D: "L1 only works with categorical data, L2 only with continuous data."
    },
    correctAnswer: "A"
  },
  {
    id: 7,
    badge: "Practical Application",
    badgeClass: "badge-simple",
    question: "How does boosting fundamentally differ from bagging?",
    options: {
      A: "Boosting trains models independently in parallel; bagging trains them sequentially.",
      B: "Boosting trains models sequentially, each correcting prior errors; bagging trains models independently in parallel on bootstrapped samples.",
      C: "Boosting and bagging are identical techniques.",
      D: "Boosting only works with decision trees, bagging works with any model."
    },
    correctAnswer: "B"
  },
  {
    id: 8,
    badge: "Conceptual",
    badgeClass: "badge-simple",
    question: "Primary goal of PCA on a high-dimensional dataset?",
    options: {
      A: "To increase the number of features to improve accuracy.",
      B: "To classify data points into predefined categories.",
      C: "To transform correlated features into a smaller set of uncorrelated components capturing maximum variance.",
      D: "To remove all outliers automatically."
    },
    correctAnswer: "C"
  },
  {
    id: 9,
    badge: "Advanced AI",
    badgeClass: "badge-advanced",
    question: "What problem does Batch Normalization primarily address?",
    options: {
      A: "It eliminates the need for an activation function entirely.",
      B: "It reduces internal covariate shift by normalizing layer inputs, stabilizing and speeding up training.",
      C: "It replaces backpropagation with a closed-form solution.",
      D: "It compresses model size for faster inference."
    },
    correctAnswer: "B"
  },
  {
    id: 10,
    badge: "Advanced ML",
    badgeClass: "badge-advanced",
    question: "Why are traditional RNNs susceptible to vanishing/exploding gradients on long sequences?",
    options: {
      A: "Because RNNs use ReLU activations exclusively, which always cause gradients to explode.",
      B: "Because repeated gradient multiplication through many time steps during BPTT can shrink gradients toward zero or grow them unboundedly.",
      C: "Because RNNs do not use backpropagation at all.",
      D: "Because RNNs only process one time step and never propagate gradients backward."
    },
    correctAnswer: "B"
  }
];

// ---------------------------------------------------------------------
// SET SELECTION — pick one set at random each time the quiz loads
// ---------------------------------------------------------------------
const quizQuestions_list = [quizQuestions_set1, quizQuestions_set2, quizQuestions_set3];
const quizQuestions = quizQuestions_list[Math.floor(Math.random() * quizQuestions_list.length)];
