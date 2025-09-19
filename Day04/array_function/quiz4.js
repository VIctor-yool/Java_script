const fruits = [
  "watermelon",
  "apple",
  "melon",
  "grape",
  "banana",
  "peach",
  "kiwi",
  "pineapple",
  "strawberry",
  "orange",
  "plum",
];

// 1. 6글자 이상의 과일만 남기기

// const quiz1 = (x) => {
//   return x.length >= 6;
// };
// const result1 = fruits.filter(quiz1);
// console.log(result1);

// const quiz12 = fruits
//   .filter((v, i) => v.length >= 6)
//   .filter((v, i) => v.startsWith("w"));
// console.log(quiz12);

// // 2. 알파벳 m이 들어가면 없애기

// const quiz2 = (x) => {
//   return !x.includes("m");
// };
// const result2 = fruits.filter(quiz2);
// console.log(result2);

// // 3. a, e, i, o, u로 시작하는 과일은 걸러주기

// const result3 = fruits.filter((x) =>
//   ["a", "e", "o", "i", "u"].some((v) => !x.startsWith(v))
// );
// console.log(result3);

// const quiz3 = (x) => {};

// // i, e를 포함하고, 문자 길이가 4글자 이상인 애들만 찾고, 대문자화 하기

// const result5 = fruits
  .filter((x) => ["i", "e"].some((v) => x.includes(v)))
//   .filter((x) => x.length >= 4)
//   .map((x) => x.toUpperCase());

// 1. 6글자 이상의 과일만 남기기

fruits.filter((x, i) => {
  x.length > 6;
});
console.log();
// // 2. 알파벳 m이 들어가면 없애기

// // 3. a, e, i, o, u로 시작하는 과일은 걸러주기

// // i, e를 포함하고, 문자 길이가 4글자 이상인 애들만 찾고, 대문자화 하기
