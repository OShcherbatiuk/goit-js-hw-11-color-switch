const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnRef = document.querySelector('[data-action ="start"]');
const stopBtnRef = document.querySelector('[data-action ="stop"]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', onStartClick);
stopBtnRef.addEventListener('click', onStopClick);

let interval = null;

function onStartClick({target}) {
  target.disabled = true;
  interval = setInterval(randomColor, 1000)
};

function randomColor() {
  const bgColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  bodyRef.style.backgroundColor = bgColor;
}

function onStopClick() {
  startBtnRef.disabled = false;
  clearInterval(interval)
};