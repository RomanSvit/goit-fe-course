'user strict';
import { task1 } from './task1.js'
import { task2 } from './task2.js'
import { task3 } from './task3.js'
import { task4 } from './task4.js'
import { task5 } from './task5.js'
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
  case '4':
    task4();
    break;
  case '5':
    task5();
    break;
}