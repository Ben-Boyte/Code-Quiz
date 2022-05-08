function start() {
    var startButton = document.querySelector("#start");
    
    startButton.addEventListener("click", () => {
        timerSeconds = setInterval(countDown, 1000);
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

start();