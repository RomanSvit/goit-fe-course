'use strict';
function task4(){
const credits = 23580;
const pricePerDroid = 3000;
const order = prompt('Введите количество дроидов.');
let totalPrice = order * pricePerDroid;
let oddMoney = credits - totalPrice;
let message;
if (order === null) {
  message = 'Отменено пользователем!';
} else if (credits < totalPrice) {
  message = 'Недостаточно средств на счету!';
}else if(order === ''){
  message = 'Вы не ввели количество товара!';
} else if (credits >= totalPrice) {
  message = `Вы купили ${order} дроидов, на счету осталось ${oddMoney} кредитов.`;
} else if (order > 0) {
  message = totalPrice;
} 
console.log(message);
}