
var buttons = document.querySelectorAll(".drum");

for(let i = 0; i < buttons.length; ++i){
    buttons[i].addEventListener("click", responsedClickDrumKit);
}
document.addEventListener("keydown", responsedKeydownDrumKit);


function responsedKeydownDrumKit(event){
    handleAction(event.key);
}

function responsedClickDrumKit(){
    let buttonInnerHTML = this.innerHTML;
    handleAction(buttonInnerHTML);
}

function handleAction(buttonInnerHTML){
    var flag = true;
    switch (buttonInnerHTML){
        case "w":
            audioPlay(1);
            break;
        case "a":
            audioPlay(2);
            break;
        case "s":
            audioPlay(3);
            break;
        case "d":
            audioPlay(4);
            break;
        case "j":
            audioPlay(5);
            break;
        case "k":
            audioPlay(6);
            break;
        case "l":
            audioPlay(7);
            break;
        default:
            flag = false;
            console.log(buttonInnerHTML);
    }
    if(flag){
        buttionAnimation(buttonInnerHTML);
    }
}

function buttionAnimation(key){
    let button = document.querySelector("." + key);
    button.classList.toggle("pressed");
    setTimeout(function() {
        button.classList.toggle("pressed");
    }, 100);
}

function audioPlay(i){
    let audio = new Audio("sounds/tom-" + i + ".mp3");
    audio.play();
}
