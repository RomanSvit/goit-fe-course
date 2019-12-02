'user strict';
function task4() {
  const countTotalSalary = (employees) => {
    let totalSalary = 0;
    for (const key in employees) {
      totalSalary += employees[key];
    } console.log(totalSalary);
  }
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  });
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  });
}