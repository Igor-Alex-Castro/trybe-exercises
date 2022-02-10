/*
Escreva dois algoritmos: um que retorne a maior
palavra deste array e outro que retorne a menor.
Considere o número de caracteres de cada palavra
*/
let array = ['java', 'javascript', 'python', 'html', 'css'];
let cont = 0
let contLarge = 0;
let contSmaller = 0;
let wordBig =  "";
let wordSmall  = ""
for(let i = 0; i < array.length; i += 1){
         //array[i]
         cont = 0
    
    //conta caracter das palavras     
    for(let j = 0; j <  array[i].length; j += 1 ){
        
         cont += 1
        
    }
    //inicia contSmaller com o numero de carcter da primeira palavra iterada
    if(i === 0){
        contSmaller = cont
    }

    //verifica qual é o maior
    if(cont >= contLarge){
        contLarge = cont
        wordBig = array[i]
    }

    //verifica qual é menor
    if(cont <= contSmaller){
        contSmaller = cont
        wordSmall = array[i]
    }

}

console.log("Maior: " + wordBig)
console.log("Menor: " + wordSmall)