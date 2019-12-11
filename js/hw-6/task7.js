import usersArr from './users.js'
export function task7() {
  // Получить общую сумму баланса (поле balance) всех пользователей.

  const calculateTotalBalance = usersArr => {
    return usersArr.reduce((acc, user) => acc += user.balance, 0)
  };

  console.log(calculateTotalBalance(usersArr)); // 20916
}