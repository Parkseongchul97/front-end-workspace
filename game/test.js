const name = document.querySelector("#name");
name1.addEventListener("input", function () {
  const nameT = /^[가-힣]{2,}$/;
  const exp = nameT.test(name1.value);
  if (exp) {
    nameText.innerHTML = `ok`;
  }
});
const age = document.querySelector("#age");
age.addEventListener("input", function () {
  const ageT = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
  const exp = ageT.test(age.value);
  if (exp) {
    ageText.innerHTML = `마줌`;
  } else {
    ageText.innerHTML = `틀림`;
  }
});
