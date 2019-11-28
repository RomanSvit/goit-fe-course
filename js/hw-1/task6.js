'use script';

function task6() {
  // let total = 0;
  // let input = null;
  // do {
  //   input = prompt('Введите число');
  //   let numberInput = Number(input);
  //   if (isNaN(numberInput)) {
  //     alert('Введите число')
  //   } else {
  //     total += numberInput;
  //   }
  // } while (input !== null);
  // console.log(total);
  let total = 0;
  let inputNumber;
  do {
    inputNumber = prompt('enter number');
    if (inputNumber === null) {
      break;
    }
    if (!isNaN(inputNumber)) {
      inputNumber = Number(inputNumber);
      total += inputNumber;
    } else {
      alert('please enter number!!!!');
    }
  } while (true)
  console.log(total);
}