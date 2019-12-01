'user strict';
function task4() {
  const formatString = (string) => {
    let lengthString = string.length;
    let sliceString = string.slice(0, 39);
    const toBeContinued = '...';
    let shortString;
    for (let i = 0; i < string.length; i += 1) {
      if (lengthString < 40) {
        shortString = string;
      } else {
        shortString = `${sliceString}${toBeContinued}`;
      }
    }
    return shortString;
  }
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  console.log(formatString('Curabitur ligula sapien.'));
  console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
}