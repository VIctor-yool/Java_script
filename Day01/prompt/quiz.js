const year = window.prompt("당신이 태어난 연도가 언제인가요?");
const month = window.prompt("당신이 태어난 달이 언제인가요?");
const date = window.prompt("당신이 태어난 날짜가 언제인가요?");

window.console.log(
  `당신이 태어난 날은 ${year}년 ${month}월 ${date}일 이시군요 !`
);

const elementary_school = window.prompt("어느 초등학교를 다녔었나요?");
const middle_school = window.prompt("어느 중학교를 다녔었나요?");
const high_school = window.prompt("어느 고등학교를 다녔었나요?");

window.console.log(
  `당신은 ${elementary_school}초등학교, ${middle_school}중학교, ${high_school}고등학교 를 졸업하셨군요 !`
);

const no_1 = window.prompt(
  "베스킨 라빈스에서 좋아하는 맛이 어떤건가요? (top1)"
);
const no_2 = window.prompt(
  "베스킨 라빈스에서 좋아하는 맛이 어떤건가요? (top2)"
);
const no_3 = window.prompt(
  "베스킨 라빈스에서 좋아하는 맛이 어떤건가요? (top3)"
);

window.console.log(
  `당신의 최애맛인 ${no_1}, ${no_2}, ${no_3} 맛을 파인트 컵에 담아 드릴게요 !`
);
