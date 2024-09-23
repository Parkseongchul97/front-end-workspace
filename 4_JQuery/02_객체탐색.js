// 1. Filtering 메서드
// first : 선택된 요소들 중 첫 번째 요소 선택
$("h4").first().css("font-size", "4rem");
$("h4:first").css("color", "red");
$("h4").filter(":first").css("background-color", "yellow");

// last : 선택된 요소들 중 마지막 번째 요소 선택
$("h4").last().css("font-size", "3rem");
$("h4:last").css("color", "green");
$("h4").filter(":last").css("background-color", "skyblue");

// eq(n) : 선택된 요소들 중 인덱스 번호와 일치하는 요소 선택(0부터 시작)

$("h4").eq(2).text("eq에 의해 선택되었습니다.");

// odd: 홀수번째 / even : 짝수번째 인덱스에 위치한 요소 선택
$("h4").odd().css({ "background-color": "hotpink", color: "white" });

// not(선택자) : 선택된 요소들 중 특정 요소와 일치하지 않는 요소 선택
$("h4").not(".test").css({ "background-color": "orange", color: "white" });

// 2. Ancestors & Descendants 메서드
// parent : 선택된 요소의 바로 위 상위 요소 선택
$("span").parent().css({ border: "2px solid", color: "red" });

// parents(['선택자']) : 선택된 요소의 모든 상위 요소를 선택하거나, 매개변수가 있으면 매개변수와 일치하는 상위 요소만 선택
$("li").parents().css("color", "blue");

$("li").parents(["div"]).css({ border: "2px dashed tomato" });

// parentsUntil(["선택자"]) : 선택된 요소의 모든 상위 요소를 선택하거나,
// 매개변수가 있으면 선택된 요소부터 매개변수와 일치하는 요소까지의 상위 요소 선택

$("span").parentsUntil("div").css("background-color", "lavenderblush");

// children(['선택자']) : 선택된 요소의 모든 자식 요소를 선택하거나 매개변수가 있으면 매개변수와 일치하는 자식 요소만 선택
console.log($(".wrap").children());
// find('선택자') : 선택된 요소의 하위 요소중 매개변수와 일치하는 모든 하위요소 선택
console.log($(".wrap").find("span"));

let style1 = { color: "deeppink", border: "2px soild" };
let style2 = { color: "blue", border: "2px soild" };
let style3 = { color: "green", border: "2px soild" };
let style4 = { color: "purple", border: "2px soild" };
let style5 = { color: "orange", border: "2px soild" };

// 클래스가 wrap인 요소의 자식요소들에 1
$(".wrap").children().css(style1);

// 자식의 자식 요소들에 2
$(".wrap").children().children().css(style2);

// 자식의 자식 요소중 ul에 3
$(".wrap").children().children("ul").css(style3);

// 자식의 자식의 자식 요소중 li태그 4
$(".wrap").children().children().children("li").css(style4);

// 모든 하위 요소중 span 태그에 5
$(".wrap").find("span").css(style5);

// 3. Sideways 메서드
// siblings(['선택자']) : 선택된 요소와 같은 레벨에 있는 모든 요소를 선택하거나 매개변수가 있으면 같은 레벨 요소 중 매개변수와 일치하는 요소 선택
$(".wrap2 h2").siblings().css(style3);

// next : 선택된 요소와 같은 레벨 요소 중 다음 한 개 요소 선택
// h2 요소의 다음 형제 요소에 style1 적용
$(".wrap2 h2").siblings("p").css(style2);

$(".wrap2 h2").next().css(style1);

// nextAll : 선택된 요소와 같은 레벨 요소 중 다음의 모든 요소 선택
$(".wrap2 h2").nextAll().css("background-color", "pink");

// nextUntil(['선택자']) : 선택된 요소와 같은 레벨 요소 중 다음의 모든 요소를 선택하거나 매개변수가 있으면 같은 레벨의 다음 요소중 매개변수와 일치하는 요소까지 선택
$(".wrap2 h2").nextUntil("p").css("border", "2px dashed");

// prev : 선택된 요소와 같은 레벨 요소 중 이전 한개 요소 선택
$(".wrap2 h2").prev().css(style5);

// prevAll : 선택된 요소와 같은 레벨 요소 중 이전의 모든 요소 선택
$(".wrap2 h2").prevAll().css("background-color", "moccasin");

// prevUntil(['선택자']) : 선택된 요소와 같은 레벨 요소 중 이전의 모든 요소를 선택하거나 매개변수가 있으면 같은 레벨의 이전 요소중 매개변수와 일치하는 요소까지 선택
$(".wrap2 h2").prevUntil("p").css("font-size", "2rem");
