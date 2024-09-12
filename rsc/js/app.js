const cellElements = document.querySelectorAll('.cell');
const boardElement = document.querySelector('.board');
// Para essa função funcionar direitinho temos que cumprir alguns passos..
// para colocar a marca vamos precisar de uma variavel que diga se é a vez do elemento.
let isCircleTurn;


const combinationForWin = [
// Primeiro quadro possivel de combinações de vitória
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
// Segundo quadro possivel de combinações de vitória
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
// Terceiro quadro possivel de combinações de vitória
    [0, 4, 8],
    [2, 4, 6]
]

const startGames = () => {
    // Vamos add em cada celula um evento e click atraveis do FOR OFF
    for(const cell of cellElements){
        cell.addEventListener('click', hendowClick, {once: true}); //Aqui o once:true serve pra dizer que a função so vai acontecer uma vez
    }

    // Para que oo jogo ja inicie coom o X jogando temos que setar a classe x

    isCircleTurn = false;
    boardElement.classList.add('x');
}


// 1° colocar o simbolo se vai ser X ou Circulo
const  putSymbol = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
}

// 2° Checak por vitória, ver quem venceu dos dois
const checkForWin = (playerAtual) => {
    return combinationForWin.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(playerAtual);
        })
    })
}

// 4° Mudar o simbolo se vai ser X ou Circulo
const swapTurn = () => {
    isCircleTurn = !isCircleTurn;
    
    boardElement.classList.remove('x');
    boardElement.classList.remove('circle');


    if(isCircleTurn){
        boardElement.classList.add('circle');
    }else{
        boardElement.classList.add('x');
    }
}

const hendowClick = (e) => {
    // 1° colocar o simbolo se vai ser X ou Circulo
    const cell = e.target;
    const classToAdd = isCircleTurn ? 'circle' : 'x';
    putSymbol(cell, classToAdd);

    // 2° Checak por vitória, ver quem venceu dos dois
    const win = checkForWin(classToAdd);
    if(win){
        console.log("win!!");
    }
    // 3° Verificar por empate
    
    // 4° Mudar o simbolo se vai ser X ou Circulo
    swapTurn(); // Servirar para alterar o simbolo..
}




const btn = document.querySelector("#btn");
const mensage = document.querySelector(".winning-message");
btn.addEventListener('click', () => {
    mensage.style.display="none";
})


startGames();