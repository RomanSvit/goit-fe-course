import usersArr from './users.js'
export function task6() {
  // Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

  const getUsersWithAge = (users, min, max) => usersArr.filter(user => user.age > min && user.age < max)

  console.log(getUsersWithAge(usersArr, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

  console.log(getUsersWithAge(usersArr, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
}