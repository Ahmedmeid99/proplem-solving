const stringReverse = function (string) {
  const oldString = Array.from(string);
  let newString = [];
  for (let i = oldString.length - 1; i >= 0; i--) {
    newString.push(oldString[i]);
  }
  return newString.join("");
};
console.log(stringReverse("Ahmed")); // "demhA"
/////////////////////////////////////////////////
const repeatString = function (count, string) {
  const oldString = Array.from(string);
  const newString = [];
  for (let i = 0; i <= count; i++) {
    for (let i = 0; i <= oldString.length - 1; i++) {
      newString.push(oldString[i]);
    }
  }
  return newString.join("");
};
console.log(repeatString(3, "Ahmed")); // AhmedAhmedAhmed
/////////////////////////////////////////////////
const getLenthof = function (string) {
  const stringArray = Array.from(string);
  let index = 0;
  const numberofLetter = stringArray.map((letter) => {
    letter = 1;
    return (index += letter);
  });
  return Math.max(...numberofLetter);
};
console.log(getLenthof("Ahmed")); // 5
