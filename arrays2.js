let favoriteFoods = ["chocolate", "cheese", "sourdough", "strawberries"];
function isArrayLengthOdd(array) {
  if (array.length % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isArrayLengthOdd(favoriteFoods));
function isArrayLengthEven(array) {
  if (array.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayLengthEven(favoriteFoods));
let instructors = ["Aya", "Abdulaziz", "Nouf", "Ali", "Omar"];

function addLailaToArray(array, name) {
  return array.push(name);
}
console.log(addLailaToArray(instructors, "Laila"));
console.log(instructors);

let teams = ["Kuwait", "Bahrain", "Oman", "UAE", "Saudi", "Brazil"];
let eliminatedTeams = teams.pop();
console.log(teams);
console.log(eliminatedTeams);
