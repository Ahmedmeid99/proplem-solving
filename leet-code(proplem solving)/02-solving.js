/**********************(04)*************************/
var runningSum = (enteredArray) => {
  let resultArray = [];
  let solve = 0;
  for (let i = 0; i < enteredArray.length; i++) {
    solve = solve + enteredArray[i];
    resultArray.push(solve);
  }
  return resultArray;
};
console.log(runningSum([1, 2, 3, 4])); //[1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])); //[1,2,3,4,5]

/**********************(05)*************************/
const logestCommonPrefix = ([array1, array2, array3]) => {
  let result = "";
  array1.split("").map((a) => {
    array2.split("").map((b) => {
      array3.split("").map((c) => {
        if (a === b && a === c) {
          result += a;
        }
      });
    });
  });
  return result;
};
console.log(logestCommonPrefix(["ac", "a", "xa"])); //a
console.log(logestCommonPrefix(["ac", "ac", "xac"])); // ac
/**********************(06)*************************/
// not solve
const isValid = (chars) => {
  const newArray = chars.split("");
  let resultArray = [];
  for (let i = 0; i <= (newArray.length - 1) / 2; i++) {
    if (i === 0) {
      g = 0;
    } else if (i === (newArray.length - 1) / 2) {
      g = i;
    } else {
      g = i + 1;
    }

    if (
      `${newArray[g]}${newArray[g + 1]}` === "()" ||
      `${newArray[g]}${newArray[g + 1]}` === "{}" ||
      `${newArray[g]}${newArray[g + 1]}` === "[]"
    ) {
      resultArray.push(true);
    } else {
      resultArray.push(false);
    }
    debugger;
  }

  const result = resultArray.filter((boolenR) => {
    boolenR === false;
  });
  //   return result ? !result : result;
  return resultArray;
};
console.log(isValid("()")); //true
console.log(isValid("{}{}()")); //true
console.log(isValid(")(")); // false
console.log(isValid("(){}[]")); // true
