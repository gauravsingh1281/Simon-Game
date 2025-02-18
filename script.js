let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let gameStarted = false;
let level = 0;
let showLevel = document.getElementById("level-title");
function nextSequence() {
  userClickedPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  let selectedBtn = document.getElementById(`${randomChosenColor}`);
  flashButton(selectedBtn);
  playSound(randomChosenColor);
  level++;
  showLevel.textContent = `Level ${level}`;
}

let allBtn = document.querySelectorAll(".btn");
allBtn.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

//for starting game
document.addEventListener("keydown", () => {
  if (!gameStarted) {
    showLevel.textContent = `Level ${level}`;
    nextSequence();
    gameStarted = true;
  }
});
// Handle user click
function handleClick() {
  let userChosenColor = this.getAttribute("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
}
//For checking answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    let gameoverSound = new Audio("./sounds/wrong.mp3");
    showLevel.textContent = "Game Over, Press Any Key to Restart";
    gameoverSound.play();
    document.querySelector("body").classList.add("game-over");
    setTimeout(() => {
      document.querySelector("body").classList.remove("game-over");
    }, 200);
  }
}

//animation on btn pressed
function animatePress(currentColor) {
  document.getElementById(`${currentColor}`).classList.add("pressed");
  setTimeout(() => {
    document.getElementById(`${currentColor}`).classList.remove("pressed");
  }, 100);
}

// Flash animation on btn
function flashButton(button) {
  button.style.opacity = "0";
  setTimeout(() => {
    button.style.opacity = "1";
    setTimeout(() => {
      button.style.opacity = "0";
      setTimeout(() => {
        button.style.opacity = "1";
      }, 100);
    }, 100);
  }, 100);
}

// Play audio
function playSound(name) {
  let sound = new Audio(`./sounds/${name}.mp3`);
  sound.play();
}
