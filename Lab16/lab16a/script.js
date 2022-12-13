window.onload = function () {
  // game initialization
  var p1Button = document.querySelector("#p1");
  var p2Button = document.getElementById("p2");
  var resetButton = document.getElementById("reset");
  var p1Display = document.querySelector("#p1Display");
  var p2Display = document.querySelector("#p2Display");
  var numInput = document.querySelector("input");
  var winningScoreDisplay = document.querySelector("p span");
  var p1Score = 0;
  var p2Score = 0;
  var gameOver = false;
  var winningScore = 5;

  // event listeners
  p1Button.addEventListener("click", function () {
    if (!gameOver) {
      p1Score++;
      if (p1Score === winningScore) {
        p1.classList.add("btn-success");
        p1.classList.remove("btn-secondary");
        gameOver = true;
      }
      p1Display.textContent = p1Score;
    }
  });

  p2Button.addEventListener("click", function () {
    if (!gameOver) {
      p2Score++;
      if (p2Score === winningScore) {
        //changes the default button to green as success.
        p2.classList.add("btn-success");
        p2.classList.remove("btn-secondary");
        gameOver = true;
        
      }
      p2Display.textContent = p2Score;
    }
  });

  resetButton.addEventListener("click", function () {
    reset();
  });

  numInput.addEventListener("change", function (){
    //This is will not allow negative numbers
    if (0 > this.value){
      return; 
    }
    //This is will not allow negative numbers
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
  });

  // game reset action
  function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1.classList.remove("btn-success");
    p2.classList.remove("btn-success");
    p1.classList.add("btn-secondary");
    p2.classList.add("btn-secondary");
    gameOver = false;
  }
};