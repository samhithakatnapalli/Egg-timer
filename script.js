function startTimer() {
  let timeLeft = 10;
  const timerDisplay = document.getElementById("timer");
  const imageDisplay = document.getElementById("eggImage");
  const startBtn = document.getElementById("startBtn");

  imageDisplay.src = "first step.png";
  timerDisplay.textContent = `Time: ${timeLeft}s`;
  startBtn.disabled = true;

  setTimeout(() => {
    imageDisplay.src = "fried-egg-pan.gif";
  }, 1000);

  const timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Done! 🍳";
      imageDisplay.src = "final step.png";
      startBtn.disabled = false;
    }
  }, 1000);
}
