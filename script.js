for(let i=0; i<5; i++){
    console.log("yes")
}

var seconds
var display_seconds

function start_timer (){
    seconds = (Math.floor ((seconds-0.1)*100) / 100).toFixed(1);
    display_seconds.innerHTML = `${seconds}`;
    console.log(seconds)
    if (seconds == 0.0) {
        document.querySelector("#result-header").classList.remove("hide");
        game.clearRect(0, 0, canvas.width, canvas.height);
        document.querySelector("#time-header").classList.add("hide");
        document.querySelector("#start").classList.remove("hide");
        document.querySelector("#result").innerHTML = `${count}`
        clearInterval(time);
    }
}
let time = setInterval(start_timer, 100)

let colors = ["red", "green", "blue", "yellow", "purple", "cyan", "orange", "black"]

let canvas = document.querySelector('.canv');
let game = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 300;
var cur_x, cur_y, width
var count = 0

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    if (x >= cur_x && x <= cur_x + width && y >= cur_y && y <= cur_y + width) {
        game.clearRect(0, 0, canvas.width, canvas.height);
        count++
        start_drawing();
    }
}

canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)
})

function start_drawing(){
    
    game.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    width = Math.random() * 60 + 20
    cur_x = Math.random() * 230
    cur_y = Math.random()* 230
    game.fillRect( cur_x, cur_y, width, width);
}

function start_game() {
    document.querySelector("#time-header").classList.remove("hide")
    document.querySelector("#result-header").classList.add("hide");
    count = 0;
    document.querySelector("#start").classList.add("hide");
    console.log("game started")
    seconds = document.querySelector('#game-time').value;
    display_seconds = document.querySelector('#time');
    start_timer()
    start_drawing()
}


let start_btn = document.querySelector('#start')
start_btn.addEventListener("click", start_game);
var input = document.querySelector("#game-time");

input.addEventListener("change", function () {
    if (document.querySelector("#time-header").classList.contains("hide")) {
        document.querySelector("#time-header").classList.remove("hide")
        document.querySelector("#result-header").classList.add("hide");

    }
    var val = input.value;
    document.querySelector('#time').innerHTML = val + ".0";
  })
