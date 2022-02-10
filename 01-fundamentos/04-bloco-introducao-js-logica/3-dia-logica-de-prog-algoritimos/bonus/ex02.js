let number = 7;
let outNumber = ""
for(let i = 1; i <= number; i += 1){
    outNumber = ""
    for(let j = 1; j <= i; j+=1){
       outNumber += "*"
    }
    console.log(outNumber)
}