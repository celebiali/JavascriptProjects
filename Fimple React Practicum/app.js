const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById("player");
const errorText = document.getElementById("error");
let player = "X";

function startGame() {
    playerText.textContent = `${player}'s Turn !`

    blocks.forEach(block => block.addEventListener("click",() => chooseArea(block){

}