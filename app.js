const questions = [
  {
    question: "Article 14 of the Indian Constitution deals with?",
    options: ["Right to Freedom", "Right to Equality", "Right to Property", "Right to Education"],
    answer: "Right to Equality"
  },
  {
    question: "Which folk dance is from Punjab?",
    options: ["Bihu", "Garba", "Bhangra", "Yakshagana"],
    answer: "Bhangra"
  },
  {
    question: "Who discovered the Indus Valley Civilization?",
    options: ["Lord Ripon", "Daya Ram Sahni", "Sir John Marshall", "R.D. Banerjee"],
    answer: "Daya Ram Sahni"
  },
  
  {
    question: "Jaldapara National Park is located in which state?",
    options: ["West Bengal", "Assam", "Odisha", "Jharkhand"],
    answer: "West Bengal"
  },
  {
    question: "Orang National Park is in?",
    options: ["Meghalaya", "Assam", "Sikkim", "Nagaland"],
    answer: "Assam"
  },
  {
    question: "Bengaluru is situated on the banks of which river?",
    options: ["Kaveri", "Krishna", "Vrishabhavathi", "Tungabhadra"],
    answer: "Vrishabhavathi"
  },
  {
    question: "Medicine for Tuberculosis?",
    options: ["Isoniazid", "Rifampicin", "Streptomycin", "Pyrazinamide"],
    answer: "Rifampicin"
  },
  {
    question: "Who invented the Thermometer?",
    options: ["Galileo", "Newton", "Benjamin", "Fahrenheit"],
    answer: "Benjamin"
  },
  {
    question: "What is the maximum quantity of gas in the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen"
  },
  {
    question: "Amount of nitrogen in producer gas?",
    options: ["20%", "60%", "80%", "40%"],
    answer: "60%"
  },
  {
    question: "Which resistant compound is found in petrol?",
    options: ["Endosulfan", "Endoxylene", "Endoxylgent", "Endospermic"],
    answer: "Endoxylgent"
  },
  {
    question: "What is unsolicited electronic message sent for promotional purposes called?",
    options: ["Spam", "Junk", "Bot", "Cache"],
    answer: "Spam"
  },
  {
    question: "How much iceberg floats above sea surface while floating in the sea?",
    options: ["60%", "90%", "30%", "10%"],
    answer: "10%"
  },
  {
    question: "What does a sudden drop in aerodymanic reading indicate?",
    options: ["Rainy weather", "Sunny weather", "Stormy weather", "Windy weather"],
    answer: "Stormy"
  },
  {
    question: "What is another name for RDX?",
    options: ["TNT", "C4", "Cyclonite", "Amatol"],
    answer: "Cyclonite"
  },
  {
    question: "Who invented Nylon?",
    options: ["Marie Curie", "Dr. Wallace H. Carothers", "Louis Pasteur", "Benjamin Franklin"],
    answer: "Dr. Wallace H. Carothers"
  },
  {
    question: "Who discovered Mitochondria?",
    options: ["Robert Hooke", "Richard Altmann", "Golgi", "Virchow"],
    answer: "Richard Altmann"
  },
  {
    question: "Which gas is used to ripen green plant's fruits artificially?",
    options: ["Methane", "Ethylene", "Ammonia", "Oxygen"],
    answer: "Ethylene"
  },
  {
    question: "Hydrolysis of sucrose produces?",
    options: ["Fructose and Maltose", "Glucose and Galactose", "Glucose and Fructose", "Lactose and Maltose"],
    answer: "Glucose & Fructose"
  },
  {
    question: "Bagasse is used in which industry?",
    options: ["Textile", "Paper", "Steel", "Plastic"],
    answer: "Paper Industry"
  },
  {
    question: "Molasses is best raw material for making?",
    options: ["Alcohol", "Plastic", "Paper", "Rubber"],
    answer: "Alcohol"
  },
  {
    question: "Methane is present in atmosphere of which planet?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    answer: "Jupiter"
  },
  {
    question: "Which gas is produced by plastic?",
    options: ["Methane", "Ozone", "Hydrogen", "Polyethylene"],
    answer: "Polyethylene"
  },
  {
    question: "Which antimicrobial substance is found in blood?",
    options: ["Hemoglobin", "Thrombin", "Plasma", "Platelets"],
    answer: "Thrombin"
  },
  {
    question: "Which cells produce antibodies?",
    options: ["Monocytes", "Lymphocytes", "Erythrocytes", "Platelets"],
    answer: "Lymphocytes"
  },
  {
    question: "Due to which acid does stale butter smell bad?",
    options: ["Acetic Acid", "Lactic Acid", "Butyric Acid", "Citric Acid"],
    answer: "Butyric Acid"
  },
  {
    question: "Which isotope is used in cancer treatment?",
    options: ["C-12", "U-238", "Co-60", "I-131"],
    answer: "Co-60"
  },
  {
    question: "City of Ahmedabad is situated on the banks of?",
    options: ["Sabarmati", "Ganga", "Tapti", "Godavari"],
    answer: "Sabarmati"
  },
  {
    question: "Sundarbans National Park is located in?",
    options: ["West Bengal", "Odisha", "Andhra Pradesh", "Tamil Nadu"],
    answer: "West Bengal"
  },
  {
    question: "Yakshagana is a dance form of which state?",
    options: ["Kerala", "Karnataka", "Andhra Pradesh", "Tamil Nadu"],
    answer: "Karnataka"
  },
  {
    question: "Who discovered the electron?",
    options: ["J.J. Thomson", "Neils Bohr", "Rutherford", "Einstein"],
    answer: "J.J. Thomson"
  },
  {
    question: "Which Indian scientist invented the Crescograph?",
    options: ["C.V. Raman", "Homi Bhabha", "Jagadish Chandra Bose", "Satyendra Nath Bose"],
    answer: "Jagadish Chandra Bose"
  },
  {
    question: "Deficiency of Vitamin B1 causes?",
    options: ["Pellagra", "Scurvy", "Beriberi", "Rickets"],
    answer: "Beriberi"
  },
  {
    question: "Which organelle is called the suicide bag of the cell?",
    options: ["Mitochondria", "Golgi Apparatus", "Lysosomes", "Ribosomes"],
    answer: "Lysosomes"
  },


  {
    question: "The Lord's Stadium is associated with which sport?",
    options: ["Tennis", "Cricket", "Football", "Hockey"],
    answer: "Cricket"
  },
  {
    question: "Father of Chess is known as?",
    options: ["Vishwanathan Anand", "Wilhelm Steinitz", "Bobby Fischer", "Magnus Carlsen"],
    answer: "Wilhelm Steinitz"
  },
  {
    question: "Who wrote 'Hind Swaraj'?",
    options: ["B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Which tribe belongs to Madhya Pradesh?",
    options: ["Toda", "Mizo", "Gond", "Bhils"],
    answer: "Gond"
  },
  {
    question: "In which year did the Jallianwala Bagh massacre take place?",
    options: ["1917", "1918", "1919", "1920"],
    answer: "1919"
  },
  {
    question: "Who was the founder of Aligarh Muslim University?",
    options: ["Sir Syed Ahmed Khan", "Maulana Abul Kalam Azad", "Badruddin Tyabji", "S.A. Rahman"],
    answer: "Sir Syed Ahmed Khan"
  },
  {
    question: "Sattriya dance form originated from which state?",
    options: ["Kerala", "Assam", "Odisha", "Maharashtra"],
    answer: "Assam"
  },
  {
    question: "Ganymede is the satellite of which planet?",
    options: ["Jupiter", "Saturn", "Neptune", "Mars"],
    answer: "Jupiter"
  },
  {
    question: "What is the main source of energy in the Sun?",
    options: ["Nuclear fission", "Nuclear fusion", "Combustion", "Chemical reaction"],
    answer: "Nuclear fusion"
  },
  {
    question: "Which planet has the lowest density in the Solar System?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    answer: "Saturn"
  },
  {
    question: "Earth's core is responsible for?",
    options: ["Seasons", "Gravity", "Magnetic field", "Ozone layer"],
    answer: "Magnetic field"
  },
  {
    question: "Most abundant metal in earth's crust?",
    options: ["Iron", "Aluminium", "Copper", "Magnesium"],
    answer: "Aluminium"
  },
  {
    question: "Earth rotates from?",
    options: ["East to West", "West to East", "North to South", "South to North"],
    answer: "West to East"
  },
  {
    question: "At what speed does earth revolve per minute?",
    options: ["10 km/min", "15 km/min", "20 km/min", "27 km/min"],
    answer: "27 km/min"
  },
  {
    question: "Moon completes one rotation on its axis in?",
    options: ["27 days", "365 days", "14 days", "1 day"],
    answer: "27 days"
  },
  {
    question: "Mass of Earth is?",
    options: ["6x10^23 kg", "5x10^25 kg", "6x10^24 kg", "5x10^24 kg"],
    answer: "6x10^24 kg"
  },
  {
    question: "Total area of India as a percentage of total geographic area of the world?",
    options: ["2.0%", "2.2%", "2.4%", "2.6%"],
    answer: "2.4%"
  },
  {
    question: "Who invented vaccination for smallpox?",
    options: ["Louis Pasteur", "Edward Jenner", "Joseph Lister", "Robert Koch"],
    answer: "Edward Jenner"
  },
  {
    question: "BT seeds are associated with which crop?",
    options: ["Wheat", "Cotton", "Rice", "Maize"],
    answer: "Cotton"
  },
  {
    question: "Element used for vulcanizing rubber?",
    options: ["Phosphorus", "Sulphur", "Bromine", "Chlorine"],
    answer: "Sulphur"
  },
  {
    question: "Noble gas used for treatment of cancer?",
    options: ["Helium", "Radon", "Neon", "Argon"],
    answer: "Radon"
  },
  {
    question: "At standard temperature, which elements are in liquid state?",
    options: ["Mercury & Bromine", "Chlorine & Fluorine", "Sodium & Potassium", "Lead & Tin"],
    answer: "Mercury & Bromine"
  },
  {
    question: "Enzyme that digests protein in stomach?",
    options: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
    answer: "Pepsin"
  },
  {
    question: "Largest state in India (in terms of area)?",
    options: ["Maharashtra", "Madhya Pradesh", "Rajasthan", "Uttar Pradesh"],
    answer: "Rajasthan"
  },
  {
    question: "Measurement of coastline in India?",
    options: ["6000 km", "7516.6 km", "5000 km", "8200 km"],
    answer: "7516.6 km"
  },
  {
    question: "Shortest coastline in which state?",
    options: ["Goa", "Odisha", "West Bengal", "Puducherry"],
    answer: "West Bengal"
  },
  {
    question: "The terrestrial waters of India extend from baseline of coast to distance of?",
    options: ["10 nautical miles", "12 nautical miles", "15 nautical miles", "20 nautical miles"],
    answer: "12 nautical miles"
  },
  {
    question: "India shares border with ____ in NE?",
    options: ["Afghanistan", "Myanmar", "China", "Bangladesh"],
    answer: "Afghanistan"
  },
  {
    question: "Andaman & Nicobar Islands Union territory of India. No. of islands?",
    options: ["22", "28", "36", "42"],
    answer: "22"
  },
  {
    question: "Which article abolishes untouchability?",
    options: ["Article 14", "Article 15", "Article 16", "Article 17"],
    answer: "Article 17"
  },
  {
    question: "Animals belonging to Mollusca class?",
    options: ["Soft bodied", "Segmented body", "Exoskeleton", "Jointed legs"],
    answer: "Soft bodied"
  },
  {
    question: "Newton's First Law is also called?",
    options: ["Law of Acceleration", "Law of Gravity", "Law of Inertia", "Law of Motion"],
    answer: "Law of Inertia"
  },
  {
    question: "Unit of intensity of sound?",
    options: ["Hertz", "Decibel", "Newton", "Pascal"],
    answer: "Decibel"
  },
  {
    question: "Author of 'India After Gandhi'?",
    options: ["Ramachandra Guha", "R.K. Narayan", "Chetan Bhagat", "Khushwant Singh"],
    answer: "Ramachandra Guha"
  },
  {
    question: "Who wrote 'Train to Pakistan'?",
    options: ["R.K. Narayan", "Manohar Malgonkar", "Raja Rao", "Khushwant Singh"],
    answer: "Khushwant Singh"
  },
  {
    question: "1st Indian to win gold medal in hockey in Olympics?",
    options: ["Balbir Singh", "Dhyan Chand", "P. R. Sreejesh", "Harmanpreet Singh"],
    answer: "Dhyan Chand"
  },
  {
    question: "Isotope used as nuclear reactor fuel?",
    options: ["U-235", "U-238", "C-14", "Pu-239"],
    answer: "U-235"
  },
  {
    question: "When Quicklime is added to water, what happens?",
    options: ["Cooling and light", "Hissing sound and heat", "No reaction", "Emission of gas"],
    answer: "Hissing sound and heat"
  },
  {
    question: "Function of Bowman's capsule?",
    options: ["Blood filtration in nephrons", "Protein synthesis", "Hormone production", "Oxygen transport"],
    answer: "Blood filtration in nephrons"
  },
  {
    question: "Ribosome function is?",
    options: ["DNA synthesis", "Protein synthesis", "Lipid transport", "Energy storage"],
    answer: "Protein synthesis"
  },
  {
    question: "Plasmodesmata are connections between?",
    options: ["Plant cells", "Animal cells", "Bacteria", "Fungi"],
    answer: "Plant cells"
  },
  {
    question: "Scientific name of malaria parasite?",
    options: ["Plasmodium", "Trypanosoma", "Leishmania", "Entamoeba"],
    answer: "Plasmodium"
  },
  {
    question: "Genetic material in Reovirus?",
    options: ["DNA", "RNA", "Both DNA & RNA", "None"],
    answer: "RNA"
  },
  {
    question: "Chief Election Commissioner (2025)?",
    options: ["Sunil Arora", "Rajiv Kumar", "Om Prakash Rawat", "T. N. Seshan"],
    answer: "Rajiv Kumar"
  },
  {
    question: "Proposed 2036 Olympic host city in India?",
    options: ["Delhi", "Mumbai", "Ahmedabad", "Chennai"],
    answer: "Ahmedabad"
  },
  {
    question: "First green hydrogen plant in India is located at?",
    options: ["Gujarat", "Kerala", "Maharashtra", "Rajasthan"],
    answer: "Gujarat"
  },
  {
    question: "Chandrayaan-3 landed on?",
    options: ["Mars", "Moon equator", "Moon South Pole", "Venus"],
    answer: "Moon South Pole"
  },
  {
    question: "CEO of OpenAI?",
    options: ["Elon Musk", "Sam Altman", "Sundar Pichai", "Satya Nadella"],
    answer: "Sam Altman"
  },
  {
    question: "First fully solar-powered metro?",
    options: ["Delhi Metro", "Mumbai Metro", "Kolkata Metro", "Hyderabad Metro"],
    answer: "Delhi Metro"
  },
  {
    question: "Full form of PM-WANI?",
    options: ["Wifi Access Network Interface", "Wireless Area Network Initiative", "Public Wifi Access India", "None of these"],
    answer: "Wifi Access Network Interface"
  },
  {
    question: "Ayushman Bharat brand ambassador?",
    options: ["Amitabh Bachchan", "Akshay Kumar", "Aamir Khan", "Shah Rukh Khan"],
    answer: "Amitabh Bachchan"
  },
  {
    question: "First Governor General of India?",
    options: ["Cornwallis", "Warren Hastings", "Dalhousie", "Mountbatten"],
    answer: "Warren Hastings"
  },
  {
    question: "Rowlatt Act was passed in?",
    options: ["1917", "1919", "1921", "1923"],
    answer: "1919"
  },
  {
    question: "Brihadeeswara temple was built by which Chola king?",
    options: ["Rajaraja I", "Rajaraja II", "Kulothunga I", "Rajendra I"],
    answer: "Rajaraja I"
  },
  {
    question: "Who led Kakori conspiracy?",
    options: ["Bhagat Singh", "Ram Prasad Bismil", "Chandrashekhar Azad", "Ashfaqulla Khan"],
    answer: "Ram Prasad Bismil"
  },
  {
    question: "Which article deals with amendment procedure of constitution?",
    options: ["Article 368", "Article 370", "Article 356", "Article 352"],
    answer: "Article 368"
  },
  {
    question: "Which Indian state has longest coastline?",
    options: ["Maharashtra", "Andhra Pradesh", "Tamil Nadu", "Gujarat"],
    answer: "Gujarat"
  },
  {
    question: "Unit of electrical capacitance?",
    options: ["Tesla", "Farad", "Ohm", "Henry"],
    answer: "Farad"
  },
  {
    question: "Velocity of sound in air @ room temperature?",
    options: ["300 m/s", "343 m/s", "250 m/s", "400 m/s"],
    answer: "343 m/s"
  },
  {
    question: "Unit of magnetic field intensity?",
    options: ["Weber", "Tesla", "Gauss", "Henry"],
    answer: "Tesla"
  },
  {
    question: "Liquid at room temperature?",
    options: ["Bromine & Mercury", "Chlorine & Oxygen", "Iodine & Nitrogen", "Hydrogen & Helium"],
    answer: "Bromine & Mercury"
  },
  {
    question: "First state to implement Uniform Civil Code?",
    options: ["Kerala", "Goa", "Uttarakhand", "Tamil Nadu"],
    answer: "Goa"
  },
  {
    question: "Largest island in Indian Ocean?",
    options: ["Sri Lanka", "Andaman", "Madagascar", "Sumatra"],
    answer: "Madagascar"
  },
  {
    question: "Finance Commission in India is established by which Article?",
    options: ["Article 280", "Article 360", "Article 370", "Article 368"],
    answer: "Article 280"
  },
  {
    question: "Quicklime is?",
    options: ["CaCO₃", "CaO", "Ca(OH)₂", "MgO"],
    answer: "CaO"
  },
  {
    question: "Who introduced Ryotwari System in India?",
    options: ["Thomas Munro", "Lord Dalhousie", "Cornwallis", "Wellesley"],
    answer: "Thomas Munro"
  },
  {
    question: "Jallianwala Bagh massacre took place in?",
    options: ["1917", "1918", "1919", "1920"],
    answer: "1919"
  },
  {
    question: "1st Indian to be elected to British Parliament?",
    options: ["Mahatma Gandhi", "Dadabhai Naoroji", "Gopal Krishna Gokhale", "S.N. Banerjee"],
    answer: "Dadabhai Naoroji"
  },
  {
    question: "Capital of Kakatiya Dynasty?",
    options: ["Warangal", "Delhi", "Madurai", "Kanchipuram"],
    answer: "Warangal"
  },
  {
    question: "First Indian Sultan to introduce price control?",
    options: ["Alauddin Khilji", "Balban", "Qutub-ud-din Aibak", "Iltutmish"],
    answer: "Alauddin Khilji"
  },
  {
    question: "Indian National Army formed in?",
    options: ["1940", "1941", "1942", "1943"],
    answer: "1942"
  },
  {
    question: "Who led Bardoli Satyagraha?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
    answer: "Sardar Vallabhbhai Patel"
  },
  {
    question: "Mughal emperor who banned use of tobacco?",
    options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
    answer: "Aurangzeb"
  },
  {
    question: "Article for abolition of titles?",
    options: ["Article 17", "Article 18", "Article 19", "Article 21"],
    answer: "Article 18"
  },
  {
    question: "Fundamental duties in Constitution?",
    options: ["Part III", "Part IV", "Part IV-A", "Part V"],
    answer: "Part IV-A"
  },
  {
    question: "Right to Constitutional Remedies is in?",
    options: ["Article 21", "Article 31", "Article 32", "Article 36"],
    answer: "Article 32"
  },
  {
    question: "Schedule related to seat in Rajya Sabha?",
    options: ["4th", "5th", "6th", "7th"],
    answer: "4th"
  },
  {
    question: "Panchayati Raj introduced in which amendment?",
    options: ["42nd", "44th", "73rd", "74th"],
    answer: "73rd"
  },
  {
    question: "Term 'Secular' added to Constitution by?",
    options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
    answer: "42nd Amendment"
  },
  {
    question: "Vice President elected by?",
    options: ["Lok Sabha only", "Both Houses of Parliament", "Rajya Sabha only", "President"],
    answer: "Both Houses of Parliament"
  },
  {
    question: "Which river flows through Grand Canyon in USA?",
    options: ["Mississippi", "Colorado", "Missouri", "Yukon"],
    answer: "Colorado"
  },
  {
    question: "Northern plains of India formed by?",
    options: ["Alluvial soil", "Black soil", "Laterite soil", "Red soil"],
    answer: "Alluvial soil"
  },
  {
    question: "Highest dam in India?",
    options: ["Tehri Dam", "Bhakra Nangal Dam", "Sardar Sarovar Dam", "Hirakud Dam"],
    answer: "Tehri Dam"
  },
  {
    question: "Saddle Peak highest point in?",
    options: ["Lakshadweep", "Andaman & Nicobar", "Himalayas", "Aravalli Hills"],
    answer: "Andaman & Nicobar"
  },
  {
    question: "Indian state largest producer of rice?",
    options: ["Tamil Nadu", "Punjab", "West Bengal", "Andhra Pradesh"],
    answer: "West Bengal"
  },
  {
    question: "Standard Meridian of India?",
    options: ["82.5°E", "75°E", "90°E", "85°E"],
    answer: "82.5°E"
  },
  {
    question: "Only active volcano in India?",
    options: ["Baratang Island", "Barren Island", "Minicoy Island", "Majuli"],
    answer: "Barren Island"
  },
  {
    question: "Five year plan launched in?",
    options: ["1950", "1951", "1952", "1953"],
    answer: "1951"
  },
  {
    question: "Who regulates stock exchange in India?",
    options: ["RBI", "SEBI", "Finance Ministry", "SBI"],
    answer: "SEBI"
  },
  {
    question: "Repo rate is decided by?",
    options: ["SBI", "NITI Aayog", "Finance Ministry", "RBI"],
    answer: "RBI"
  },
  {
    question: "Which industry known as Sunrise Industry?",
    options: ["Textiles", "Iron and Steel", "IT", "Railways"],
    answer: "IT"
  },
  {
    question: "NITI Aayog established in?",
    options: ["2014", "2015", "2016", "2017"],
    answer: "2015"
  },
  {
    question: "Newton's First Law is called?",
    options: ["Law of Gravitation", "Law of Inertia", "Law of Force", "Law of Acceleration"],
    answer: "Law of Inertia"
  },
  {
    question: "Which device converts AC to DC?",
    options: ["Transformer", "Rectifier", "Capacitor", "Inductor"],
    answer: "Rectifier"
  },
  {
    question: "Which quantity conserved in elastic collision?",
    options: ["Energy", "Momentum", "Both energy and momentum", "Force"],
    answer: "Both energy and momentum"
  },
  {
    question: "Acid used in car batteries?",
    options: ["Nitric acid", "Sulphuric acid", "Acetic acid", "Hydrochloric acid"],
    answer: "Sulphuric acid"
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
