let yearBorn = 2004;
let year = new Date().getFullYear();
let ageYears = 0;
let ageDays = 0;

function age() {
  ageYears = year - yearBorn;
  ageDays = ageYears * 365;
  return console.log(ageYears + " years old and " + ageDays + " days old");
}

console.log(age());
