const questions = [
    {
        question: "Which is largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the largest continent in the world?",
        answer: [
            { text: "Austrilia", correct: false },
            { text: "Africa", correct: false },
            { text: "Arctic", correct: false },
            { text: "Asia", correct: true },
        ] 
    },
    {
         question: "Which is the smallest continent in the world?",
        answer: [
            { text: "Africa", correct: false },
            { text: "Arctic", correct: false },
            { text: "Austrilia", correct: true },
            { text: "Asia", correct: false },
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "Which river is known as the 'Ganga' in India?",
        answer: [
            { text: "Yamuna", correct: false },
            { text: "Brahmaputra", correct: false },
            { text: "Indus", correct: false },
            { text: "Ganges", correct: true },
        ]
    },
    {
        question: "What is the capital city of India?",
        answer: [
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Chennai", correct: false },
        ]
    },
    {
        question: "Which mountain range separates India from China in the north?",
        answer: [
            { text: "Vindhya Range", correct: false },
            { text: "Himalayas", correct: true },
            { text: "Western Ghats", correct: false },
            { text: "Aravalli Range", correct: false },
        ]
    },
    {
        question: "Which state is known as the 'Land of Five Rivers' in India?",
        answer: [
            { text: "Rajasthan", correct: false },
            { text: "Punjab", correct: true },
            { text: "Gujarat", correct: false },
            { text: "Maharashtra", correct: false },
        ]
    },
    {
        question: "Which is the largest state in India by area?",
        answer: [
            { text: "Maharashtra", correct: false },
            { text: "Rajasthan", correct: true },
            { text: "Uttar Pradesh", correct: false },
            { text: "Madhya Pradesh", correct: false },
        ]
    },
    {
        question: "What is the southernmost tip of India called?",
        answer: [
            { text: "Kanyakumari", correct: true },
            { text: "Cape Comorin", correct: false },
            { text: "Goa", correct: false },
            { text: "Rameswaram", correct: false },
        ]
    },
    {
        question: "Which desert is located in the northwestern part of India?",
        answer: [
            { text: "Thar Desert", correct: true },
            { text: "Kutch Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Sahara Desert", correct: false },
        ]
    },
    {
        question: "In which state is the 'Valley of Flowers' national park located?",
        answer: [
            { text: "Himachal Pradesh", correct: false },
            { text: "Uttarakhand", correct: true },
            { text: "Jammu and Kashmir", correct: false },
            { text: "Arunachal Pradesh", correct: false },
        ]
    },
    {
        question: "Which river is known as the 'Lifeline of Kerala'?",
        answer: [
            { text: "Yamuna", correct: false },
            { text: "Krishna", correct: false },
            { text: "Godavari", correct: false },
            { text: "Periyar", correct: true },
        ]
    },
    {
        question: "What is the highest mountain peak in India?",
        answer: [
            { text: "Kangchenjunga", correct: true },
            { text: "Nanda Devi", correct: false },
            { text: "Mount Everest", correct: false },
            { text: "Anamudi", correct: false },
        ]
    }
];
const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answer-btns');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);

        button.addEventListener('click', () => selectAnswer(answer.correct));
    });
}

function resetState() {
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
    nextBtn.style.display = 'none';
}

function selectAnswer(isCorrect) {
    const selectedBtn = event.target;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        // Optionally, provide feedback for incorrect answers here.
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
