/**********************(01)*************************/
/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
const twoSum = (nums, target) => {
  for (let i = 0; i <= nums.length - 1; i++) {
    let solve = target - nums[i];
    let index = nums.indexOf(solve, i + 1);
    if (index !== -1 && index !== 0) {
      return [i, index];
    }
  }
};
console.log(twoSum([1, 2, 3], 5)); // [1,2]
console.log(twoSum([1, 2, 3], 4)); // [0,2]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
/*************************(02)**********************/
/*
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/
const isPalindrome = function (x) {
  const s = x.toString();
  const arr = Array.from(s);
  const arrayF = arr.slice(0, s.length / 2);
  let arrayL = [];
  if (s.length % 2 === 0) {
    const array2 = arr.slice(s.length / 2);
    for (let i = array2.length - 1; i >= 0; i--) {
      arrayL.push(array2[i]);
    }
    const result = arrayL.toString() === arrayF.toString();
    return result;
  } else {
    const array2 = arr.slice(s.length / 2 + 1);
    for (let i = array2.length - 1; i >= 0; i--) {
      arrayL.push(array2[i]);
    }
    const result = arrayL.toString() === arrayF.toString();
    return result;
  }
};
// console.log(isPalindrome("123321")); // true
// console.log(isPalindrome("123221")); // false
// console.log(isPalindrome("12321")); // true
// console.log(isPalindrome("12311")); // false
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(121)); // true
/*************************(03)**********************/
/*
S  V

I  1
V  5
X  10
L  50
C  100
D  500
M  1000
*/
var romanToInt = function (s) {
  const sv = { I: 1, V: 5, X: 10, L: 50, D: 100, C: 500, M: 1000 };
  const x = s.toString();
};
/*************************(04)**********************/
/*************************(05)**********************/
/*************************(06)**********************/
