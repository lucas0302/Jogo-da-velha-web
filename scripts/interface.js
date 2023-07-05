document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})
function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O jogo acabou e o jogador " + playerTime + " foi o vencedor");
        }, 10);

    };
    updateSquare(position);
}
function updateSquare(position){
    let square = document.getElementById(position.toString());
    let Symbols = board[position];
    square.innerHTML = `<div class= '${Symbols}'></div>`
}


