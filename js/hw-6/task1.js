import usersArr from './users.js'
export function task1() {
  const getUserNames = usersArr => usersArr.map(user => user.name);
  console.log(getUserNames(usersArr));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
}
