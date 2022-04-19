count = 0;
countColor = 0;
const array = [];
var randomNum = 0;

for (i = 1; i <= 49; i++) {
  randomNum = Math.floor(Math.random() * 900) + 100;
  array.push(randomNum);
}

document.addEventListener("click", function (event) {
  if (event.target.id == "button-1" && count <= 48) {
    for (i = 0; i <= 48; i++) {
      count++;
      countColor++;
      var div = document.createElement("div");
      div.style.width = "11vw";
      div.style.height = "100px";
      div.innerHTML = array[i];
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
  }
});
