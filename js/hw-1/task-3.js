'use strict';
const value = prompt('Please enter a password!')
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
if (value === null) {
  message = 'Отменено пользователем!';
} else if (value === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
console.log(message);