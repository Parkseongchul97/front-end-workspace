count();
setInterval(count, 1000);
/* 아래 식을 위 한줄로 축약가능 함수에 함수넣을 때만?
setInterval(() => {
  count();
}, 1000);
*/

function count() {
  // 시간띄워주는 함수로 묶어버림
  const time = new Date("2025-01-01 00:00:00");
  const nowtime = new Date();
  console.log(time);
  console.log(nowtime);
  let timer = 0;
  timer = time - nowtime;
  console.log(timer); // 밀리세컨드
  // 밀리 세컨드가 기본단위니까
  // 총시간을 초단위로 바꾸고 초를 60으로 나눠서 분,또 나눠서 시간 시간 24로 나눠서 일로 바꾸고
  /*
  let day = Math.floor(timer / 1000 / 60 / 60 / 24);
  console.log(day);
  let hours = Math.floor((timer / 1000 / 60 / 60) % 24);
  console.log(hours);
  let minute = Math.floor((timer / 1000 / 60) % 60);
  console.log(minute);
  let second = Math.floor((timer / 1000) % 60); // 소숫점 자른 초
  console.log(second);
  clock.innerHTML = `${day}일 
  ${String(hours).padStart(2, "0")}시  
  ${String(minute).padStart(2, "0")}분 
  ${String(second).padStart(2, "0")}초`;
  */

  const second = Math.floor(timer / 1000);
  const minute = Math.floor(second / 60);
  const hours = Math.floor(minute / 60);
  const day = Math.floor(hours / 24);
  clock.innerHTML = `${day}일 
  ${String(hours % 24).padStart(2, "0")}시  
  ${String(minute % 60).padStart(2, "0")}분 
  ${String(second % 60).padStart(2, "0")}초`;

  //String에 지원하는 함수로 .padStart(차지할 공간숫자. "대신 채울 문자")
}
