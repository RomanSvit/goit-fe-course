"use strict"

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const btStart = document.querySelector('button[data-action="start"]');

const btStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const numberOfcolors = colors.length - 1;
let random = randomIntegerFromInterval(0, numberOfcolors);
body.style.backgroundColor = colors[random];
let timerChangesColor = null;

const startChangeColorfunction = (event) => {
  const targetStart = event.target;
  if (targetStart) {
    timerChangesColor = setInterval(() => {
      random = randomIntegerFromInterval(0, numberOfcolors);
      body.style.backgroundColor = colors[random];
      btStart.setAttribute('disabled', 'disabled');
    }, 1000);
  }
};
btStart.addEventListener('click', startChangeColorfunction);

const stopChangesColor = (event) => {
  const targetStop = event.target;
  if (targetStop) {
    clearInterval(timerChangesColor);
    btStart.removeAttribute("disabled");
  }
}
btStop.addEventListener('click', stopChangesColor);