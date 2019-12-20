import menu from './menu.json';
import postFeedItems from './templates/post-feed-items.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  jsMenu: document.querySelector('.js-menu'),
  input: document.querySelector('.switch__input'),
  body: document.querySelector('body')
}
refs.body.classList.add("light-theme");
const themeDefault = localStorage.getItem('Theme');

if (themeDefault === 'DARK') {
  refs.input.checked = true;
  refs.body.classList.replace("light-theme", "dark-theme");
} else {
  refs.input.checked = false;
}

const themesChanges = () => {
  if (refs.input.checked) {
    refs.body.classList.replace("light-theme", "dark-theme");
    localStorage.setItem('Theme', 'DARK');
  } else {
    refs.body.classList.replace("dark-theme", "light-theme")
    localStorage.setItem('Theme', 'LIGHT');
  }
}

refs.input.addEventListener('change', themesChanges);

function buildMenuItem(menu) {
  const markup = menu.map(item => postFeedItems(item)).join(' ');
  refs.jsMenu.insertAdjacentHTML('beforeend', markup);
}
buildMenuItem(menu);