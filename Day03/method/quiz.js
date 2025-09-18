const word = prompt("단어 입력");

window.console.log(
  `${word.length >= 10 ? "단어가 깁니다" : word.toUpperCase()}`
);

const sentence = prompt("문장1 입력");
console.log(sentence.split(" "));

const word2 = prompt("단어 입력2");
if (word2 == word2.toUpperCase()) {
  console.log(word2.toLowerCase());
} else {
  console.log(word2.toUpperCase);
}

const email = prompt("이메일 입력");
if (email.includes("@")) {
  console.log("이메일이 올바릅니다");
} else {
  console.log("이메일이 다릅니다.");
}
