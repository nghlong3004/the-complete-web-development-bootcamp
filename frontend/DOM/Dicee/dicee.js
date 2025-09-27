var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];

var scorePlayer1 = random();
var scorePlayer2 = random();

setImg(scorePlayer1, img1);
setImg(scorePlayer2, img2);

setDicee();

function setDicee(){
    if(scorePlayer1 > scorePlayer2){
    setTextPlayerWin(1);
    }
    else if(scorePlayer1 < scorePlayer2){
        setTextPlayerWin(2);
    }
    else{
     getH1.textContent = "Draw!";
    }
}

function setImg(score, img){
    var pathPlayer = "images/dice" + score + ".png";
    img.setAttribute("src", pathPlayer);
}

function setTextPlayerWin(number){
    var text = getH1();
    text.textContent = "Player " + number + " Wins!";
}

function getH1(){
    return document.querySelector("h1");
}

function random(){
    return Math.floor(Math.random() * 6) + 1;
}