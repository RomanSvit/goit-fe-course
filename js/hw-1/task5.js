'use strict';
function task5(){
let deliveryIn = prompt('Укажите страну! (Китай, Чили, Австралия, Индия, Ямайка)');
let country = deliveryIn.toLowerCase();
let message;
switch (country) {
  case 'китай':
    alert('Доставка в Китай будет стоить 100 кредитов.');
    break;
  case 'чили':
    alert('Доставка в Чили будет стоить 250 кредитов.');
    break;
  case 'австралия':
    alert('Доставка в Австралия будет стоить 170 кредитов.');
    break;
  case 'индия':
    alert('Доставка в Индия будет стоить 80 кредитов.');
    break;
  case 'ямайка':
    alert('Доставка в Ямайка будет стоить 120 кредитов.');
    break;
  default:
    alert('В вашей стране доставка не доступна,пожалуйста укажите страну из списка! (Китай, Чили, Австралия, Индия, Ямайка)')
}
console.log(message);
}