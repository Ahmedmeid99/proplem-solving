// get range of (1,10)
const rangeOf = function (start, end, disciption) {
  let arrayofNumbers = [];
  if (disciption === "start") {
    for (let i = start; i <= end - 1; i++) {
      arrayofNumbers.push(i);
    }
  } else if (disciption === "end") {
    for (let i = start + 1; i <= end; i++) {
      arrayofNumbers.push(i);
    }
  } else {
    for (let i = start; i <= end; i++) {
      arrayofNumbers.push(i);
    }
  }

  return arrayofNumbers;
};

console.log(rangeOf(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rangeOf(1, 10, "start")); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(rangeOf(1, 10, "end")); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
