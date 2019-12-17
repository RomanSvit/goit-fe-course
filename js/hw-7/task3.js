export function task3() {
  const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  const list = document.querySelector('#gallery');
  list.style.listStyle = "none";
  list.style.display = "flex";
  list.style.justifyContent = "space-between";

  console.log(list);
  const func = (arr) => {
    const addElem = arr.reduce((acc, element) => {
      return acc += `<li><img src=${element.url} alt="${element.alt}" style="width:500px; height:400px"></li>`;
    }, '');
    list.insertAdjacentHTML('afterbegin', addElem);
  }
  func(images);
}