const myName = "Igor";
const birthCity = "Lorena-sp";
let birthYear = "28/08/2019";

console.log(myName + " " + birthCity + " " + birthYear);

birthYear = "28/08/2030";

console.log(myName + " " + birthCity + " " + birthYear);

birthCity = "Guara";
console.log(myName + " " + birthCity + " " + birthYear);

//TypeError: Assignment to constant variable.
//birthCity é uma constante, constantes não podem ter ser valor alterado.
