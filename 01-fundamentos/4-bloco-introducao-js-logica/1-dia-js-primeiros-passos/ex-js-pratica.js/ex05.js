let anguloA = 20;
let anguloB = -20;
let anguloC = 130;
let messege;
let isTriangulo;
if(anguloA + anguloB + anguloC == 180){
    isTriangulo = true;
    console.log(isTriangulo)
}
else if(anguloA < 0 || anguloB < 0  || anguloC < 0 ){
   console.log("Triangulo invalido um dos angulos é negativo");
}else{
    isTriangulo = false;
    console.log(isTriangulo)
}
