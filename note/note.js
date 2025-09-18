// 프롬포트로 숫자를 입력 받고 양수면 " 양수 입니다 ", 0이면 "0입니다" 음수면 "음수입니다"

const a = +prompt("숫자를 입력하세요");

if (a > 0) {
  console.log`${a}양수 입니다.`;
} else if (a == 0) {
  console.log`${a}는 0입니다.`;
} else {
  console.log`${a}는 음수입니다.`;
}
