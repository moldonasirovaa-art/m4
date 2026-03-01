let start = document.getElementById("start")
let result = document.getElementById("result");
let main = document.getElementById("main");

let current = 0
let count = 0
let questions = [
    {
     question: "2+2",  
     correct: 4,
     answers: [4, 5, 10, 12, 33],
    },
    {
        question: "4+4",
        correct: 8,
        answers: [1, 5, 8, 12, 33],
    },
    {
        question: "Как обратиться к классу?",
        correct: ".",
        answers: [",", "!", "#", "."],
    },
    {
        question: "Какая команда используется для вывода текста в Python?",
        correct: "print",
        answers: ["if", "print", "else"],     
    },
    {
        question: "Какая функция используется для получения длины списка в Python?",
        correct: "len",
        answers: ["size", "length", "len"],
    },
    {
        question: "Какой метод используется для добавления элемента в список в Python?",
        correct: "insert",
        answers: ["add", "push", "insert"],
    }
];

function startProgram(){
    start.classList.add("close");
    main.classList.remove("close");
    result.classList.add("close");
    generate()
}

start.addEventListener("click", startProgram)

function generate(){
    let question = questions[current].question;
    main.innerHTML = `<h2 class="title">${question}</h2> `;

    let answers = questions[current].answers;
    let block = "";
    for (let i of answers) {
        block += `<button class="btn" onclick="check('${i}')">${i}</button>`;
    }

    main.innerHTML += `<nav>${block}</nav>`;
}

function check(answer) {
    correct = questions[current].correct;
    if (correct == answer) {
        count += 1;
    }
    current += 1;
    if (questions.length > current) {
        generate()
    } else {
        stop()
    }
}
 
function stop() {
    start.classList.remove("close");
    main.classList.add("close");
    result.classList.remove("close");

    result.innerHTML = `Решено ${count} из ${questions.length}`;
    current = 0;
    count = 0;
}