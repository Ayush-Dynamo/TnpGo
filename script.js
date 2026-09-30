const questions = [
  // ==================== APTITUDE ====================
  {
    id: 1,
    category: "aptitude",
    question: "What is 25% of 200?",
    options: ["25", "40", "50", "75"],
    answer: 2
  },
  {
    id: 2,
    category: "aptitude",
    question: "If a train travels 120 km in 2 hours, what is its average speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    answer: 2
  },
  {
    id: 3,
    category: "aptitude",
    question: "What is the next number in the series: 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "36"],
    answer: 2
  },
  {
    id: 4,
    category: "aptitude",
    question: "A product costs ₹500 and is sold for ₹600. What is the profit percentage?",
    options: ["10%", "15%", "20%", "25%"],
    answer: 2
  },
  {
    id: 5,
    category: "aptitude",
    question: "What is the average of 10, 20, 30, 40 and 50?",
    options: ["20", "25", "30", "35"],
    answer: 2
  },
  {
    id: 6,
    category: "aptitude",
    question: "If 5 workers can complete a job in 10 days, how many days will 10 workers take?",
    options: ["2 days", "5 days", "10 days", "20 days"],
    answer: 1
  },
  {
    id: 7,
    category: "aptitude",
    question: "What is the simple interest on ₹1000 at 10% per annum for 2 years?",
    options: ["₹100", "₹150", "₹200", "₹250"],
    answer: 2
  },
  {
    id: 8,
    category: "aptitude",
    question: "A number is divisible by both 2 and 3. Which of the following must divide it?",
    options: ["4", "5", "6", "9"],
    answer: 2
  },
  {
    id: 9,
    category: "aptitude",
    question: "If x + 5 = 15, what is the value of x?",
    options: ["5", "10", "15", "20"],
    answer: 1
  },
  {
    id: 10,
    category: "aptitude",
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "14"],
    answer: 2
  },

  // ==================== TECHNICAL ====================
  {
    id: 11,
    category: "technical",
    question: "Which language is primarily used to structure web pages?",
    options: ["CSS", "HTML", "JavaScript", "Python"],
    answer: 1
  },
  {
    id: 12,
    category: "technical",
    question: "Which of the following is a programming language?",
    options: ["HTML", "CSS", "JavaScript", "HTTP"],
    answer: 2
  },
  {
    id: 13,
    category: "technical",
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Computer Processing Utility"
    ],
    answer: 0
  },
  {
    id: 14,
    category: "technical",
    question: "Which data structure follows the LIFO principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: 1
  },
  {
    id: 15,
    category: "technical",
    question: "Which data structure follows the FIFO principle?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: 1
  },
  {
    id: 16,
    category: "technical",
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "constant"],
    answer: 2
  },
  {
    id: 17,
    category: "technical",
    question: "Which HTTP status code means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    answer: 2
  },
  {
    id: 18,
    category: "technical",
    question: "Which of the following is a relational database?",
    options: ["MySQL", "MongoDB", "Redis", "Firebase"],
    answer: 0
  },
  {
    id: 19,
    category: "technical",
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "System Query Logic",
      "Structured Question Language"
    ],
    answer: 0
  },
  {
    id: 20,
    category: "technical",
    question: "Which symbol is used for a single-line comment in JavaScript?",
    options: ["<!--", "//", "/*", "#"],
    answer: 1
  },

  // ==================== ENGLISH ====================
  {
    id: 21,
    category: "english",
    question: "Choose the correct synonym for 'Happy'.",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    answer: 1
  },
  {
    id: 22,
    category: "english",
    question: "Choose the correct antonym for 'Difficult'.",
    options: ["Hard", "Easy", "Complex", "Tough"],
    answer: 1
  },
  {
    id: 23,
    category: "english",
    question: "Choose the grammatically correct sentence.",
    options: [
      "She go to school every day.",
      "She going to school every day.",
      "She goes to school every day.",
      "She gone to school every day."
    ],
    answer: 2
  },
  {
    id: 24,
    category: "english",
    question: "Fill in the blank: He ___ playing football.",
    options: ["is", "are", "am", "be"],
    answer: 0
  },
  {
    id: 25,
    category: "english",
    question: "What is the plural form of 'Child'?",
    options: ["Childs", "Childes", "Children", "Childrens"],
    answer: 2
  },
  {
    id: 26,
    category: "english",
    question: "Choose the correct spelling.",
    options: ["Recieve", "Receive", "Receeve", "Receve"],
    answer: 1
  },
  {
    id: 27,
    category: "english",
    question: "Identify the noun in the sentence: 'Rahul bought a new laptop.'",
    options: ["bought", "new", "Rahul", "a"],
    answer: 2
  },
  {
    id: 28,
    category: "english",
    question: "Choose the correct article: She is ___ honest person.",
    options: ["a", "an", "the", "no article"],
    answer: 1
  },
  {
    id: 29,
    category: "english",
    question: "Choose the synonym for 'Begin'.",
    options: ["End", "Start", "Stop", "Finish"],
    answer: 1
  },
  {
    id: 30,
    category: "english",
    question: "Fill in the blank: They ___ going to the market.",
    options: ["is", "am", "are", "was"],
    answer: 2
  }
];

let title = document.querySelector("#category_top")

// Getting category information

const params = new URLSearchParams(window.location.search);
const category = params.get("category")

title.textContent = category;

// Questions Filter
const filteredQuestions = questions.filter(
    (q) => q.category === category
);



// javascript initalization
const answerElm = document.querySelectorAll(".answer");

const [
  questionElm,
  option_1,
  option_2,
  option_3,
  option_4
] = document.querySelectorAll(
  "#question, .option_1, .option_2, .option_3, .option_4"
);

const submitBtn = document.querySelector("#submit");

let score = 0;
let currentQuestion = 0;

// javascript Dom

const loadQuiz =() => {
    const {question, options} = filteredQuestions[currentQuestion]
    questionElm.textContent = question;
    options.forEach((curOption, index) => (window[`option_${index + 1}`].textContent = curOption))
}

loadQuiz();

// selecting option

const getSelectedOption = () => {
    let ans_index = undefined;

    answerElm.forEach((curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });

    return ans_index;
};
// deselecting option

const deselectedAnswer = () => {
    answerElm.forEach((curOption) => curOption.checked = false);
}

submitBtn.addEventListener("click", () => {

    const selectedOptionIndex = getSelectedOption();

    // No option selected
    if (selectedOptionIndex === undefined) {
        alert("Please select an answer");
        return;
    }

    // Check answer
    if (selectedOptionIndex === filteredQuestions[currentQuestion].answer) {
        score++;
    }

    // Move to next question
    currentQuestion++;

    if (currentQuestion < filteredQuestions.length) {
        deselectedAnswer();
        loadQuiz();
    } else {
        document.querySelector(".quiz-section").innerHTML = `
            <div id="question">
                Your Score: ${score}/${filteredQuestions.length}
            </div>
            <p>Congratulations on completing the quiz!</p>
            <button onclick="window.location.href='index.html'" id="submit">
                Go Home
            </button>
        `;
    }
});

