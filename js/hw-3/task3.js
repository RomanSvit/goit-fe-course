'use strict';
function task3() {
  const findBestEmployee = (employees) => {
    let bestEmployee = 0;
    let bestWorkName;
    for (const key in employees) {
      if (employees[key] > bestEmployee) {
        bestEmployee = employees[key];
        bestWorkName = key;
      }
    } console.log(`${bestWorkName} ${bestEmployee}`);
  }
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  });
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  });
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  });
}
