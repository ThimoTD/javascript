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
      div.className = "container__item";
      document.getElementsByClassName("container")[0].appendChild(div);
    }
    var containerItems = document.getElementsByClassName("container__item");
    console.log(containerItems);
  }
});
