let intervalId;

function startTimer() {
  let timeLeft = 10;
  const timerDisplay = document.getElementById("timerDisplay");
  const imageDisplay = document.getElementById("eggImage");
  const startBtn = document.getElementById("startBtn");
  imageDisplay.src = "first step.png";
  timerDisplay.textContent = `Time: ${timeLeft}s`;
  startBtn.disabled = true;

  startBtn.style.display="none";

  clearInterval(intervalId);
    intervalId = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            timerDisplay.textContent = timeLeft + "s";
        }
        else {
            clearInterval(intervalId);
            timerDisplay.textContent = "Done!";
            image.src = "final step.png";
            startBtn.disabled= false;
        }
    }, 1000);
}
