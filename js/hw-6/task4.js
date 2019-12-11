import usersArr from './users.js'
export function task4() {
  // Получить массив только неактивных пользователей (поле isActive).

  const getInactiveUsers = users => usersArr.filter(user => user.isActive === false)

  console.log(getInactiveUsers(usersArr)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
}