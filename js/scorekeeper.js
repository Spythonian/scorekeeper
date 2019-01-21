var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var playTo = document.getElementById("playTo");
var h1 = document.querySelector("h1");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
            alert("P1 is the winner")
        }
        p1Display.textContent = p1Score;
    }
    
});

p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
            alert("P2 is the winner")
        }
        p2Display.textContent = p2Score;
    }
});
resetButton.addEventListener("click", function (){
   reset(); 
});

function reset (){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change",  function(){
   playTo.textContent = numInput.value; 
   winningScore = Number(numInput.value);
   reset(); 
})