let number = 7;
let outNumber = ""
let numberSpace = 0
numberSpace = (number -1)/2
if(number%2 !== 0){
    

    for(let i = 1 ; i <= number; i += 1){
        outNumber = ""
        for(let j = number; j >= 1; j -=1){
            
            if(i%2 !== 0){
              
                outNumber += "*"
            }
        }
       
       
    
        console.log(outNumber)
    }
}else{
    for(let i = 1; i <= number; i += 1){
        outNumber = ""
    
        

        //for(let j = number; j > i; j -=1){
        //  outNumber += " "  
    // }
        for(let k = 1; k <= i; k +=1){
            if(i === 1){
                console.log('*')
            }
            
            if(i%2 === 0){
                outNumber += "*"
            }
        }

    
        console.log(outNumber)
    }
}