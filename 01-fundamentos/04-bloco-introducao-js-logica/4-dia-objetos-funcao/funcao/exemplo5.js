function maiorNum(a, b){
    if(a >b){
        return a + " é maior que " + b; 
    }
    else if(b < a){
        return a + " é maior que " + b;
    }else{
        return "Os numeros são iguais"
    }
}
console.log(maiorNum(10, 20))
console.log(maiorNum(2, -5))
console.log(maiorNum(1, 1))