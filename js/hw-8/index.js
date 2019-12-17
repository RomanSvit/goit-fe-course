import array from "./gallery-items.js"
const listGalery = document.querySelector(".gallery");
const modal = document.querySelector(".lightbox");
const boxImage = modal.querySelector(".lightbox__image");
const buttonClose = modal.querySelector('.lightbox__button');
const addItemGalery = array.reduce((acc, elem) => {
  return acc += `<li class=${"gallery__item"}><a class=${"gallery__link"} href=${elem.original} onclick="return false"><img class=${"gallery__image"} src=${elem.preview} data-source=${elem.original} alt="${elem.description}"></a></li>`;
}, '');
listGalery.insertAdjacentHTML('afterbegin', addItemGalery);

const showImage = (event) => {
  const elemImg = event.target;
  let urlImg = elemImg.getAttribute("data-source");
  modal.classList.add("is-open");
  boxImage.setAttribute("src", urlImg);
}
listGalery.addEventListener('click', showImage);

const closeModal = (event) => {
  const elem = event.target;
  if (elem.classList.contains("lightbox__button") || elem.classList.contains("lightbox__content")) {
    modal.classList.remove('is-open');
    boxImage.removeAttribute("src");
  }
}
modal.addEventListener("click", closeModal);