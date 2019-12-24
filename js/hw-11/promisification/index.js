'user strict';
import { task1 } from './task1.js'
import { task2 } from './task2.js'
import { task3 } from './task3.js'
let homeWork = prompt('Введите номер задания');
switch (homeWork) {
  case '1':
    task1();
    break;
  case '2':
    task2();
    break;
  case '3':
    task3();
    break;
}