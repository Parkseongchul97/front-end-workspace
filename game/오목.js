let btn = "";
let blackAndWhite = false;
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    btn += `<button class="btn" onclick="submit( ${i},${j})" id="btn-${i}-${j}"></button>`;
  }
}
$("#box-1").html(btn);

function submit(i, j) {
  const coordinate = "#btn-" + i + "-" + j;
  console.log(coordinate);

  if (blackAndWhite) {
    $(coordinate).css({
      backgroundColor: "white",
      borderRadius: "50%",
      border: "1px solid",
    });
    blackAndWhite = false;
    $("#text").text("흑");
  } else if (!blackAndWhite) {
    $(coordinate).css({ backgroundColor: "black", borderRadius: "50%" });
    blackAndWhite = true;
    $("#text").text("백");
  }
}
