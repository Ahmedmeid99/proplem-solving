///////////////////////////////////////////
/*             [1]              */
/*
Write a program that finds the summation of every number from 1 to num.
 The number will always be a positive integer greater than 0.
 ex :.
 summation(2) -> 3
 1 + 2
*/
var summation = function (num) {
  // Code here
  let zero = 0;
  for (let i = 0; i <= num; i++) {
    zero += i;
  }
  return zero;
};
summation(8); //36
console.log(summation(8));
///////////////////////////////////////////
/*             [2]              */
/* [42, 54, 65, 87, 0] -> min = 0, max = 87 */
let list = [42, 5, 65, 87, 0];
const min = function (list) {
  // using bubble sort
  for (let i = 0; i <= list.length - 1; i++) {
    for (let i = 0; i <= list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        const temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
      }
    }
  }
  return list[0];
};

const max = function (list) {
  for (let i = 0; i <= list.length - 1; i++) {
    for (let i = 0; i <= list.length - 1; i++) {
      if (list[i] < list[i + 1]) {
        const temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
      }
    }
  }
  return list[0];
};
console.log(min(list));
console.log(list);
console.log(max(list));
console.log(list);
///////////////////////////////////////////
/*             [3]              */
/*
Sam Harris => S.H
*/
function abbrevName(name) {
  let newString = "";
  const names = name.split(" ");
  newString = names[0][0].toUpperCase() + "." + names[1][0].toUpperCase();
  return newString;
}
console.log(abbrevName("ahmed eid")); // A.E
///////////////////////////////////////////
/*             [4]              */
/*
Given a non-negative integer, 3 for example,
 return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/
var countSheep = function (num) {
  let newString = "";
  for (let i = 1; i <= num; i++) {
    newString += `${i} sheep...`;
  }
  return newString;
};
console.log(countSheep(3));

///////////////////////////////////////////
/*             [5]              */
/*
123 --> "123"
*/
function numberToString(num) {
  // Return a string of the number here!
  let newString = "";
  return (newString += num);
}
console.log(numberToString(123)); // "123"

///////////////////////////////////////////
/*             [6]              */
/*
Create a function with two arguments
that will return an array of the first (n) multiples of (x).
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]   =>(1*1,1*2,1*3,...)
countBy(2,5) === [2,4,6,8,10]    =>(2*1,2*2,2*3,...)
*/
const getResult = function (num1, num2) {
  let newArray = [];
  for (let i = 1; i <= num2; i++) {
    newArray.push(i * num1);
  }
  return newArray;
};
console.log(getResult(2, 5)); // [2,4,6,8,10]

///////////////////////////////////////////
/* repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */
/*             [7]              */
function repeatStr(n, s) {
  let newString = "";
  for (let i = 1; i <= n; i++) {
    newString += s;
  }
  return newString;
}
console.log(repeatStr(5, "-_")); // -_-_-_-_-_

///////////////////////////////////////////
/*             [8]              */
/* if number is an even return (number * 8) else return (number * 9)*/
/* اذا كان العدد زوجي ارجع 8*العدد*/
/* اذا كان العدد فردي ارجع 9*العدد*/
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
console.log(simpleMultiplication(2)); // 16

///////////////////////////////////////////
/*             [9]              */
/*
Your task is to create the functionisDivideBy (or is_divide_by) 
to check if an integer number is divisible by both integers a and b.
*/
function isDivideBy(number, a, b) {
  // good luck
  if (number % a == 0 && number % b == 0) {
    return true;
  } else {
    return false;
  }
}
///////////////////////////////////////////
/*             [10]              */
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}
console.log(doubleInteger(2)); //4
