// 1. 영화 제목과 좌석[A1, D2, E3], 그리고 시작 시간[21:00]을 넣으면
// 끝 시간이 +2시간 더해서 오브젝트 타입으로 돌려주는 함수 만들기
// 단, 타입 위배시 문자열 "에러입니다." 돌려주기

// const movie = {
//   starttime: "21:00",
//   titles[
//     {name: "Harrypotter", seat: A1, price:10000 },
//     {name: "Demonslayer", seat: B3, price:10000 },
//     {name: "Beginagain", seat: A3, price:10000 }

//   ],
//   ticket: function (endingtime) {}

// }

function makeTicket(title, seat, startTime) {
  if (
    typeof title != "string" ||
    typeof seat != "string" ||
    typeof startTime != "string"
  )
    return "에러입니다.";
  return {
    title: title,
    seat: seat,
    startTime: startTime,
    endTime: String(parseInt(startTime) + 2) + ":00",
  };
}
