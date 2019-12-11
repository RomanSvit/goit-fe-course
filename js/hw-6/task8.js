import usersArr from './users.js'
export function task8() {
  // Массив имен всех пользователей у которых есть друг с указанным именем.

  const getUsersWithFriend = (usersArr, friendName) => {
    const result = usersArr.filter(user => user.friends.includes(friendName)).map(user=>user.name);
    return result;
  };

  console.log(getUsersWithFriend(usersArr, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(usersArr, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
}