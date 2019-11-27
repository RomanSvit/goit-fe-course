'use strict';

const total = 100;
const ordered = 150;
let isEnough = ordered <= total;
let result;
if(isEnough){
  result = 'Заказ оформлен, с вами свяжется менеджер';
}else{
  result = 'На складе недостаточно твоаров!'
}
console.log(result);