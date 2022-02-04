//rei, rainha, torres, bispos, cavalos, peao

let peca = 'Rainha';


switch(peca.toUpperCase()){
    case 'REI':
        console.log('Move de 1 em 1 para todas as direções');
        break;
    case 'RAINHA': 
        console.log('Frente e para trás, quantas casas quiser.');
        break;
    case 'TORRES':
        console.log('Frente, para trás, para o lado esquerdo e direito, quantas casas quiser.');
        break;
    case 'Bispos':
        console.log('Move-se na diagonal, quantas casas quiser.');
        break;
    default:
        console.log('Digite uma peça valida.');
        break;

}