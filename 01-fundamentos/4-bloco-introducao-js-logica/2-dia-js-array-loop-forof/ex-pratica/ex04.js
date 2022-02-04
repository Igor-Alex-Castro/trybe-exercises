/*
Com o mesmo código do exercício anterior, c
aso o valor final seja maior que 20, imprima a mensagem: 
"valor maior que 20". Caso não seja, imprima a mensagem: 
"valor menor ou igual a 20";
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
if(media > 20){
    console.log('valor maior que 20')
}else{
    console.log('menor que 20')
}