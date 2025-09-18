const arr = [1, 3, 5, 7, 9];
// const double = (x) => {
//   return x * 2;
// };
// const plus10 = (x) => {
//   return (x = 10);
// };

// const result = arr.map(plus10);
// console.log(result);

// arr
// puch, pop, shift, unshift
// map: 안에 있는 요소를 바꾸는 함수
// filter: 안에 있는 요소를 조건에 의하여 거르기

// const biggerFive = (x) => {
//   return x >= 5;
// };

// const first = arr.filter(biggerFive);
// console.log(first);

// // 3이상 7이상만 살리기

// const biggerThree = (x) => {
//   return x >= 3 && x <= 7;
// };
// const quiz1 = arr.filter(biggerThree);
// console.log(quiz1);

// 1. 요소 중에 5 있니?

const quiz1 = (x) => {
  return x == 5;
};
const result1 = arr.some(quiz1);
console.log(result1);

// 2. 요소 중에 짝수 있니?

const quiz2 = (x) => {
  return x % 2;
};
const result2 = arr.some(quiz2);
console.log(result2);

// 요소 중에 1, 2 가 있니?
const quiz3 = (x) => {
  return x == 1 && x == 2;
};
const result3 = arr.every(quiz3);
console.log(result3);
