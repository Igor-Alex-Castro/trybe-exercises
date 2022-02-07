let number = 7;
let outNumber = ""
let numberSpace = 0
numberSpace = (number -1)/2
if(number%2 !== 0){
    
       for(let linha = 1; linha <= number; linha += 1){
           outNumber = ""
           if(linha%2 !== 0){

            for(let j = numberSpace; j >= 1; j -= 1){
                outNumber += " "
            }
                numberSpace -= 1

                for(let k = 1; k <= linha; k += 1 ){
                    outNumber += "*"
                }
           }
           console.log(outNumber)
       }

       

}else{
    numberSpace = number /2
    for(let i = 1; i <= number; i += 1){
        outNumber = ""
        
        
        if(i%2 === 0){
             for(let j =  numberSpace; j >= 1; j -=1){
                outNumber += " "  
             }
             numberSpace -= 1

            for(let k = 1; k <= i; k +=1){
            
            
            
            
                outNumber += "*"
            }

        }

    
        console.log(outNumber)
    }
}