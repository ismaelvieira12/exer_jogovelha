const cellElements = document.querySelectorAll('.cell');
const boardElement = document.querySelector('.board');
// Para essa função funcionar direitinho temos que cumprir alguns passos..
// para colocar a marca vamos precisar de uma variavel que diga se é a vez do elemento.
let isCircleTurn = false;

// 1° colocar o simbolo se vai ser X ou Circulo
const  putSymbol = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
}


// 4° Mudar o simbolo se vai ser X ou Circulo
const swapTurn = () => {
    isCircleTurn = !isCircleTurn;
    
    boardElement.classList.remove('.x');
    boardElement.classList.remove('.circle');


    if(isCircleTurn){
        boardElement.classList.add('.circle');
    }else{
        boardElement.classList.add('.x');
    }
}
// const swapTurn = () => {
//     isCircleTurn = !isCircleTurn;

//     boardElement.classList.remove('.circle');
//     boardElement.classList.remove('.x');

//     if(isCircleTurn){
//         boardElement.classList.add('.circle');
//     }else{
//         boardElement.classList.add('.x');
//     }
// }
const hendowClick = (e) => {
    // 1° colocar o simbolo se vai ser X ou Circulo
    const cell = e.target;
    const classToAdd = isCircleTurn ? 'circle' : 'x';
    putSymbol(cell, classToAdd);

    // 2° Checak por vitória, ver quem venceu dos dois
    // 3° Verificar por empate
    
    // 4° Mudar o simbolo se vai ser X ou Circulo
    swapTurn(); // Servirar para alterar o simbolo..
}

// Vamos add em cada celula um evento e click atraveis do FOR OFF
for(const cell of cellElements){
    cell.addEventListener('click', hendowClick, {once: true}); //Aqui o once:true serve pra dizer que a função so vai acontecer uma vez
}




const btn = document.querySelector("#btn");
const mensage = document.querySelector(".winning-message");
btn.addEventListener('click', () => {
    mensage.style.display="none";
})