const images = document.querySelectorAll(".images img");
console.log(images);
let count = 0;
const span = document.querySelector("#click span");
const result = document.querySelector("#result");

function clickHandler() {
  // 이미지들이 랜덤으로 바뀜
  // 각각 랜덤을 돌려야하니까 편의를 위해서 배열로 랜덤값을 각각 3개만듬
  const random = [
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
  ];
  //이미지 1 ~ 9 을 순서대로 건드리는 for문을 만들고
  for (let i = 0; i < images.length; i++)
    // 이미지 i(1~9)를 setAttribute로 src 안의 내용을 랜덤 배열 각각 i로 변경
    images[i].setAttribute("src", `/resources/grid${random[i]}.jpg`);
  // 클릭한 만큼 span의수가 증가
  count += 1;
  span.innerHTML = count;
  // 조건: 이미지 3개가 모두일치할때
  if (
    random[0] === random[1] &&
    random[1] === random[2] &&
    random[2] === random[3] &&
    random[3] === random[4] &&
    random[4] === random[5] &&
    random[5] === random[6] &&
    random[7] === random[8]
  ) {
    // 끝나면 result에 문구가 뜨면서 비활성화
    result.innerHTML = "Congratulation!! Press restart to play again~!!";
    click.setAttribute("disabled", "disabled"); // disabled 버튼을 멈추는 속성을 setAttribute로 추가
  }

  console.log(images);
}

function restartHandler() {
  // 이미지 처음에 셋팅했던 이미지로 변경
  for (let i = 0; i < images.length; i++)
    // i가 0부터 2까지 니까 i + 1
    images[i].setAttribute("src", `/resources/grid${i + 1}.jpg`);

  // 숫자는 다시 0으로 셋팅 span 태그값 비우기
  span.innerHTML = "";
  count = 0;

  // 결과 텍스트도 값을 비우기
  result.innerHTML = "";

  // 버튼에 disabled 삭제 removeAttribute 로 속성 삭제
  click.removeAttribute("disabled", "disabled");
}

click.addEventListener("click", clickHandler); // click 버튼을 클릭했을때 이벤트를 clickHandler라는 함수에 담음
restart.addEventListener("click", restartHandler); // restart 버튼을 클릭했을때 이벤트를 clickHandler라는 함수에 담음
