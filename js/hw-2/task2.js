'user strict';
function task2() {
  const calculateEngravingPrice = function (message, pricePerWord) {
    let newArray = message.split(' ');
    let coutingCost = newArray.length * pricePerWord;
    return coutingCost;
  }
  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));
}