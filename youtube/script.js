const bar = document.querySelector(".progress-bar");

window.addEventListener("scroll", function () {
  // 전체 스크롤 할수있는 범위 = 바디 전체 높이 - 현재 창(윈도우 높이)
  let maxScrollValue = this.document.body.offsetHeight - window.innerHeight;
  // 0 ~ 100 까지로 만듬
  bar.style.width =
    Math.floor((this.window.scrollY / maxScrollValue) * 100) + "%";
});
