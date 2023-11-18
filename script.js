//
//
//
//
//
//
//


let activeTimers = document.querySelector(".activeTimers");

function setTimer() {
  let hours = parseInt(document.querySelector(".hours").value);
  let minutes = parseInt(document.querySelector(".minutes").value);
  let seconds = parseInt(document.querySelector(".seconds").value);

  let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalTimeInSeconds > 0) {
    createTimer(totalTimeInSeconds);
    // making input field to 0
    document.querySelector(".hours").value = '0';
    document.querySelector(".minutes").value = '0';
    document.querySelector(".seconds").value = '0';
  } else {
    alert("Please enter a valid time.");
  }
}

function createTimer(totalTimeInSeconds) {
  let timerElement = document.createElement("div");
  timerElement.className = "active";
  activeTimers.appendChild(timerElement);

  let timeLeftTitle = document.createElement("p");
  timeLeftTitle.textContent = "Time Left:";
  timerElement.appendChild(timeLeftTitle);

  let timeLeft = document.createElement("p");
  timeLeft.className = "timeLeft";
  timerElement.appendChild(timeLeft);

  let deleteButton = document.createElement("p");
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    clearInterval(timerInterval);
    activeTimers.removeChild(timerElement);
  };
  timerElement.appendChild(deleteButton);

  let timeRemaining = totalTimeInSeconds;

  function updateTimerDisplay() {
    let hours = Math.floor(timeRemaining / 3600);
    let minutes = Math.floor((timeRemaining % 3600) / 60);
    let seconds = timeRemaining % 60;

    timeLeft.textContent = `${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      timeLeft.textContent = "Time Up!";
      playTone();

    }

    timeRemaining--;
  }

  updateTimerDisplay(); // Displaying initial time

  let timerInterval = setInterval(updateTimerDisplay, 1000);
}

// Playing the alert tone
function playTone() {
  let tone = document.getElementById('tone');
  tone.play();
}