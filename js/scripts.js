var famaleNames = ['Ada', 'Alicja'];
var maleNames = ['Marcin', 'Jurek'];
var allNames = famaleNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
}

console.log(allNames);