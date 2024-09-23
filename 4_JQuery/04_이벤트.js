// 1. 이벤트 연결
// one
$("#area1").one("click", () => {
  // 클릭할때마다
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});
// on
// $("#area2").on("mouseenter", (event) => {
//   // 마우스 올라갈때마다
//   $(event.target)
//     .css({ "background-color": "hotpink" })
//     .text("마우스가 올라갈때");
// });
// $("#area2").on("mouseleave", (event) => {
//   // 마우스 내겨갈때마다
//   $(event.target)
//     .css({ "background-color": "beige" })
//     .text("마우스가 내겨갈때");
// });
// $("#area2").on("mouseenter mouseleave", (event) => {
//   if (event.type === "mouseenter") {
//     $(event.target)
//       .css({ "background-color": "hotpink" })
//       .text("마우스가 올라갈때");
//   } else if (event.type === "mouseleave") {
//     $(event.target)
//       .css({ "background-color": "beige" })
//       .text("마우스가 내겨갈때");
//   }
// });
// $("#area2").on("click", (event) => {
//   $(event.target)
//     .css("background-color", "white")
//     .text("")
//     .off("mouseenter mouseleave"); // mouseenter, mouseleave 이벤트 제거
// });
$("#area2").on({
  mouseenter: (event) => {
    $(event.target)
      .css({ "background-color": "hotpink" })
      .text("마우스가 올라갈때");
  },
  mouseleave: (event) => {
    $(event.target)
      .css({ "background-color": "beige" })
      .text("마우스가 내겨갈때");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave");
  },
});

// 2. 키보드 이벤트
// keydown, keypress, keyup
$("#textarea1").on({
  keydown: (e) => {
    // 키보드가 눌려질 때
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    // 글자가 입력될 때
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    // 키보드가 떼어질 때
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});

$("#textarea2").on({
  keydown: (e) => {
    // 키보드가 눌려질 때
    let taget = $(e.target);
    let length = taget.val().length;
    let maxLength = parseInt($("#maxLength").text());
    if (length > maxLength) {
      taget.val(taget.val().substr(0, maxLength));
    } else {
      $("#counter").text(length);
    }
  },
});
$("#userId").on("input", (e) => {
  let id = $("#userId").val();
  const idRegExp = /^[a-z][0-9a-z]{3,11}$/;
  if (idRegExp.test(id)) {
    $("#idCheck").text("사용가능한 아이디입니다.").css("color", "green");
  } else if (id === "") {
    $("#idCheck").text("");
  } else {
    $("#idCheck").text("사용불가능한 아이디입니다.").css("color", "red");
  }
});
// 3. trigger() 메서드
let i = 0;
$("#area3").click((e) => {
  let counter = $("#counter2");
  let current = parseInt(counter.text());
  counter.text(++current);
});
$("#btn").click(() => {
  $("#area3").trigger("click");
});
