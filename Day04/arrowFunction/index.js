// 일반 함수[구문법]
function add(x, y) {
  return x + y;
}

const add11 = (x, y) => {
  return x + y;
};

// 화살표 함수[신문법]
const add1 = (x, y) => {
  return x + y;
};

// 빼기 화살표 함수 x, y
const minus = (x, y) => {
  return x - y;
};

// 1.name, age를 주면 오브젝트 타입으로 돌려주기

const person = (name, age) => {
  return { name: name, age: age };
};

// 2.menu, menu1, menu2를 주면
// name: menu, price:0 해서 각각 오브젝트 타입으로 변환해서
// 배열타입으로 돌려주기

const makeMenus = (menu, menu1, menu2) => {
  return [
    { name: menu, price: 0 },
    { name: menu2, price: 0 },
    { name: menu3, price: 0 },
  ];
};

const a = makeMenus("김치", "피자", "탕수육");

// 1. x를 주면 두 배 돌려주는 화살표 함수

const quiz1 = (x) => {
  return x * 2;
};

// 2. x를 주면 -500 해서 돌려주는 화살표 함수

const quiz2 = (x) => {
  return x - 500;
};

// 3. x, y를 주면 더 큰 숫자를 돌려주는 화살표 함수

const quiz3 = (x, y) => {
  return x > y;
};

// 4. str를 주면 길이를 돌려주는 화살표 함수

const quiz4 = (str) => {
  return str.length;
};

// 5. str를 주면 문자의 길이가 10글자 보다 크면 길이가 길어요!
// 아니면 길이가 적당해요를 돌려주는 화살표 함수

const quiz5 = (str) => {
  return str.length > 10("길이가 길어요"), str.length < 10("길이가 적당해요");
};

// 6. str를 주면, str을 하다니 럭키비키잖아💛 돌려주는 화살표 함수

const quiz6 = (str) => {
  return `${str}을 하다니 럭키비키잖아💛`;
};

// 7. x, y를 주면, x의 y제곱을 돌려주는 화살표 함수

const quiz7 = (x, y) => {
  return x ** y;
};

// 8. str를 주었을 때, a or b 를 포함하면 a, b 포함! 아니면 a, b 미포함!

const quiz8 = (str) => {
  if (str.includes("a") || "b") {
    console.log(`a, b 포함`);
  } else {
    console.log(`a, b미포함`);
  }
};

// 9. x를 주었을 때, x의 구구단의 배수를 배열로 돌려주는 함수
// ex) 5 -> [5, 10, 15, ..., 45 , 1000]

const quiz9 = (x) => {
  return [x * 1, x * 2, x * 3, x * 4, x * 5, x * 6, x * 7, x * 8, x * 9];
};

// 10. str, x를 주었을 때, str의 0번째 부터 x번째까지의 문자열을 돌려주는 함수
// ex) apple, 3 -> app1

const quiz10 = (str, x) => {
  return str.slice();
};
