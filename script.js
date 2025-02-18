let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  return Math.floor(Math.random() * 4);
}

let randomNumber = nextSequence();
let randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

let allBtn = document.querySelectorAll(".btn");
allBtn.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick() {
  let userChosenColor = this.getAttribute("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
}
