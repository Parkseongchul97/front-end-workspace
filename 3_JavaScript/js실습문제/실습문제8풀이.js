const id = document.querySelector("#id");
const idText = document.querySelector("#idText");
const pw = document.querySelector("#pw");
const pwText = document.querySelector("#pwText");
const pwc = document.querySelector("#pwc");
const pwcText = document.querySelector("#pwcText");
const name1 = document.querySelector("#name1");
const nameText = document.querySelector("#nameText");
const email = document.querySelector("#email");
const emailText = document.querySelector("#emailText");

/*
    사용자가 입력을 했을때 
    틀리면 빨간색

    맞으면 초록색 + OK 출력
*/
id.addEventListener("input", function () {
  // 첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로입력하시오.
  const regExp = /^[a-zA-z][0-9a-zA-Z]{3,11}$/;
  const check = regExp.test(id.value);
  if (check) {
    idText.style.color = "green";
    idText.innerHTML = "OK!";
  } else {
    idText.style.color = "red";
    idText.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오";
  }
});
// [!-~] 아스키코드로 ! 부터 숫자 영어 ~ 까지 전부다
pw.addEventListener("input", function () {
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(pw.value);
  if (check) {
    pwText.style.color = "green";
    pwText.innerHTML = "OK!";
  } else {
    pwText.style.color = "red";
    pwText.innerHTML =
      "영문자,숫자,특수문자 포함하여 총 8~15자로 입력하십시오.";
  }
});
pwc.addEventListener("input", function () {
  if (pw.value === pwc.value) {
    pwcText.style.color = "green";
    pwcText.innerHTML = "OK!";
  } else {
    pwcText.style.color = "red";
    pwcText.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
  }
});
name1.addEventListener("input", function () {
  const regExp = /^[가-힣]{2,}$/;
  const check = regExp.test(name1.value);
  if (check) {
    nameText.style.color = "green";
    nameText.innerHTML = "OK!";
  } else {
    nameText.style.color = "red";
    nameText.innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하십시오.";
  }
});
email.addEventListener("input", function () {
  const regExp = /^[!-~]+@[!-~]+$/;
  const check = regExp.test(email.value);
  if (check) {
    emailText.style.color = "green";
    emailText.innerHTML = "OK!";
  } else {
    emailText.style.color = "red";
    emailText.innerHTML = "이메일 형식에 맞춰서 입력하십시오..";
  }
});
