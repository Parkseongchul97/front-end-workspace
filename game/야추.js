const images = document.querySelectorAll(".di img");
const reroll = document.querySelector(`#reroll`);
console.log(images);

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
    images[i].setAttribute("src", `/game/img/dice${random[i]}.png`);
    if (
      hold1.addEventListener("cilck", function () {
        let dice1 = 0;
        images[i] += dice1;
      })
    );
  }
}
reroll.addEventListener("click", clickHandler);
// 단순 주사위 6개 굴림 구현
// 리롤 횟수 2회 제한
// 홀드 누를시 주사위 고정
// 확인 누를시 각각 주사위 값 따라서 점수판에 넣을수 있게
