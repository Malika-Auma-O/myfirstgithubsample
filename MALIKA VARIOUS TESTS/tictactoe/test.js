let playerSymbol = "X";
let gameEnded = false;

const winningStreak = [
    [1,2,3], [4,5,6],
    [7,8,9], [1,4,7],
    [2,5,8], [3,6,9],
    [1,5,9], [3,5,7]
];

function checkWinner() {
    for (let i = 0; i < winningStreak.length; i++) {
        if (document.getElementById(winningStreak[i][0]).innerHTML === playerSymbol &&
            document.getElementById(winningStreak[i][1]).innerHTML === playerSymbol &&
            document.getElementById(winningStreak[i][2]).innerHTML === playerSymbol) {

            document.getElementById(winningStreak[i][0]).classList.add("win");
            document.getElementById(winningStreak[i][1]).classList.add("win");
            document.getElementById(winningStreak[i][2]).classList.add("win"); 

            gameEnded = true;

            setTimeout(function() {
                alert("Player " + playerSymbol + " wins!");
            }, 500);
        }
    }
}


for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", function(){
        if (this.innerHTML === "" && !gameEnded){
            this.innerHTML = playerSymbol;
            this.classList.add(playerSymbol.toLowerCase());
            checkWinner();
            if (playerSymbol === "X"){
                playerSymbol = "O";
            }else {
                playerSymbol = "X";
            }
        }
    });
}

document.getElementById("reset").addEventListener("click", function(){
    for (let i = 1; i <= 9; i++){
        document.getElementById(i.toString()).innerHTML = "";
        document.getElementById(i.toString()).classList.remove("x");
        document.getElementById(i.toString()).classList.remove("o");
        document.getElementById(i.toString()).classList.remove("win");
        gameEnded = false;
    }
});
