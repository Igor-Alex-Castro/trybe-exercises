let number = 7;
let outNumber = ""
let numberSpace = (number -1)/2 
let space = ""
let cont
for(let linha = 1; linha <= number; linha += 2){
    
        outNumber = ""
    

        for(let j = numberSpace; j >= 1; j -= 1){
            outNumber += " "
        }
        
        numberSpace -= 1

       
        
        for(let k = linha; k >= 1 ; k -= 1){
            
            outNumber += "*"
            
        }

        console.log(outNumber)
        
    
    
 }

  
            

