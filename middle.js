const middle = (arr) => {
  if (arr.length <= 2) return [];

  let newArr = [];
  if (arr.length % 2 === 0) {
    let half = arr.length / 2;
    newArr.push(arr[half - 1]);
    newArr.push(arr[half]);
  } else {
    // Add one to make length even. Divide by two, minus one to get the
    // true middle
    let middle = ((arr.length + 1) / 2) - 1;
    newArr.push(arr[middle]);
  }
  return newArr;
};

module.exports = middle;
