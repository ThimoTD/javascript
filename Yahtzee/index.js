let die1 = document.getElementById("dice1");
let die2 = document.getElementById("dice2");
var die3 = document.getElementById("dice3");
var die4 = document.getElementById("dice4");
var die5 = document.getElementById("dice5");
var isRolling = false;
let sum2 = 0;
let sum1 = 0;

var getallen = [0, 0, 0, 0, 0];
var vasthouden = [0, 0, 0, 0, 0];
var elementen = [die1, die2, die3, die4, die5];
var streets = [0, 0, 0, 0, 0, 0];
const scoresUpper = new Array(6).fill(0);
const upperTotalElement = document.getElementById("totalp1");
const upperBonusElement = document.getElementById("bonus");
const upperTotalBonusElement = document.getElementById("totalp1bonus");
const TotalP1Element = document.getElementById("lowertotalp1");
const TotalP2Element = document.getElementById("lowertotalp2");
const totalScore = document.getElementById("totaal");

document.getElementById("1").addEventListener("click", Countnumbers);
document.getElementById("2").addEventListener("click", Countnumbers);
document.getElementById("3").addEventListener("click", Countnumbers);
document.getElementById("4").addEventListener("click", Countnumbers);
document.getElementById("5").addEventListener("click", Countnumbers);
document.getElementById("6").addEventListener("click", Countnumbers);
document.getElementById("yathzee").addEventListener("click", Countyathzee);
document.getElementById("fullHouse").addEventListener("click", CountFullHouse);

document
  .getElementById("smallStreet")
  .addEventListener("click", CountSmallStreet);
document
  .getElementById("largeStreet")
  .addEventListener("click", CountlargeStreet);
document
  .getElementById("ThreeofaKind")
  .addEventListener("click", CountThreeOfaKind);
document
  .getElementById("fourofaKind")
  .addEventListener("click", CountFourOfaKind);

document.getElementById("Chance").addEventListener("click", chance);

//rollen van dobbel
function roll() {
  if (count == 3) return;
  clicks();
  for (var i = 0; i < getallen.length; i++) {
    if (vasthouden[i] == 0) {
      getallen[i] = Math.floor(Math.random() * 6) + 1;
    }
    elementen[i].innerHTML = getallen[i];
  }
  vasthouden = [0, 0, 0, 0, 0];
  if (count == 3) {
    //stoppen
    //count = 0;
  }
}

var count = 0;

function clicks() {
  count++;
  let button = document.getElementById("btn");
  let display = document.getElementById("displayCount");
  display.innerHTML = count;
}

function displaydice1() {
  document.getElementById("dice1").innerHTML = "Hold";
  vasthouden[0] = 1;
}
function displaydice2() {
  document.getElementById("dice2").innerHTML = "Hold";
  vasthouden[1] = 1;
}
function displaydice3() {
  document.getElementById("dice3").innerHTML = "Hold";
  vasthouden[2] = 1;
}
function displaydice4() {
  document.getElementById("dice4").innerHTML = "Hold";
  vasthouden[3] = 1;
}
function displaydice5() {
  document.getElementById("dice5").innerHTML = "Hold";
  vasthouden[4] = 1;
}
function displaydice6() {
  document.getElementById("dice5").innerHTML = "Hold";
  vasthouden[5] = 1;
}

//check nummer 1 tm 6
function Countnumbers() {
  let number = parseInt(this.id);
  var count = 0;
  for (var i = 0; i < getallen.length; i++) {
    if (getallen[i] === number) {
      count += 1;
    }
  }
  var punten = count * number;
  this.innerHTML = punten;

  scoresUpper[this.id - 1] = punten;
  upperTotalElement.innerHTML = getUpperScore();
  counttotalp1bonus();
  totaltop();
  totaal();
}

function getUpperScore() {
  let sum = 0;
  for (let i = 0; i < scoresUpper.length; i++) sum += scoresUpper[i];
  return sum;
}

function counttotalp1bonus() {
  if (parseInt(upperTotalElement.innerHTML) >= 63) {
    upperBonusElement.innerHTML = 35;
  }
}

function totaltop() {
  let bonus = upperBonusElement.innerHTML ? +upperBonusElement.innerHTML : 0;
  if (bonus) {
    bonus = bonus;
  } else {
    bonus = 0;
  }
  // upperTotalBonusElement.innerHTML =
  //   parseInt(upperTotalElement.innerHTML) + bonus;
  console.log(bonus);
  upperTotalBonusElement.innerHTML =
    bonus + parseInt(upperTotalElement.innerHTML);
  TotalP1Element.innerHTML = bonus + parseInt(upperTotalElement.innerHTML);
}

//check yathzee
function Countyathzee() {
  if (getallen.every((number) => getallen[0] == number)) {
    this.innerHTML = 50;
  } else {
    this.innerHTML = 0;
  }
  counttotalp2();
}

