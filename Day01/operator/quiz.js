const age = Number(window.prompt("당신의 나이는?"));

window.console.log(`${age < 20 ? "미성년자 입니다." : "성인입니다."}`);

const height = Number(window.prompt("당신의 키는?"));

window.console.log(
  `${height < 140 ? "해당 놀이기구는 탑승이 안됩니다." : "가능합니다."}`
);

const number = Number(window.prompt("아무 숫자나 써보셈"));

window.console.log(`${number > 0 ? "양수입니다." : "0 또는 음수입니다."}`);
