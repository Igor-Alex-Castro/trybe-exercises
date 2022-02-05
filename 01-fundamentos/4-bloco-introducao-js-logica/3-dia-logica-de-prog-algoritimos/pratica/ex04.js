//Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
//Sabendo disso, escreva um algoritmo que retorne o maior número primo 
//entre 0 e 50.

let number  = 17
let contDiv = 0
let bigger = 0
for(let i = 1; i <= 50; i += 1){
   
    //if(number%i === 0){
     //   contDiv += 1
    //}
    contDiv = 0
    for(let j = 1; j <= i; j +=1   ){
        if(i%j === 0){
            contDiv += 1
         }     
    }

    if(i === 1){

        if(contDiv === 1){
             
            if(i >= bigger){
                bigger = i
            }
         }

    }else{
        if(contDiv === 2){
             
            if(i >= bigger){
                bigger = i
            }
         }
    
    }

    

    
}

console.log(bigger)
