export function task7() {
  // Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
  const input = document.querySelector("#font-size-control");
  const span = document.querySelector("#text");
  const sizeControll = (event) => {
    span.style.fontSize = event.target.value +"px";
  }
  input.addEventListener("input", sizeControll);
}