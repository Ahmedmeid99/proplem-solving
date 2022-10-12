/*
--toUppercase()
--tolowercase()
*/

const letters = [
  { LowerCase: "a", UpperCase: "A" },
  { LowerCase: "b", UpperCase: "B" },
  { LowerCase: "c", UpperCase: "C" },
  { LowerCase: "d", UpperCase: "D" },
  { LowerCase: "e", UpperCase: "E" },
  { LowerCase: "f", UpperCase: "F" },
  { LowerCase: "g", UpperCase: "G" },
  { LowerCase: "h", UpperCase: "H" },
  { LowerCase: "i", UpperCase: "I" },
  { LowerCase: "j", UpperCase: "J" },
  { LowerCase: "k", UpperCase: "K" },
  { LowerCase: "l", UpperCase: "L" },
  { LowerCase: "m", UpperCase: "M" },
  { LowerCase: "n", UpperCase: "N" },
  { LowerCase: "o", UpperCase: "O" },
  { LowerCase: "p", UpperCase: "P" },
  { LowerCase: "q", UpperCase: "Q" },
  { LowerCase: "r", UpperCase: "R" },
  { LowerCase: "s", UpperCase: "S" },
  { LowerCase: "t", UpperCase: "T" },
  { LowerCase: "u", UpperCase: "U" },
  { LowerCase: "v", UpperCase: "V" },
  { LowerCase: "w", UpperCase: "W" },
  { LowerCase: "x", UpperCase: "X" },
  { LowerCase: "y", UpperCase: "Y" },
  { LowerCase: "z", UpperCase: "Z" },
];

const newtoLowerCase = function (string) {
  let newString = "";
  const stringArray = Array.from(string);
  stringArray.map((stringletter) => {
    letters.map((letter) => {
      if (
        stringletter === letter.LowerCase ||
        stringletter === letter.UpperCase
      ) {
        newString += letter.LowerCase;
      }
    });
  });
  return newString;
};

console.log(newtoLowerCase("AHMED")); // "ahmed"
console.log(newtoLowerCase("ahmed")); // "ahmed"

///////////////////////////////////////////////////
const newtoUpperCase = function (string) {
  let newString = "";
  const stringArray = Array.from(string);
  stringArray.map((stringletter) => {
    letters.map((letter) => {
      if (
        stringletter === letter.LowerCase ||
        stringletter === letter.UpperCase
      ) {
        newString += letter.UpperCase;
      }
    });
  });
  return newString;
};
console.log(newtoUpperCase("AHMED")); // "AHMED"
console.log(newtoUpperCase("ahmed")); // "AHMED"
