(()=>{
    const stage= document.querySelector(".stage");
    for (let i = 0;i<3 ;i++){
        stage.innerHTML += `<div>
        <div id="${i*3}" class="square"></div>
        <div id="${i*3+1}" class="square">
        </div>
        <div id="${i*3+2}" class="square"></div>
    </div>`
    
    }
})()


document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})
function handleClick(event) {
    let position = event.target.id;
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

function reset(){
    board = ["", "", "", "", "", "", "", "", ""]
    board.forEach((o, i)=>{
        let square = document.getElementById(i.toString());
        square.innerHTML = `<div></div>`
    })
    playerTime = 0
    gameOver = false
}

