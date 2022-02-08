/*
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white'
}

console.log(car.type)
console.log(car.model)
console.log(car.color)

let diasSemanas = {
    1: 'Domingo',
    2: 'Segunda',
    3: 'Terça',
    4: 'Quarta',
    5: 'Quinta',
    6: 'Sexta',
    7: 'Sabado'
};

console.log(diasSemanas[1])
*/
/*
let conta = {
    agencia: '0000',
    banco: {
        cod: '012',
        id: 4,
        nome: 'TrybeBank'
    },
};


let infoBanco = 'banco';
console.log(conta[infoBanco]);

console.log(conta[infoBanco]['nome']);

console.log(conta['agencia']);
console.log(conta['banco']['id']);
*/
/*
let usuario = {
    id: 99,
    email: 'igor@gmai.com',
    infoPessoal: {
        nome: 'igor',
        sobrenome: 'Alex',
        endereco:{
            rua :'Canada',
            bairro: 'Vila Rica',
            cidade: 'Lorena',
            estado: 'São paulo'
        }
    }
}

console.log(usuario['id'])
console.log(usuario['email'])
console.log(usuario['infoPessoal']['endereco']['rua'])
console.log(usuario['infoPessoal']['endereco']['cidade'])
*/

let moradores = [
    {
        nome: 'Luiza',
        sobremone: 'Guimarães',
        andar: 10,
        aparamento: 1005,
    },
    {
        nome: 'Willian',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
    },
    {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,   
    },
    {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,  
    }
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador)
console.log(primeiroMorador['andar'])

let ultimoMorador = moradores[moradores.length -1]
console.log(ultimoMorador)
console.log(ultimoMorador['nome'])