const array = [];
var randomNum = 0;

for (i = 1; i <= 49; i++) {
  randomNum = Math.floor(Math.random() * 900) + 100;
  array.push(randomNum);
  console.log(i + ". " + randomNum);
}
