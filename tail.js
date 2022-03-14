const tail = (arr) => {
  return arr.length === 0 ?  undefined : arr.slice(1);
};

module.exports = tail;