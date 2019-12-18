import arrayImages from "./gallery-items.js"
const listGalery = document.querySelector(".gallery");
const modal = document.querySelector(".lightbox");
const boxImage = modal.querySelector(".lightbox__image");
const buttonClose = modal.querySelector('.lightbox__button');

const addItemGalery = arrayImages.reduce((acc, elem) => {
  return acc += `<li class=${"gallery__item"}><a class=${"gallery__link"} href=${elem.original} onclick="return false"><img class=${"gallery__image"} src=${elem.preview} data-source=${elem.original} alt="${elem.description}"></a></li>`;
}, '');
listGalery.insertAdjacentHTML('afterbegin', addItemGalery);

const showImage = (event) => {
  const elemImg = event.target;
  let urlImg = elemImg.getAttribute("data-source");
  modal.classList.add("is-open");
  boxImage.setAttribute("src", urlImg);
  console.log(event);
}
listGalery.addEventListener('click', showImage);

const closeModal = (event) => {

  const elem = event ? event.target : null;
  if (!elem || elem.classList.contains("lightbox__button") || elem.classList.contains("lightbox__content")) {
    modal.classList.remove('is-open');
    boxImage.removeAttribute("src");
  } else {
    boxImage.setAttribute('src', findImageToShow(arrayImages, event.x > (window.innerWidth / 2)));
  }
}
modal.addEventListener("click", closeModal);

document.addEventListener('keydown', onKeyPressed);

let setCouner = 0;
function onKeyPressed(e) {

  console.log(e);
  if (e.code === 'Escape') {
    closeModal();
  }
  if (e.code === 'ArrowRight') {
    boxImage.setAttribute('src', findImageToShow(arrayImages, true));
  }
  if (e.code === 'ArrowLeft') {
    boxImage.setAttribute('src', findImageToShow(arrayImages, false));
  }
  if (e.code === "Enter") {
    e.preventDefault();
    e.target.querySelector('img').click(e);
  }

  if (e.code === "Space") {
    if (!boxImage.hasAttribute('src') || boxImage.getAttribute('src') == '') { return; }
    e.preventDefault();
    if (setCouner === 0) {
      clearInterval(setCouner);
      setCouner = 0;
      setCouner = setInterval(
        nextImageAvto
        , 1000);
    } else {
      clearInterval(setCouner);
      setCouner = 0;
    }
  } else {
    clearInterval(setCouner);
    setCouner = 0;
  }
}

function nextImageAvto() {
  boxImage.setAttribute('src', findImageToShow(arrayImages, true));
}
const findImageToShow = function (arr, next) {
  const serchImageAtribute = boxImage.getAttribute("src");
  let indx = 0;
  arr.find((element, index) => {
    indx = index;
    return element.original === serchImageAtribute;
  });
  indx = next ? indx + 1 : indx - 1;
  indx = indx < 0 ? arr.length - 1 : indx;
  indx = indx >= arr.length ? 0 : indx;
  return arr[indx].original;
}


