function start() {
    var startButton = document.querySelector("#start");
    startButton.addEventListener("click", () => {
        timerSeconds = setInterval(countDown, 1000);
        quizQuestions(0);
    })
}


let timer = 45;
function countDown() {
    document.getElementById("time").innerHTML = timer;
    if (timer <= 0) {
        clearInterval(timerInterval);
        saveYourScore();
    }
    else {
        timer--;
        }
};

function quizQuestions() {
    let questionNumber = 0;

    if (questionNumber >= 3) {
        saveYourScore();
    }
    var tofQuestions = document.querySelector("#tof");
    tofQuestions.innerText = questions[questionNumber].question;

    var answerButtons = document.querySelectorAll(".button");

    
    for (i = 0; i < questions[questionNumber].answers.length; i++) {
        const answerOption = questions[questionNumber].answers[i];
        answerButtons[i].innerText = answerOption.answer;
        answerButtons[i].setAttribute("data-is-correct", answerOption.isCorrect);
        
    }
    questionNumber += 1;
     
    
}

var questions = [
    { question: "JS stands for Java Script", 
        answers: [
            { answer: "False",
                isCorrect: false
            },
        
            { answer: "True",
                 isCorrect: true
            },],},
    
    { question: "HTML is what styles the webpage",
        answers: [
            { answer: "False",
               isCorrect: true
            },

            { answer: "True",
                isCorrect: false
            },],},
    
    { question: "Coding is easy and you'll never run into any problems",
        answers: [
            { answer: "False",
                isCorrect: true
            },

            { answer: "True",
                isCorrect: false
            }, ], },

    { question: "You dont have to put in any work to learn coding",
        answers: [
            {  answer: "False",
                isCorrect: true
            },

            { answer: "True",
                isCorrect: false
            }, ],
        }
];

start();