/*
    A LÓGICA DESSE JOGO NO JAVASCRIPT É EM 5 PARTES.

    1° CRIAR UMA FUNÇÃO PARA START DO JOGO.
    2° CRIAR A MARCA SE VAI SER (X) OU (CIRCULO).
    3° MUDAR O SIMBOLO A HORA DO (X) E DO (CIRCULO).
    4° CHECAR POR VITÓRIA
    5° CHECAR PO EMPATE.

    PRONTO A LÓGICA DESSE JOGO É ESSA.

*/



const cellElements = document.querySelectorAll("[data-cell]");
// const board = document.querySelector("[data-board]");
// const msg = document.querySelector('[data-msg]');
// const mensage = document.querySelector('data-mensage]');

let isCircleTurm;

// FUNCÃO PARA STARTAR O GAME
// const startGame = () => {

//     // PARA QUE O (X) COMERCE O JOGO, TEMOS QUE COLOCAR O (CIRCULO) COMO 
//     // FALSO OU DEIXAR ELE FALSO DESDE DA CRIAÇÃO DA  VARIÁVEL E CETAR O (X)
//     // COMO PRINCIPAL.

// }

//CRIANDO A MARCA SE VAI SER (X) OU (CIRCLE)
// const placeMark = (cell, classToAdd) => {
    
// }

// CHECAR POR VITÓRIA
// const combinacao = [
//     // PRIMEIRA SEGUNDA E TERCEIRA LINHA
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],

//     // PRIMEIRA SEGUNDA E TERCEIRA COLUNA
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],

//     //DIAGONAIS
//     [0, 4, 8],
//     [2, 4, 6],

// ];

//CHECAR POR VITÓRIA
// JOGADOR ATUAL corrent player
// const jogadorAtual = (currentPlayer) => {
    
        // ELE VAI CHECAR SE ALGUMA DAS COMBINAÇÕES FORAM PREENCHIDAS PELO JOGADOR ATUAL

// };
//MUDAR O SIMBULO DA BOARD swapTurn
// const mudaSimbulo = () => {


    // UMA CONDIÇÃO PARA SABER SE É A HORA DO CIRCULO
    
    
// }

// FIM DO JOGO E VERIFICAR POR EMPATE

const handleClick = (e) => {
    //1° Criar a marca se é (x) ou (circulo)
    const cell = e.target;
    const classToAdd = isCircleTurm ? 'circle' : 'x';

    cell.classList.add(classToAdd);

    //2° Checar por vitória
    
    //3° Verificar por empate

    //4° Mudar o SIMBULO (x) ou (circle)
};

for (const cell of cellElements) {
    cell.addEventListener("Click", handleClick, {once: true});
};



// startGame();



