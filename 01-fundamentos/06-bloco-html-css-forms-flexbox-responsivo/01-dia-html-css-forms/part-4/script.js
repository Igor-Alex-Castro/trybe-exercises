
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");



HREF_LINK.addEventListener("click", resetPropriedade);
INPUT_CHECKBOX.addEventListener("click", resetPropriedade )
INPUT_TEXT.addEventListener("keypress", keyA)

function resetPropriedade(e){
    //HREF_LINK.preventDefault()
    e.preventDefault()
    console.log("func")
}

function keyA(e){
    e.preventDefault()

    if(e.key === 'a'){
        console.log("foi")
        e.target.value +=  e.key
    }
}

let quadrado = document.querySelector("#quadrado")
quadrado.style.marginTop = '0px'
quadrado.style.marginLeft = '0px' ;
let body = document.querySelector("body")
body.addEventListener("keydown", moveQuadrado)
let marginTop = 0
let  marginLados = 0
function moveQuadrado(e){
    
    console.log(e.key)
    if(e.key === 'ArrowUp'){
        marginTop = Number.parseInt(quadrado.style.marginTop) + 5
     
       quadrado.style.marginTop =  marginTop + "px"

       console.log(marginTop)
    }

    if(e.key === 'ArrowDown'){
        marginTop = Number.parseInt(quadrado.style.marginTop) - 5
     
        quadrado.style.marginTop =  marginTop + "px"
 
        console.log(marginTop)
    }
    
    if(e.key === 'ArrowRight'){
        marginLados = Number.parseInt(quadrado.style.marginLeft) + 5
     
        quadrado.style.marginLeft =  marginLados + "px"
 
        console.log(marginLados)
    }

    if(e.key === 'ArrowLeft'){
        marginLados = Number.parseInt(quadrado.style.marginLeft) - 5
     
        quadrado.style.marginLeft =  marginLados + "px"
 
        console.log(marginLados)
    }

    colisao()
}

let quadradoInimigo = document.querySelector("#quadrado-inimigo")
quadradoInimigo.style.marginLeft = '200px'
console.log(quadradoInimigo)
quadrado.style.width = '50px'
let aumenta
function colisao(){
    
    let qleft =  parseInt(quadrado.style.marginLeft)
    let qILeft = parseInt(quadradoInimigo.style.marginLeft)
    if(qleft  === qILeft - 50){
        console.log("colidiu")
        aumenta = Number.parseInt(quadrado.style.width) + 50
        quadrado.style.width =  aumenta + 'px'
     }
}