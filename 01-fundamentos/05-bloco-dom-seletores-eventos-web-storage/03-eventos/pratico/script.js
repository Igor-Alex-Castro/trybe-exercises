const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let divUl = document.querySelector(".container");

let divLi0 = divUl.children[0];
let divLi1 = divUl.children[1];
let divLi2 = divUl.children[2];
 
divLi0.addEventListener("click", function(){
  divLi0.className = "tech"
  divLi1.className = ""
  divLi2.className = ""

})


divLi1.addEventListener("click", function(){
  divLi1.className = "tech"
  divLi0.className = ""
  divLi2.className = ""
})


divLi2.addEventListener("click", function(){
  divLi2.className = "tech"
  divLi1.className = ""
  divLi0.className = ""
});

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

let inputText = document.querySelector("#input")

    inputText.addEventListener("change", function(){
      let divLi = document.querySelector(".tech");
      divLi.innerHTML = inputText.value;
    });
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
let idTop3 = document.querySelector("#my-spotrybefy")
let click = 0
idTop3.addEventListener("click",contaClick)

function contaClick(){
  click += 1
  console.log(click)
  if(click === 3){
    window.location.href = "https://igor-alex-castro.github.io/"
  
    click = 0
  }
 
}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

  idTop3.addEventListener("mouseover", function(){
    idTop3.style.color = "red"
  })

  idTop3.addEventListener("mouseout", function(){
    idTop3.style.color = "white"
  })



// Segue abaixo um exemplo do uso de event.target:
//let li = document.querySelector("#second-li")



    //let divLi = divUl.children[number];
    //divLi.addEventListener("click", function(){
       // divLi.className = "tech"
       // console.log("foi")
    //});




//function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  //event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
////}

//firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.q