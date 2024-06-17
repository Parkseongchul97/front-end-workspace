// 랜덤 1~6 버튼 눌럿을때 사진 변경 + 숫자 출력
// 랜덤 돌려서 사진 변경
// 승리문구에 x팀 승리
const blue = document.querySelector("#blue");
const blueTeamDice = document.querySelector("#blueTeamDice");
const blueTeamDiceButton = document.querySelector("#blueTeamDiceButton");
const red = document.querySelector("#red");
const redTeamDice = document.querySelector("#redTeamDice");
const redTeamDiceButton = document.querySelector("#redTeamDiceButton");

const team = document.querySelector("#team");
const text = document.querySelector("#text");

const reset = document.querySelector("#reset");

let random = Math.floor(Math.random() * 6 + 1);
let random2 = Math.floor(Math.random() * 6 + 1);
let blueEyes;
let redEyes;
redTeamDiceButton.addEventListener("click", function () {
  redTeamDice.setAttribute("src", `/game/img/dice${random}.png`);

  if (random == 1) {
    redEyes = 1;
    red.innerHTML += "1";
    redTeamDiceButton.setAttribute("disabled", "disabled");
  } else if (random == 2) {
    redEyes = 2;
    red.innerHTML += "2";
    redTeamDiceButton.setAttribute("disabled", "disabled");
  } else if (random == 3) {
    redEyes = 3;
    red.innerHTML += "3";
    redTeamDiceButton.setAttribute("disabled", "disabled");
  } else if (random == 4) {
    redEyes = 4;
    red.innerHTML += "4";
    redTeamDiceButton.setAttribute("disabled", "disabled");
  } else if (random == 5) {
    redEyes = 5;
    red.innerHTML += "5";
    redTeamDiceButton.setAttribute("disabled", "disabled");
  } else if (random == 6) {
    redEyes = 6;
    red.innerHTML += "6";
    redTeamDiceButton.setAttribute("disabled", "disabled");
  }
  console.log(redEyes);
});

blueTeamDiceButton.addEventListener("click", function () {
  blueTeamDice.setAttribute("src", `/game/img/dice${random2}.png`);

  if (random2 == 1) {
    blueEyes = 1;
    blue.innerHTML += "1";
    blueTeamDiceButton.setAttribute("disabled", "disabled");
  } else if (random2 == 2) {
    blueEyes = 2;
    blue.innerHTML += "2";
    blueTeamDiceButton.setAttribute("disabled", "disabled");
  } else if (random2 == 3) {
    blueEyes = 3;
    blue.innerHTML += "3";
    blueTeamDiceButton.setAttribute("disabled", "disabled");
  } else if (random2 == 4) {
    blueEyes = 4;
    blue.innerHTML += "4";
    blueTeamDiceButton.setAttribute("disabled", "disabled");
  } else if (random2 == 5) {
    blueEyes = 5;
    blue.innerHTML += "5";
    blueTeamDiceButton.setAttribute("disabled", "disabled");
  } else if (random2 == 6) {
    blueEyes = 6;
    blue.innerHTML += "6";
    blueTeamDiceButton.setAttribute("disabled", "disabled");
  }
  console.log(blueEyes);
});

end.addEventListener("click", function () {
  if (blueEyes > redEyes) {
    team.innerHTML = "청팀";
    team.style.color = "blue";
    text.innerHTML = "의 승리입니다 축하합니다!";
  } else if (redEyes > blueEyes) {
    team.innerHTML = "홍팀";
    team.style.color = "red";
    text.innerHTML = "의 승리입니다 축하합니다!";
  } else if (blueEyes == redEyes) {
    text.innerHTML = "무승부 입니다";
  }
});
reset.addEventListener("click", function () {
  team.innerHTML = "";
  text.innerHTML = "";
  team.style.color = "black";
  blueTeamDiceButton.removeAttribute("disabled", "disabled"); // 버튼 비활성화 다시 활성화
  blue.innerHTML = "";
  redTeamDiceButton.removeAttribute("disabled", "disabled");
  red.innerHTML = "";
  redTeamDice.setAttribute("src", `/game/img/dice.png`); // 이미지 초기로
  blueTeamDice.setAttribute("src", `/game/img/dice.png`);
  random = Math.floor(Math.random() * 6 + 1); //랜덤값 다시초기화
  random2 = Math.floor(Math.random() * 6 + 1);
});
