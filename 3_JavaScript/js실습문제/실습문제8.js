const idExp = /^([a-zA-Z])[0-9a-zA-Z]{3,11}$/;

//문제점 : 돌아오지는 않음 , 함수로 만드려고 해도 else에 글씨 다시넣는거 땜에 안댐
// 돌아오지 않음 문제 <- 제거하고 추가가 아니라 그냥 넣으면 해결
id.addEventListener("input", function () {
  if (idExp.test(id.value)) {
    idText.innerHTML = "OK!";
    idText.style.color = "green";
  } else {
    idText.style.color = "red";
    idText.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오";
    // stlye 태그 추가해서 색깔 빨간색
  }
});
// 영어, 숫자, 특수문자 8~15
// ?랑 .은 알겟음
const pwExp = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()]).{8,15}$/;

pw.addEventListener("input", function () {
  if (pwExp.test(pw.value)) {
    pwText.innerHTML = "OK!";
    pwText.style.color = "green";
  } else {
    pwText.style.color = "red";
    pwText.innerHTML =
      "영문자,숫자,특수문자 포함하여 총 8~15자로 입력하십시오.";
  }
});

pwc.addEventListener("input", function () {
  if (pw.value === pwc.value) {
    pwcText.innerHTML = "OK!";
    pwcText.style.color = "green";
  } else {
    pwcText.style.color = "red";
    pwcText.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
  }
});
const nameExp = /^[가-힣]{2,}$/;
name1.addEventListener("input", function () {
  if (nameExp.test(name1.value)) {
    nameText.innerHTML = "OK!";
    nameText.style.color = "green";
  } else {
    nameText.style.color = "red";
    nameText.innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하십시오.";
  }
});
const emailExp = /^([!-~]+)@([!-~]+)$/;
email.addEventListener("input", function () {
  if (emailExp.test(email.value)) {
    emailText.innerHTML = "OK!";
    emailText.style.color = "green";
  } else {
    email.setAttribute("", "required");

    emailText.style.color = "red";
    emailText.innerHTML = "이메일 형식에 맞춰서 입력하십시오.";
  }
});
// input 태그 내부에 조건들이 모두 충족 되었을때만 회원가입 버튼이 활성화
// 디폴트로는 비활성화 상태
// 1 type을 빼두다가 넣는다?
// 2 아래 글씨가 초록이 == 되면 활성화?
// 3 text 안에 value 값이 OK!라면
const test = document.querySelectorAll(".text");
for (let i = 0; i < test.length; i++) {
  console.log(test[i].value);

  if (test.value == "OK!") {
    end.removeAttribute("disabled", "disabled");
    //end.setAttribute("type", "submit");
  } else {
    end.setAttribute("disabled", "disabled");
  }
}
