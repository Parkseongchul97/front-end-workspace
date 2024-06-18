const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const pwc = document.querySelector("#pwc");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");

id.addEventListener("input", function () {
  const exp = /^.{1,}$/;
  if (exp.test(id.value) == false) {
    text1.innerHTML = "필수 입력 항목입니다.";
    text1.style.color = "red";
  } else {
    text1.innerHTML = ``;
  }
});

pw.addEventListener("input", function () {
  const exp = /^[!-~]{8,32}$/;
  if (exp.test(pw.value) == false) {
    text2.innerHTML = `영문자 대/소문자, 특수문자,숫자 포함 8~32자.`;
    text2.style.color = "red";
  } else {
    text2.innerHTML = ``;
  }
});
pwc.addEventListener("input", function () {
  if (pw.value !== pwc.value) {
    text3.innerHTML = `비밀번호와 일치하지 않습니다.`;
    text3.style.color = "red";
  } else {
    text3.innerHTML = ``;
  }
});
