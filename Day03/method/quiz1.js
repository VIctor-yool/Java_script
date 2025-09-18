// const password = prompt("비밀번호 설정 해주셈");

// console.log(
//   `${password.length < 4 ? "비밀번호 길이가 맞지 않습니다." : "허용"}`
// );

// console.log(
//   `${password.length > 12 ? "비밀번호 길이가 맞지 않습니다." : "허용"}`
// );

// if (password.includes("@", "!", "#")) {
//   console.log("허용");
// } else {
//   console.log("비밀번호에 @, !, # 이 없습니다.");
// }

// if (password.startsWith(it)) {
//   console.log("허용");
// } else {
//   console.log("비밀번호의 시작이 it가 아닙니다.");
// }

const password = prompt("비밀번호 설정 입력");
if (password.length < 4 || 12 < password.length) {
  console.log("비밀번호 길이가 맞지 않습니다.");
} else if (
  !password.includes("@") &&
  !password.includes("!") &&
  !password.includes("#")
) {
  console.log("비밀번호에 @, !, # 이 없습니다.");
} else if (!password.startsWith(it)) {
  console.log("비밀번호 시작이 it가 아닙니다.");
} else {
  console.log("올바르게 비밀번호 만들었습니다.");
}
