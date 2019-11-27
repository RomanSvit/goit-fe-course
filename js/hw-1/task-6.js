'use script';
let total = 0;
let input = null;
do {
  input = prompt('Введите число');
  let numberInput = Number(input);
  if (isNaN(numberInput)) {
    alert('Введите число')
  } else {
    total += numberInput;
  }
} while (input !== null);
console.log(total);