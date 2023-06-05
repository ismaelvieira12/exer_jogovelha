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
const board = document.querySelector("[data-board]");   
// const msg = document.querySelector('[data-msg]');
// const mensage = document.querySelector('data-mensage]');

let isCircleTurm;

// FUNCÃO PARA STARTAR O GAME
const startGame = () => {

    // PARA QUE O (X) COMERCE O JOGO, TEMOS QUE COLOCAR O (CIRCULO) COMO 
    // FALSO OU DEIXAR ELE FALSO DESDE DA CRIAÇÃO DA  VARIÁVEL E CETAR O (X)
    // COMO PRINCIPAL.

    for (const cell of cellElements) {
        cell.addEventListener('click', handleClick, {once: true});
    };    
    isCircleTurm = false;

    board.classList.add('x');
};

//CRIANDO A MARCA SE VAI SER (X) OU (CIRCLE)
const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
}

// CHECAR POR VITÓRIA
const combinacao = [
    // PRIMEIRA SEGUNDA E TERCEIRA LINHA
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // PRIMEIRA SEGUNDA E TERCEIRA COLUNA
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //DIAGONAIS
    [0, 4, 8],
    [2, 4, 6],

];

//CHECAR POR VITÓRIA
// JOGADOR ATUAL corrent player
const checkForwin = (currentPlayer) => {
    
        // ELE VAI CHECAR SE ALGUMA DAS COMBINAÇÕES FORAM PREENCHIDAS PELO JOGADOR ATUAL

};
//MUDAR O SIMBULO DA BOARD swapTurn
const swapTurn = () => {
    isCircleTurm = !isCircleTurm;

    board.classList.remove('circle');
    board.classList.remove('x');

    // UMA CONDIÇÃO PARA SABER SE É A HORA DO CIRCULO
    if (isCircleTurm) {
        board.classList.add('circle');
    } else{
        board.classList.add('x');
    }
}

// FIM DO JOGO E VERIFICAR POR EMPATE

const handleClick = (e) => {
    //1° Criar a marca se é (x) ou (circulo)
    const cell = e.target;
    const classToAdd = isCircleTurm ? 'circle' : 'x';

    placeMark(cell, classToAdd);
    
    //2° Mudar o SIMBULO (x) ou (circle)
    swapTurn();

    //3° Checar por vitória
    
    //4° Verificar por empate

};




startGame();



