import usersArr from './users.js'
export function task10() {
  // Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

  const getSortedUniqueSkills = usersArr => usersArr.reduce((acc, user) => {
    user.skills.forEach(elem => acc.includes(elem) ? false : acc.push(elem));
    return acc.sort()
  }, []);

  console.log(getSortedUniqueSkills(usersArr));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

}