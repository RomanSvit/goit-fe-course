'use strict';
function task3(){
  const findLongestWord = function (string) {
    let newArray = string.split(' ');
    let word = newArray[0];
    for (const item of newArray) {
      if (item.length > word.length) {
        word = item;
      }
    }
    return word;
  }
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  console.log(findLongestWord('Google do a roll'));
  console.log(findLongestWord('May the force be with you'));
}