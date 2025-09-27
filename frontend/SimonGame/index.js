$(".btn").click(responsedClickSimon);
$(this).on("keydown", play);
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var started = false;
var level = 0;
var indexCurrentLevel = 0;

function play() {
  if (!started) {
    started = true;
    clear();
    nextSequence();
  }
}

function over() {
  $("body").toggleClass("game-over");
  $("#level-title").text("Game Over, Press Any Key to Restart");
  audioPlay("wrong");
  setTimeout(() => $("body").toggleClass("game-over"), 100);
  started = false;
}

function clear() {
  level = 0;
  indexCurrentLevel = 0;
  while (gamePattern.length !== 0) {
    gamePattern.pop();
  }
}

function nonOver() {
  $("body").toggleClass("game-over");
  $("#level-title").text("Press A Key to Start");
  setTimeout(() => $("body").toggleClass("game-over"), 100);
}

function responsedClickSimon() {
  if (!started) {
    nonOver();
    return;
  }
  let colorButton = [...this.classList][1];
  handleSimon(colorButton);
  if (!checkAnswer(colorButton)) {
    console.log("over");
    over();
  } else if (indexCurrentLevel == gamePattern.length) {
    ++level;
    indexCurrentLevel = 0;
    nextSequence();
  }
}

function handleSimon(colorButton) {
  var button = $("." + colorButton);
  audioPlay(colorButton);
  $(button).toggleClass("pressed");
  setTimeout(() => $(button).toggleClass("pressed"), 100);
}

function checkAnswer(colorButton) {
  if (colorButton != gamePattern[indexCurrentLevel++]) {
    return false;
  }
  return true;
}

function nextSequence() {
  setTimeout(() => {
    $("#level-title").text("Level " + (level + 1));
    var index = random();
    gamePattern.push(buttonColours[index]);
    handleSimon(gamePattern[level]);
  }, 700);
}

function audioPlay(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function random() {
  return Math.floor(Math.random() * 4);
}
