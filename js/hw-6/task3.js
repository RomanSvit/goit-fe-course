import usersArr from './users.js'
export function task3() {
  // Получить массив имен пользователей по полу (поле gender).

  const getUsersWithGender = (users, gender) => usersArr.filter(user => user.gender === gender).map(user => user.name);

  console.log(getUsersWithGender(usersArr, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
}