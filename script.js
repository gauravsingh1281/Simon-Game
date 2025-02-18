let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  let selectedBtn = document.getElementById(`${randomChosenColor}`);
  flashButton(selectedBtn);
  playSound(randomChosenColor);
}

let allBtn = document.querySelectorAll(".btn");
allBtn.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick() {
  let userChosenColor = this.getAttribute("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
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
