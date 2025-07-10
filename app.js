// Example questions
const questions = [
  {
    question: "Isomerization is a type of?",
    options: ["Anaerobic Respiration", "Aerobic Respiration", "Fermentation", "Photophosphorylation"],
    answer: "Anaerobic Respiration"
  },
  {
    question: "Suspended colloidal particles in water are removed by?",
    options: ["Distillation", "Coagulation", "Filtration", "Sedimentation"],
    answer: "Coagulation"
  },
  {
    question: "Iron and manganese can be removed from water by?",
    options: ["Chlorination", "Aeration", "Flocculation", "Softening"],
    answer: "Flocculation"
  },
  {
    question: "Which color of light is least effective in photosynthesis?",
    options: ["Red", "Blue", "Green", "White"],
    answer: "Green"
  },
  {
    question: "The term 'Rhizosphere' was given by?",
    options: ["Hiltner", "Linnaeus", "Robert Hooke", "Darwin"],
    answer: "Hiltner"
  },
  {
    question: "Which sugar is the sweetest?",
    options: ["Glucose", "Sucrose", "Fructose", "Lactose"],
    answer: "Fructose"
  },
  {
    question: "Air pollution indicator organisms are?",
    options: ["Mosses", "Fungi", "Lichens", "Algae"],
    answer: "Lichens"
  },
  {
    question: "In galvanization, iron is coated with?",
    options: ["Tin", "Lead", "Zinc", "Copper"],
    answer: "Zinc"
  },
  {
    question: "The enzyme that digests proteins in the stomach is?",
    options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    answer: "Pepsin"
  },
  {
    question: "Transcription is the synthesis of?",
    options: ["DNA", "RNA", "Protein", "Carbohydrates"],
    answer: "RNA"
  },
  {
    question: "Rutherford’s model of the atom discovered?",
    options: ["Nucleus", "Electron cloud", "Protons", "Neutrons"],
    answer: "Nucleus"
  },
  {
    question: "Cactus is an example of?",
    options: ["Xerophyte", "Mesophyte", "Hydrophyte", "Halophyte"],
    answer: "Xerophyte"
  },
  {
    question: "Which hormone increases blood pressure?",
    options: ["Adrenaline", "Thyroxine", "Insulin", "Glucagon"],
    answer: "Thyroxine"
  },
  {
    question: "Hydrolysis of cellulose produces?",
    options: ["Glucose", "Fructose", "Sucrose", "Maltose"],
    answer: "Glucose"
  },
  {
    question: "An alpha particle is the nucleus of?",
    options: ["Helium", "Hydrogen", "Lithium", "Neon"],
    answer: "Helium"
  },
  {
    question: "Which pigment absorbs red and far-red light?",
    options: ["Phytochrome", "Chlorophyll-a", "Carotenoids", "Xanthophyll"],
    answer: "Phytochrome"
  },
  {
    question: "Hypothermia occurs when?",
    options: ["The body loses heat faster than it produces", "The body gains heat rapidly", "Blood sugar drops", "Pulse rate increases"],
    answer: "The body loses heat faster than it produces"
  },
  {
    question: "Seat of intelligence in the brain is?",
    options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
    answer: "Cerebrum"
  },
  {
    question: "The antiseptic compound in Dettol is?",
    options: ["Chloroxylenol", "Phenol", "Mercurochrome", "Iodine"],
    answer: "Chloroxylenol"
  },
  {
    question: "Which river flows through the Grand Canyon?",
    options: ["Colorado", "Mississippi", "Amazon", "Nile"],
    answer: "Colorado"
  },
  {
    question: "Which dam is the highest in India?",
    options: ["Tehri Dam", "Bhakra Nangal Dam", "Sardar Sarovar", "Hirakud Dam"],
    answer: "Tehri Dam"
  },
  {
    question: "Which Indian state has the longest coastline?",
    options: ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Maharashtra"],
    answer: "Gujarat"
  },
  {
    question: "What is the largest bone in the human body?",
    options: ["Femur", "Tibia", "Humerus", "Radius"],
    answer: "Femur"
  },
  {
    question: "Who was the first woman Governor of an Indian state?",
    options: ["Sarojini Naidu", "Indira Gandhi", "Sushma Swaraj", "Annie Besant"],
    answer: "Sarojini Naidu"
  },
  {
    question: "The first Lok Sabha elections in India were held in?",
    options: ["1951-52", "1947-48", "1960-61", "1955-56"],
    answer: "1951-52"
  },
  {
    question: "Which unit is used to measure magnetic field intensity?",
    options: ["Tesla", "Gauss", "Ampere", "Farad"],
    answer: "Tesla"
  },
  {
    question: "Malaria is caused by?",
    options: ["Plasmodium", "Trypanosoma", "Ascaris", "Ebola Virus"],
    answer: "Plasmodium"
  },
  {
    question: "India's first underwater metro is in?",
    options: ["Kolkata", "Mumbai", "Chennai", "Delhi"],
    answer: "Kolkata"
  },
  {
    question: "Valley of Flowers National Park is in?",
    options: ["Uttarakhand", "Sikkim", "Himachal Pradesh", "Arunachal Pradesh"],
    answer: "Uttarakhand"
  }
];


let currentUser = null;
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 10;

// DOM Elements
const loginScreen = document.getElementById("login-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");

// Login logic
document.getElementById("login-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    currentUser = username;
    startQuiz();
  } else {
    document.getElementById("login-error").innerText = "Please fill in all fields.";
  }
});

// Start quiz
function startQuiz() {
  loginScreen.classList.remove("active");
  quizScreen.classList.add("active");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

// Show question
function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  questionText.innerText = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = option;

    const label = document.createElement("label");
    label.innerText = option;

    optionDiv.appendChild(input);
    optionDiv.appendChild(label);

    optionsContainer.appendChild(optionDiv);

    input.addEventListener("change", () => checkAnswer(option));
  });

  timeLeft = 10;
  timerDisplay.innerText = timeLeft;
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}
// Timer
function updateTimer() {
  timeLeft--;
  timerDisplay.innerText = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    // Automatically show correct answer
    showCorrectAnswer();

    // Wait 2 seconds before going to next question
    setTimeout(nextQuestion, 2000);
  }
}

function showCorrectAnswer() {
  const correctAnswer = questions[currentQuestionIndex].answer;
  const optionDivs = document.querySelectorAll(".option");

  optionDivs.forEach(div => {
    const input = div.querySelector("input");
    if (input.value === correctAnswer) {
      div.classList.add("correct"); // Highlight correct
    }
    input.disabled = true; // Disable all options
  });
}

// Timer

// Check answer
function checkAnswer(selected) {
  clearInterval(timerInterval);
  const correctAnswer = questions[currentQuestionIndex].answer;

  const optionDivs = document.querySelectorAll(".option");
  optionDivs.forEach(div => {
    const input = div.querySelector("input");
    if (input.value === correctAnswer) {
      div.classList.add("correct");
    }
    if (input.value === selected && selected !== correctAnswer) {
      div.classList.add("wrong");
    }
    input.disabled = true;
  });

  if (selected === correctAnswer) {
    score++;
  }

  // Add Next button
  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Next";
  nextBtn.addEventListener("click", nextQuestion);
  optionsContainer.appendChild(nextBtn);
}

// Next question
function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

// End quiz
function endQuiz() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  scoreDisplay.innerText = `${score} / ${questions.length}`;
}

// Restart
document.getElementById("restart-btn").addEventListener("click", () => {
  resultScreen.classList.remove("active");
  loginScreen.classList.add("active");
});
