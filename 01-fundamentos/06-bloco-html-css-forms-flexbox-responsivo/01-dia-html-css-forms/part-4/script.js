
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
let body = document.querySelector("body")
body.addEventListener("keydown", moveQuadrado)
let marginTop = 0
function moveQuadrado(e){
    
    if(e.key === 'ArrowUp'){
        marginTop = Number.parseInt(quadrado.style.marginTop) - 5
        let stringMargintTop = Number.toString(marginTop)
       quadrado.style.marginTop =  stringMargintTop + "px"

       console.log(marginTop)
    }
    
}