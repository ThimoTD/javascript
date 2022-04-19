count = 0;
countColor = 0;

document.addEventListener("click", function (event) {
  if (event.target.id == "button-1" && count <= 48) {
    count++;
    countColor++;
    var div = document.createElement("div");
    div.style.width = "11vw";
    div.style.height = "100px";
    div.innerHTML = count;

    if (countColor == 1) {
      div.style.background = "blue";
    }
    if (countColor == 2) {
      div.style.background = "green";
    }
    if (countColor == 3) {
      div.style.background = "yellow";
    }
    if (countColor == 4) {
      div.style.background = "purple";
    }
    if (countColor == 5) {
      div.style.background = "red";
      countColor = 0;
    }

    document.getElementsByClassName("container")[0].appendChild(div);
  }
});
