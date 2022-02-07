let number = 7;
let outNumber = ""
let numberSpace = 0
numberSpace = (number -1)/2 

    
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

    /*
        3 variaveis principais:
            number é o numero de entrada
            outNumber é a string de saida * mais espaços
            numberSpace é o numero de espeço
                A conta é (number-1) divido por 2. Como o numero é impar tem que tirar uma
                unidade pra n dar numero quebrado.
        
        tem um for para que é a linha, dentro do for verifico se o numedo de linha é impar
        para imprimir apenas as linhas impares

        Outro for dendo da linha tem, tem um for que representa as colunas(numeros de * na linha)
        que vai de 1 até o valor da linha(se a linha for 3, vai imprimir 3 "*")

        Mas tem um for antes que representa os espaços,vai do numberSpace até 1 decrementando 1.
        dentro do for imprimo na strinf outNumber o espaço. Ao sair do for tiro uma unidade do
        numberSpace até chegar em 0
        
    */
            

