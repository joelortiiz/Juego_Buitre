let baraja1 = [
    "2_of_clubs",
    "2_of_diamonds",
    "2_of_hearts",
    "2_of_spades",
    "3_of_clubs",
    "3_of_diamonds",
    "3_of_hearts",
    "3_of_spades",
    "4_of_clubs",
    "4_of_diamonds",
    "4_of_hearts",
    "4_of_spades",
    "5_of_clubs",
    "5_of_diamonds",
    "5_of_hearts",
    "5_of_spades",
    "6_of_clubs",
    "6_of_diamonds",
    "6_of_hearts",
    "6_of_spades",
    "7_of_clubs",
    "7_of_diamonds",
    "7_of_hearts",
    "7_of_spades",
    "8_of_clubs",
    "8_of_diamonds",
    "8_of_hearts",
    "8_of_spades",
    "9_of_clubs",
    "9_of_diamonds",
    "9_of_hearts",
    "9_of_spades",
    "10_of_clubs",
    "10_of_diamonds",
    "10_of_hearts",
    "10_of_spades",
    "ace_of_clubs",
    "ace_of_diamonds",
    "ace_of_hearts",
    "ace_of_spades",
    "ace_of_spades2",
    "ace_of_spades2",
    "jack_of_diamonds",
    "jack_of_hearts",
    "jack_of_spades",
    "king_of_clubs",
    "king_of_diamonds",
    "king_of_hearts",
    "king_of_spades",
    "queen_of_clubs",
    "queen_of_diamonds",
    "queen_of_hearts",
    "queen_of_spades"
]
let baraja2 = baraja1;
const start = document.getElementById("start");
const button_play = document.getElementById("button__play");
const buttoon_start = document.getElementById("button__start");
const check = document.getElementById("checkbox");
const warning = document.getElementById("warning");
const header = document.getElementById("header__id");
const video = document.getElementById("background__video");
const container = document.getElementById("cont");
const countdown = document.getElementById("countdown__id");
const difficulty = document.getElementById("difficulty");
const help = document.getElementById("help");
let help_text = document.getElementById("footer__difficulty");

const check_checkbox = () => {
    if (check.checked) {
        boton_play.disabled = false;
        warning.style.display = "none";
    } else {
        boton_play.disabled = true;
        warning.style.display = "block";
    }
}
const start_game = () => {

    start.style.display = "none";
    video.pause();
   // container.style.backgroundColor = "green";
    container.classList.add = "animation__start";

    container.style.height = "950px";
    container.style.justifyContent = "start";
    container.style.borderRadius="1%";
}
const choose__difficulty = (event) => {
    console.log(difficulty.textContent);
    if (event.target.nodeName == "INPUT") {

        let count = setInterval(countdown__start, 1000);
        difficulty.style.display="noe";
    }
}
let timer = 3
const countdown__start = () => {

    countdown.textContent = timer
    timer--;

}
const showHelp=()=> {
    help_text.classList.toggle("displayNone")
    help_text.style.opacity="1";
}
check.addEventListener("change", check_checkbox)
button_play.addEventListener("click", start_game)
buttoon_start.addEventListener("click", choose__difficulty)
help.addEventListener("click", showHelp)