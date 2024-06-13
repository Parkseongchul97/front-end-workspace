// DOMContentLoaded : DOM 구조가 로드되고 실행!
window.addEventListener("DOMContentLoaded", function () {});
const h1 = document.querySelector("h1");
const imgs = document.querySelectorAll(".container img");

console.log(imgs);

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (event) {
    imgs[i].style.display = "none";
    /*for( const item of img){
    item.addEventListener("click",funstion(event){
    event.currentTarget.style.display = "none";
    });*/
  });
}
//컨테이너에 걸어서 하는법
const container = document.querySelector(".container");
function removeHandler(e) {
  // 컨테이너로 건걸 함수에 묶고
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
}

container.addEventListener("click", removeHandler); // 함수로 불러와서 사용

h1.onclick = function () {
  // 클릭시에
  h1.style.color = "purple";
};
h1.onmouseenter = function () {
  // 마우스를 올렸을때
  h1.style.backgroundColor = "green";
};
h1.onmouseleave = function () {
  // 마우스가 나갔을때
  h1.style.backgroundColor = "pink";
};
// 이벤트 넣어줄변수.addEventListener("이벤트명", 이벤트 객체/함수);
// addEventListener 이게 제일 중요
h1.addEventListener("click", function () {
  h1.style.backgroundColor = "skyblue";
});
