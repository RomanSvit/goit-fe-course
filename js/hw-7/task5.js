export function task5() {
  // Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

  const span = document.querySelector("#name-output");
  const input = document.querySelector("#name-input");
  const checkOut = function () {
    span.textContent = input.value === "" ? "незнакомец" : input.value
  };
  input.addEventListener("input", checkOut);
}