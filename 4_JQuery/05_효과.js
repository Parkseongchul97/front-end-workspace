// 1. show hide toggle
$("#show").click(() => {
  $("#img").show(500);
});
$("#hide").click(() => {
  $("#img").hide(500);
});
$("#toggle").click(() => {
  $("#img").toggle(200);
});
// 2. fadeIn, fadeOut, fadeToggle, fadeTo
$("#fadeIn").click(() => {
  $("#img").fadeIn(2000);
});
$("#fadeOut").click(() => {
  $("#img").fadeOut(2000);
});

$("#fadeToggle").click(() => {
  $("#img").fadeToggle(200);
});
$("#img").hover(
  // mouseenter
  function () {
    $(this).fadeTo(500, 0.5);
  },
  // mouseleave
  function () {
    $(this).fadeTo(500, 1);
  }
);
// 3. slideDown, slideUp, slideToggle
$(".menu").click((e) => {
  let content = $(e.target).next();
  /*
  if (content.css("display") === "none") {
    content.slideDown(500);
  } else if (content.css("display") != "none") {
    content.slideUp(500);
  }*/
  //content.slideToggle(500);
  // 하나가 열리면 나머지는 닫히게 하려면 일단 닫고
  $(".contents").slideUp();
  if (content.css("display") === "none") {
    content.slideDown(1000);
  }
});
