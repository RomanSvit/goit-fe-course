export function task4() {
  let counterValue = { value: 0 };
  const buttonIncrement = document.querySelector('button[data-action="increment"]');
  const buttonDecrement = document.querySelector('button[data-action="decrement"]');
  const value = document.querySelector('#value');
  const increment = function () {
    counterValue.value++;
    value.textContent = counterValue.value;
  }
  const decrement = function (a, b) {
    counterValue.value--;
    value.textContent = counterValue.value;
  }
  buttonIncrement.addEventListener("click", increment);
  buttonDecrement.addEventListener("click", decrement);
}