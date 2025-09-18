const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. 5이하만 살리기

const quiz1 = (x) => {
  return x <= 5;
};
const lowerFive = arr.filter(quiz1);
console.log(lowerFive);

// 2. 2, 5만 살리기

const quiz2 = (x) => {
  return x == 2 || x == 5;
};

const TwoFive = arr.filter(quiz2);
console.log(TwoFive);

// 3. 짝수만 살리기

const quiz3 = (x) => {
  return x % 2 == 0;
};
const odd = arr.filter(quiz3);
console.log(odd);

// 4. 자기 숫자 제곱했을 때, 50보다 작은 수만 살리기

const quiz4 = (x) => {
  return x ** x < 50;
};
const double = arr.filter(quiz4);
console.log(double);
