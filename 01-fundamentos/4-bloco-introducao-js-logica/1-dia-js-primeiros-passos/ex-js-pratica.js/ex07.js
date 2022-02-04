/*
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
*/
let porcenNota = -1;
let alfabetoNota = "";
if(porcenNota <= 100 && porcenNota >= 90){
    alfabetoNota = 'A'
}
else if (porcenNota < 90 && porcenNota >= 80){
    alfabetoNota = 'B'
}
else if (porcenNota < 80 && porcenNota >= 70){
    alfabetoNota = 'C'
}
else if (porcenNota < 70 && porcenNota >= 60){
    alfabetoNota = 'D'
}
else if (porcenNota < 60 && porcenNota >= 50){
    alfabetoNota = 'E'
}
else if(porcenNota < 50 && porcenNota >=0){
    alfabetoNota = 'F'
}else {
    console.log("Nota invalida, digite um valor entre 0 e 100")
}
console.log(alfabetoNota)