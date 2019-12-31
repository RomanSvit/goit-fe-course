import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import hate from './template/hate.hbs';
import getCountry from './fetchCountries.js';
const _ = require('lodash');
const wraper = document.querySelector('.wraper');
const url = 'https://restcountries.eu/rest/v2/name/';
const input = document.querySelector('#inputID');
const ulList = document.querySelector('.listCountry');

input.addEventListener('input', _.debounce(serchCountry, 1000));

function serchCountry() {
  const value = input.value;
  if (value === '') {
    clearOutput()
    return;
  }
  getCountry(url, value, onDataReady);
}

function onDataReady(data) {
  clearOutput();
  switch (true) {
    case data.length === 1:
      renderOneCountry(data[0]);
      break;
    case data.length < 10:
      renderListCountry(data);
      break;
    default:
      PNotify.alert('Notice me, error!!!');
  }
}
function renderOneCountry(country) {
  const context = hate(country);
  wraper.insertAdjacentHTML('beforeend', context);
}

function renderListCountry(list) {
  const contextt = list.reduce((acc, item, indx) =>
    acc += `<li>${indx}: ${item.name}</li>`, '');
  ulList.insertAdjacentHTML('beforeend', contextt);
}


function clearOutput() {
  ulList.innerHTML = '';
  wraper.innerHTML = '';
}



