import usersArr from './users.js'
export function task9() {
  // Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

  const getNamesSortedByFriendsCount = usersArr => {
    // твой код
    return usersArr.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)
    // usersArr.filter(user=>user.friends===user.name)
  };

  console.log(getNamesSortedByFriendsCount(usersArr));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
}