
let arrayString = ['b cevebja', '1 cap']

let numberDoses = "" 
for(let frase = 0; frase < arrayString.length; frase += 1){
  for(let letras = 0; letras < arrayString[frase].length ; letras += 1){
                  
                  if(letras === 0 && parseInt(arrayString[frase][0]) > 0){
                    numberDoses += arrayString[frase][0]
                  }
  }
  
}
let number2 = 0
for(let c = 0; c < numberDoses.length; c += 1){
             
            number2 += parseInt(numberDoses[c])
}
console.log(number2)
console.log(number2 + " copos de água")