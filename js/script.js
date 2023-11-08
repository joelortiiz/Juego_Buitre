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
let avatars = [
    "cartas-de-poquer.png",
    "jugando-a-las-cartas.png",
    "mano.png",
    "poker.png"
]
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
let username = document.getElementById("username");
const button_user = document.getElementById("button_save_user");
let settings = document.getElementById("settings");
let user = document.getElementById("user");
let user_layer = document.getElementById("user_layer");
let user_container = document.getElementById("container__user");
let avatarDiv = document.getElementById("avatar");

let checkEdad=true;
const check_checkbox = () => {
    if (check.checked) {
        console.log("check")
        
        button_play.style.backgroundColor="green";
    
       // button__play.disabled = false;
       checkEdad=true;
        warning.style.display = "none";
    } else {
        console.log("no check")
       // button__play.disabled = true;
        warning.style.display = "block";
        checkEdad=false;

    }
}
const start_game = () => {
    console.log(checkEdad)
    if (checkEdad==true) {
        settings.classList.remove("displayNone")
        // settings.classList.add("animation__settings") 
        start.style.display = "none";
        video.playbackRate = 0.8;
        settings.style.marginBottom = "0px";
        container.style.backgroundColor = "rgba(0, 128, 0, 0.97)";
        user_container.nextElementSibling.style.display = "none"
        chargeAvatars()
    } else {
        button_play.style.backgroundColor="red";
    }
   
}
const choose__difficulty = (event) => {
    console.log(difficulty.textContent);
    console.log(event.target.nodeName);
    if (event.target.nodeName == "INPUT") {
        let count = setInterval(countdown__start, 1000);
        difficulty.style.display = "none";
    }
}
let timer = 3
const countdown__start = () => {
    countdown.textContent = timer
    timer--;
}
const showHelp = () => {
    help_text.classList.toggle("displayNone")
    help_text.style.opacity = "1";
}
let usernameExists = false;
const saveUser = () => {
    if (username.value == "") {
        console.log("vacio")
        username.style.border = "2px solid red";
        usernameExists = false;
        user_layer.classList.add("displayNone")

    } else {
        username.style.border = "0px";
        user.textContent = username.value
        user_layer.classList.remove("displayNone")
    }
}
const chargeAvatars = () => {
    for (let i = 0; i < 4; i++) {
        let div = document.createElement("DIV");
        avatarDiv.append(div);
        let random = Math.floor(Math.random() * avatars.length)
        let randomAvatar = avatars.splice(random, 1)[0];
        let avatar = document.createElement("IMG");
        avatar.src = "./assets/images/avatares/" + randomAvatar;
        avatar.className = "avatar";
        avatarDiv.appendChild(avatar)
    }
}
const chooseAvatar = (event) => {
    if (event.target.nodeName === "IMG") {
      /* console.log(event.target.getAttribute("src")); */
        user_layer.nextElementSibling.src = event.target.getAttribute("src")
        user_layer.nextElementSibling.classList.remove("displayNone")
        user_layer.nextElementSibling.classList.remove("avatar")
        user_layer.nextElementSibling.classList.add("avatar_user")
        user_layer.nextElementSibling.style.margin="0px"
    }
}

check.addEventListener("change", check_checkbox)
button_play.addEventListener("click", start_game)
buttoon_start.addEventListener("click", choose__difficulty)
help.addEventListener("click", showHelp)
button_user.addEventListener("click", saveUser)
avatar.addEventListener("click", chooseAvatar)