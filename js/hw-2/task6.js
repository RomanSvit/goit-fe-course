'user strict';
function task6() {
  let input = prompt('Введите число!');
  const numbers = [];
  let total = 0;
  while (input !== null) {
    input = parseInt(input);
    if (isNaN(input)) {
      alert('Введите число!');
    } else {
      numbers.push(input);
    }
    input = prompt('Введите число!');
  }
  for (let item of numbers) {
    total += item;
  }
  alert(total);
}