function CountThreeOfaKind() {
  let threeFound = false;
  for (var i = 1; i <= 6; i++) {
    let amountsame = 0;
    for (var j = 0; j < 5; j++) {
      if (i == getallen[j]) {
        amountsame++;
      }
    }
    if (amountsame >= 3) {
      threeFound = true;
    }
  }
  if (threeFound == true) {
    this.innerHTML = Counttotalp1(getallen);
  } else {
    this.innerHTML = 0;
  }
  counttotalp2();
  document
    .getElementById("ThreeofaKind")
    .removeEventListener("click", CountThreeOfaKind);
}

function Counttotalp1(getallen) {
  let sum = 0;
  for (let i = 0; i < getallen.length; i++) sum += getallen[i];
  return sum;
}

function CountFourOfaKind() {
  let fourFound = false;
  for (var i = 1; i <= 6; i++) {
    let amountsame = 0;
    for (var j = 0; j < 5; j++) {
      if (i == getallen[j]) {
        amountsame++;
      }
    }
    if (amountsame >= 4) {
      fourFound = true;
    }
  }
  if (fourFound == true) {
    this.innerHTML = Counttotalp1(getallen);
  } else {
    this.innerHTML = 0;
  }
  counttotalp2();
  document
    .getElementById("fourofaKind")
    .removeEventListener("click", CountFourOfaKind);
}

function CountFullHouse() {
  let threeFound = false;
  for (var i = 1; i <= 6; i++) {
    let amountsame = 0;
    for (var j = 0; j < 5; j++) {
      if (i == getallen[j]) {
        amountsame++;
      }
    }
    if (amountsame == 3) {
      threeFound = true;
    }
  }

  let twoFound = false;
  //check nummers
  for (var i = 1; i <= 6; i++) {
    //check dobbelstenen
    let amountsame = 0;
    for (var j = 0; j < 5; j++) {
      if (i == getallen[j]) {
        amountsame++;
      }
    }
    if (amountsame == 2) {
      twoFound = true;
    }
  }

  if (twoFound && threeFound) {
    this.innerHTML = 25;
  } else {
    this.innerHTML = 0;
  }
  counttotalp2();
  document
    .getElementById("fullHouse")
    .removeEventListener("click", CountFullHouse);
}

function CountSmallStreet() {
  let selection = [6];

  for (var i = 0; i < 5; i++) {
    let waarde = getallen[i];
    selection[waarde - 1] = 1;
  }

  let street = false;
  let ammountonebehind = 0;
  for (i = 0; i < 6; i++) {
    if (selection[i] == 1) {
      ammountonebehind++;
    } else {
      ammountonebehind = 0;
    }
    if (ammountonebehind >= 4) {
      street = true;
    }
  }
  if (street == true) {
    this.innerHTML = 30;
  } else {
    this.innerHTML = 0;
  }
  counttotalp2();
  document
    .getElementById("smallStreet")
    .removeEventListener("click", CountSmallStreet);
}

function CountlargeStreet() {
  let selection = [6];

  for (var i = 0; i < 5; i++) {
    let waarde = getallen[i];
    selection[waarde - 1] = 1;
  }

  let street = false;
  let ammountonebehind = 0;
  for (i = 0; i < 6; i++) {
    if (selection[i] == 1) {
      ammountonebehind++;
    } else {
      ammountonebehind = 0;
    }
    if (ammountonebehind >= 5) {
      street = true;
    }
  }
  if (street == true) {
    this.innerHTML = 40;
  } else {
    this.innerHTML = 0;
  }
  counttotalp2();
  document
    .getElementById("largeStreet")
    .removeEventListener("click", CountlargeStreet);
}

function chance() {
  let sum = 0;
  for (let i = 0; i < getallen.length; i++) {
    sum += getallen[i];
    this.innerHTML = sum;
  }

  return sum;
  counttotalp2();
  document.getElementById("Chance").removeEventListener("click", chance);
}

function counttotalp2() {
  let ThreeofaKind = parseInt(
    document.getElementById("ThreeofaKind").innerHTML
  );
  let fourofaKind = parseInt(document.getElementById("fourofaKind").innerHTML);
  let fullHouse = parseInt(document.getElementById("fullHouse").innerHTML);
  let smallStreet = parseInt(document.getElementById("smallStreet").innerHTML);
  let largeStreet = parseInt(document.getElementById("largeStreet").innerHTML);
  let yathzee = parseInt(document.getElementById("yathzee").innerHTML);
  let Chance = parseInt(document.getElementById("Chance").innerHTML);

  sum2 =
    +ThreeofaKind +
    +fourofaKind +
    +fullHouse +
    +smallStreet +
    +largeStreet +
    +yathzee +
    +Chance;
  //console.log(typeof temp, temp, ThreeofaKind.innerHTML);
  //TotalP2Element.innerHTML = temp;
  TotalP2Element.innerHTML = +sum2;
  // console.log(sum2);
  totaal();
}

function totaal() {
  const sum1 = parseInt(upperTotalBonusElement.innerHTML)
    ? parseInt(upperTotalBonusElement.innerHTML)
    : 0;

  totalScore.innerHTML = sum1 + sum2;
  count = 0;
}
