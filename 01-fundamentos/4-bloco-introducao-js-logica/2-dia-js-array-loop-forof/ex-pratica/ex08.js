//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = []
for(let index = 0; index < 25; index += 1){
   
   numbers.push( Math.floor(Math.random() * 26))
}
for (let n of numbers){
    console.log(n)
}