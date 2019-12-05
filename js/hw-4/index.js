'use strict'
import { task1 } from './task1.js'
task1();
import { task2 } from './task2.js'
task2();
let homeWork = prompt('Введите номер задания');
switch (homeWork) {
  case '1':
    task1();
    break;
  case '2':
    task2();
    break;
}