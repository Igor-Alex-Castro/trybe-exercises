let numbers = []
for(let index = 0; index < 25; index += 1){
   
    numbers.push( Math.floor(Math.random() * 26))
 }
 for (let n of numbers){
     console.log(n/2)
 }