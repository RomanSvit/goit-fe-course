import usersArr from './users.js'
export function task2() {
  // Получить массив объектов пользователей по цвету глаз (поле eyeColor).
  const getUsersWithEyeColor = (users, color) => usersArr.filter(user => user.eyeColor === color);
  console.log(getUsersWithEyeColor(usersArr, 'blue'));
  // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
}