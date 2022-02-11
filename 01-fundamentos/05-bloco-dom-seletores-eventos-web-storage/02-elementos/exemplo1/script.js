
let elementoPai = document.querySelector("#pai")

let elementoIrmao = document.createElement("section")

elementoIrmao.className = 'FilhoDoPai'

elementoPai.appendChild(elementoIrmao)
/*-------------------------------------------------*/

let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta")

let elementoFilho = document.createElement("section")

elementoFilho.className = "filhoOndeVoceEsta"
elementoFilho.textContent = "Este elemento é filho do elemtnoOndeVocêEsta"
elementoOndeVoceEsta.appendChild(elementoFilho)
/*-------------------------------------------------------*/
let elementoFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')

let elementoFilhoDoPrimeiroFilho = document.createElement("section")
elementoFilhoDoPrimeiroFilho.className = "elementoFilhoDoPrimeiroFilho"
elementoFilhoDoFilho.appendChild(elementoFilhoDoPrimeiroFilho)

let terceiroFilho = document.querySelector(".elementoFilhoDoPrimeiroFilho").parentElement.parentElement.nextElementSibling


/*-----------------------*/

let primeiroFilho = document.querySelector("#primeiroFilho");
primeiroFilho.remove();

let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho")
primeiroFilhoDoFilho.remove();

let terceiroFilho2 = document.querySelector("#terceiroFilho")
    terceiroFilho2.remove();

let quartoEUltimoFilho = document.querySelector("#quartoEUltimoFilho")
quartoEUltimoFilho.remove();
