//Escreva um programa que defina três números em constantes e retorne true 
//se pelo menos uma das três for par. Caso contrário, ele retorna false .

const numberA = 2;
const numberB = 2;
const numberC = 2;
let messege;
if((numberA%2 == 0) || (numberB%2 == 0) || (numberC%2 == 0)){
        messege = true
}else{
        messege = false
}
console.log(messege)