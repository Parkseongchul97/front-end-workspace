const images = document.querySelectorAll(".di img");
const reroll = document.querySelector(`#reroll`);
console.log(images);
let holdAddr = [];
function clickHandler() {
  const random = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ];
  for (let i = 0; i < images.length; i++) {
    if (!holdAddr.includes(i))
      images[i].setAttribute("src", `/game/img/dice${random[i]}.png`);
  }
}

reroll.addEventListener("click", clickHandler);
function hold(i) {
  holdAddr.push(i);
}

// 리롤 횟수 2회 제한

// 확인 누를시 각각 주사위 값 따라서 점수판에 넣을수 있게
