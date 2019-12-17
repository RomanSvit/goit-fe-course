export function task2() {
  const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  // const func = (arr) => {
  //   const list = document.querySelector('#ingredients');
  //   arr.forEach(element => {
  //     const elem = document.createElement('li');
  //     elem.innerText = element;
  //     list.appendChild(elem);
  //   });
  //   console.log(list);
  // }
  // func(ingredients);

  const list = document.querySelector('#ingredients');
  const func = (arr) => {
   const addList = arr.reduce((acc,element) => {
    return acc += `<li>${element}</li>`;
    },'');
    list.insertAdjacentHTML('afterbegin',addList);
  }
  func(ingredients);
  console.log(list);
}