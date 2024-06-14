// 그림이 랜덤으로 클릭할때마다 변경
// html 교체하기 family[i] 1~3랜덤
// if 문으로 i가 이미지 1 && 이미지 1 && 이미지 1 이런식일때만 아래 출력문 + click 비활성화
// 클래스 추가 기능으로? 변경?
// 백그라운드 이미지로?
//최종 결과가 나올시 맨 아래 글씨
// 클릭을 할 때마다 span에 숫자 1씩 증가 <- 반복문 사이에 끼워박기

const click = document.querySelector("#click");
console.log(click);

const img0 = document.querySelector("main img");
const img = document.querySelectorAll("main img"); // 이미지들 1개씩 있는 배열
console.log(img);

let random = Math.floor((Math.random() * 12) / 4); // 0 1 2 중에 숫자 1개 생성
console.log(random);
const result = document.querySelector("#result");
console.log(img[random]);

function click2() {
  console.log(img[random]);
}
if ((img[0] == img[0]) == img[0]) {
  result.innerHTML("축하해용");
} else if ((img[1] == img[1]) == img[1]) {
  result.innerHTML("축하해용");
} else if ((img[2] == img[2]) == img[2]) {
  result.innerHTML("축하해용");
}
function changeimg1() {
  img0.src = "/resurces/family2.jpg";
}
