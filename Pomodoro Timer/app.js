const wrapper = document.querySelector('.wrapper');
const ring = document.querySelector('.ring');
const timer = document.querySelector('.timer');
const time = document.querySelector('.time');
const minutesInput = document.querySelector('.minutes input');
const secondsInput = document.querySelector('.seconds input');
const startButton = document.querySelector('.start');
const settingsButton = document.querySelector('.settings');

let minutes = parseInt(minutesInput.value, 10);
let seconds = parseInt(secondsInput.value, 10);
let timerInterval = null;
let isRunning = false;

const updateTime = () => {
  seconds--;
  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }
  if (minutes < 0) {
    ring.style.stroke = 'red';
    alert('Time is up!');
    clearInterval(timerInterval);
    isRunning = false;
    startButton.innerHTML = 'Start';
    return;
  }
  minutesInput.value = minutes.toString().padStart(2, '0');
  secondsInput.value = seconds.toString().padStart(2, '0');
}

const startTimer = () => {
  timerInterval = setInterval(updateTime, 1000);
  isRunning = true;
  startButton.innerHTML = 'Stop';
};

const stopTimer = () => {
  clearInterval(timerInterval);
  isRunning = false;
  startButton.innerHTML = 'Start';
}

startButton.addEventListener('click', () => {
  if (isRunning) {
    stopTimer();
  } else {
    startTimer();
  }
});

settingsButton.addEventListener('click', () => {
  minutes = parseInt(window.prompt('Enter the number of minutes:'), 10);
  seconds = parseInt(window.prompt('Enter the number of seconds:'), 10);
  minutesInput.value = minutes.toString().padStart(2, '0');
  secondsInput.value = seconds.toString().padStart(2, '0');
});
