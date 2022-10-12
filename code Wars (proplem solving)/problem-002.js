////////////////////////////////////////////
/*           1           */
/*
*Your task is to calculate 
how many blank pages do you need.
 If n < 0 or m < 0 return 0.
*/
function paperwork(n, m) {
  return n >= 0 && m >= 0 ? n * m : 0;
}
console.log(paperwork(-1, 5)); // 0
////////////////////////////////////////////
/*           2           */
/* Double Char */
function doubleChar(str) {
  // Your code here
  return str
    .split("")
    .map((letter) => letter + letter)
    .join("");
}
console.log(doubleChar("ahmed")); // aahhmmeedd
////////////////////////////////////////////
/*           3           */
/* Sum without highest and lowest number
The highest or lowest element
 respectively is a single element at each edge,
 even if there are more than one with the same value.
*/
function sumArray(array) {
  //sort Array
  for (let i = 0; i < array.length; i++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  const newArray1 = Array.from(new Set(array));
  let result = 0;
  for (let i = 0; i < newArray1.length; i++) {
    result += newArray1[i];
  }
  return result - (newArray1[0] + newArray1[newArray1.length - 1]);
}

console.log(sumArray([7, 2, 4, 9, 19])); //20
console.log(sumArray([7, 2, 4, 9, 19, 19])); //20
