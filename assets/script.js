var container = document.querySelector(".container");
var trueAnswer = document.querySelector("#true");
var falseAnswer = document.querySelector("#false");

trueAnswer.addEventListener("click", quizQuestions);

falseAnswer.addEventListener("click", quizQuestions);

container.addEventListener("click", function(event) {
    var element = event.target;
    
    let value = element.getAttribute("data-number");
    
    var state = element.getAttribute("data-state");
  
    if (state === "hidden") {
      element.textContent =  value;
      element.setAttribute("data-state", "hidden")
    }
  
    else {
      element.textContent = "";
      element.setAttribute("data-state", "revealed");
    }
    
  });

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
    }
    else {
        timer--;
        }
};

let questionNumber = 0;

function quizQuestions() {
  
console.log(questionNumber);
//    if (questionNumber >= 4) {
//     }
    var tofQuestions = document.querySelector("#tof");
    tofQuestions.innerText = questions[questionNumber].question;
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