/*
Para o terceiro exercício,
calcule e imprima a média 
aritmética dos valores contidos no array;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let totNunbers = numbers.length;
let media = 0;
for(let n of numbers){
    soma += n;
}

media = soma/totNunbers
console.log(`Media: ${media}` )