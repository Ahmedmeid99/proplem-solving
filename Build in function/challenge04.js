///////////////////////////////////////
// join('') => to string
const toString = function(array) {
  let string = "";
  array.forEach((item) => (string += item));
  return string;
};
const myArray = ["a", "h", "m", "e", "d"];
console.log(toString(myArray)); // Ahmed

///////////////////////////////////////
// split('') , array.from() => to Array
const toArray = function (string) {
  let newArray = [];
  for (let i = 0; i <= string.length - 1; i++) {
    newArray.push(string[i]);
  }
  return newArray;
};
console.log(toArray("Ahmed")); // ['A', 'h', 'm', 'e', 'd']
///////////////////////////////////////
// map()
class MyArray {
  constructor(array) {
    this.array = array;
  }
  testArray(array) {
    if (typeof array === "object" && array[0]) {
      return array;
    } else {
      console.log(`${array} => Not An Array`);
    }
  }
  findItem(array, item) {
    this.testArray(array);
    for (let i = 0; i <= array.length - 1; i++) {
      if (array[i] === item) {
        return item;
      }
    }
  }
  toString(array) {
    this.testArray(array);
    let string = "";
    array.forEach((item) => (string += item));
    return string;
  }
}
const array = new MyArray();

const numbers = [1, 2, 3, 4, 5];
const users = { name: "a", name: "e", name: "c" };

console.log(array.testArray(numbers)); // [1, 2, 3, 4, 5];
// console.log(array01.testArray(users)); //  [object Object] => Not An Array

console.log(array.findItem(numbers, 3)); // 3
console.log(array.findItem(numbers, 7)); // undefind

console.log(array.toString(numbers)); // '12345'
console.log(array.toString(["a", "h", "m", "e", "d"])); // 'ahmed'
console.log(array.toString(users)); // 'ahmed'
