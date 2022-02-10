//rei, rainha, torres, bispos, cavalos, peao

let peca = 'peao';


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
    case 'BISPOS':
        console.log('Move-se na diagonal, quantas casas quiser.');
        break;
    case 'CAVALOS':
            console.log('Move-se em L, 3 casas para a frete ou para trás e uma para lado');
            break;
    case 'PEAO':
            console.log('Na primeira movimentação pode mover 2 ou 1 casa para frente, dps de' +
            ' movimentado pode mover apenas uma vez.');
            break;
   
    default:
           console.log('Digite uma peça valida.');
           break;

}