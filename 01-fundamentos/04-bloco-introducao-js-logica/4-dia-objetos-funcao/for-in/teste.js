let listaNumber = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4];
let contRep3 = 0
if(listaNumber.length !== 11){
    console.log("Array com tamanho incorreto")
}else{
    for(let i = 0; i < listaNumber.length; i += 1){

            for(let j = 0; j < listaNumber.length; j += 1){

                if(listaNumber[i] === listaNumber[j]){
                    contRep3 += 1;
                }
                
                if(contRep3 === 3){
                    console.log("não é possível gerar um número de telefone com esses valores")
                }
               
            }
            contRep3 = 0
            if(listaNumber[i] < 0 || listaNumber[i] > 9){
                console.log("não é possível gerar um número de telefone com esses valores")
            }
       
    }

    //(12) 34567-8901
    //(13) 02567-8901
   // (302) 678901-undefinedundefined
   //13025678901
   let number = ""
   for(let i = 0; i < listaNumber.length ; i += 1){
            if(i===0){
                number += "(" + listaNumber[i]
            }
            else if(i===2){
                number += ") " + listaNumber[i]
            }
            else if(i === 7){
                number += "-" + listaNumber[i]
            }else{
               number +=  listaNumber[i]
            }
        
   }
   console.log(number)
}