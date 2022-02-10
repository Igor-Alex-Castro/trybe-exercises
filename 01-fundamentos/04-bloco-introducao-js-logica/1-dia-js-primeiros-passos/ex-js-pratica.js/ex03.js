let number1 = 3;
let number2 = 3;
let number3 = 3;
let maior = 0;
let messege;

if(number1 > number2 && number1 > number3){
    maior = number1
    messege = "Numero 1 é o maior"
}
else if(number2 > number1 && number2 > number3){
    maior = number2
    messege = "Numero 2 é o maior"
}
else if (number3 > number2 && number3 > number1){
    messege = "Numero 3 é o maior"
    maior = number3
}
else{
    messege = "Os numero são iguais"
}
console.log(messege)