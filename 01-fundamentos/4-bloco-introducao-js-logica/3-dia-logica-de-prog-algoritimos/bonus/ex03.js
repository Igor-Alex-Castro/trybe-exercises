let number = 7;
let outNumber = ""



 

    for(let i = 1; i <= number; i += 1){
        outNumber = ""
    
        

        
        
            for(let j = number; j >= i; j -=1){
                outNumber += " "  
             }
        
            for(let k = 1; k <= i; k +=1){
           
                outNumber += "*" 
           }
             
        

       
        console.log(outNumber)
    }

  
