import usersArr from './users.js'
export function task5() {
  // Получить пользоваля (не массив) по email (поле email, он уникальный).

  const getUserWithEmail = (users, email) => usersArr.find(user=> user.email===email)
  
  console.log(getUserWithEmail(usersArr, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(usersArr, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
}