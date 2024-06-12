function btn1() {
  console.log(document.head);
  console.log(document.body);

  // 동일한 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div);
  console.log(div[0]);
  console.log(div[1]);
}
function btn2() {
  const div = document.getElementById("testId1");
  console.log(div);
}
function btn3() {
  // 동일한 class 속성값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByClassName("testClass");
  console.log(div);
  console.log(div[0]);
  console.log(div[1]);
}

function btn4() {
  // 동일한 name 속성값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByName("testName");
  console.log(div);
  console.log(div[0]);
  console.log(div[1]);
}
function btn5() {
  let div = document.querySelector("#testId1");
  console.log(div);
  div = document.querySelectorAll("div");
  console.log(div);
  console.log(div[1]);
}
function btn6() {
  const div = document.querySelectorAll(".testClass");
  div[0].textContent = "<span>안녕하세요!</span>";
  div[1].innerHTML = "<span>안녕하세요!</sapn>";
  console.log(div[1].innerHTML);
}
function btn7() {
  const div = document.querySelector("#testId1");
  div.setAttribute("data-test", "테스트");
  div.setAttribute("data-test", "테스트2");
  console.log(div.getAttribute("data-test"));
}
function btn8() {
  const div = document.querySelector("#testId1");
  div.style.color = "orange";
  div.style.backgroundColor = "yellow";
}
const div = document.querySelector("#testId2");
function btn9() {
  div.classList.add("black");
  // class 추가
}
function btn10() {
  div.classList.remove("black");
  // class 삭제
}
function btn11() {
  // div.classList.contains("class이름") 해당 클래스의 유무를 true false로 확인
  // 조건문과 응용해서 1개의 버튼으로 클래스를 넣거나 빼기 가능
  const check = div.classList.contains("black");
  if (check) {
    div.classList.remove("black");
  } else {
    div.classList.add("black");
  }
}
function btn12() {
  //div.classList.toggle("class 이름");
  //원클릭으로 해당 클래스를 껏다 켰다 가능
  div.classList.toggle("black");
}
function btn13() {
  const div = document.querySelector("#testId3");
  // <p>Lorem Ipsum</p> 하단 2줄
  const p = document.createElement("p");
  p.innerHTML = "Lorem Ipsum";

  // div에 만든 <p>추가
  div.appendChild(p); // 지역변수 div id testId3 위치에있는 div 라는 변수에 자식으로 추가
}
function btn14() {
  const div = document.querySelector("#testId3"); // === console.log(p.parentNode);
  const p = document.querySelector("p");
  //div.removeChild(p);
  p.parentNode.removeChild(p);
}
