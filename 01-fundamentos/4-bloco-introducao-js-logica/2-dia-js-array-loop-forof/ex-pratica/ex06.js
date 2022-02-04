/*
Descubra quantos valores ímpares existem no array e 
imprima o resultado. Caso não exista nenhum, 
imprima a mensagem: "nenhum valor ímpar encontrado";

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [0, 0, 0, 0, 70, 8, 100, 2, 0, 0];

let quantImpares = 0;
for(let n of numbers){
    if(n%2 != 0){
        console.log(n)
        quantImpares += 1
    }
}
if( quantImpares > 0){
    console.log(`Quantidade de impares: ${quantImpares}`)
}else{
    console.log(`nenhum valor ímpar encontrado`)
}  