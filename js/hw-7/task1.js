export function task1() {
  const list = Array.from(document.querySelector('#categories').children);
  console.log(`В списке ${list.length} категории!`);

  list.forEach(elem => {
    const title = elem.querySelector('h2').innerText;
    console.log(title);
    const childLength = elem.querySelector('ul');

    console.log(`Категория ${title} : количество елементов - ${childLength.children.length}.`);
  });
}