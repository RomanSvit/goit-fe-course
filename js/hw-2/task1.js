'user strict';
function task1() {
  const logItems = function (array) {
    for (let arrayItem of array) {
      let indexAr = array.indexOf(arrayItem) + 1;
      console.log(`${indexAr} - ${arrayItem}`);
    }
  }
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
}