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
let baraja2 = [
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

const avatars = [
    "cartas-de-poquer.png",
    "jugando-a-las-cartas.png",
    "mano.png",
    "poker.png"
]

const start = document.getElementById("start");
const button_play = document.getElementById("button__play");
const button_start = document.getElementById("button__start");
const check = document.getElementById("checkbox");
const warning = document.getElementById("warning");
const header = document.getElementById("header__id");
const video = document.getElementById("background__video");
const container = document.getElementById("cont");
const countdown = document.getElementById("countdown__id");
const difficulty = document.getElementById("difficulty");
const help = document.getElementById("help");
const help_text = document.getElementById("footer__difficulty");
const username = document.getElementById("username");
const button_user = document.getElementById("button_save_user");
const settings = document.getElementById("settings");
const user = document.getElementById("user");
const user_layer = document.getElementById("user_layer");
const user_container = document.getElementById("container__user");
const avatarDiv = document.getElementById("avatar");
const playerGiveCardButton = document.getElementById("playerGiveCard");
const tableCard = document.getElementById("tableCard");
const playerContainer = document.getElementById("player");
const cardBefore = document.getElementById("cardBefore");
const button__hunt = document.getElementById("button__hunt");
const button_reload = document.getElementById('button__reload');
const win = document.getElementById("win");
const result = document.getElementById("result");
const lose = document.getElementById("lose");
const draw = document.getElementById("draw");
const game = document.getElementById("game");
let winGame = false;
let CPUTurn = false;
let PlayerTurn = false;
let Playercards = 10;
let CPUcards = 10;

let PlayerTime;
let timeEnd;
let CPUTime;

let checkEdad = true;
const check_checkbox = () => {
    if (check.checked) {
        console.log("check")

        button_play.style.backgroundColor = "green";

        // button__play.disabled = false;
        checkEdad = true;
        warning.style.display = "none";
    } else {
        console.log("no check")

        button_play.style.backgroundColor = "red";
        // button__play.disabled = true;
        warning.style.display = "block";
        checkEdad = false;

    }
}
const start_game = () => {
    console.log(checkEdad)
    if (checkEdad == true) {
        settings.classList.remove("displayNone")

        // settings.classList.add("animation__settings")
        start.style.display = "none";
        video.playbackRate = 0.8;
        settings.style.marginBottom = "0px";
        container.style.backgroundColor = "rgba(0, 128, 0, 0.97)";
        user_container.nextElementSibling.style.display = "none"
        container.style.height = "820px";
        chargeAvatars()
    } else {
        button_play.style.backgroundColor = "red";
    }

}
let difficultyTrue = false;
let difficult = false;
let eaasy = false;
const choose__difficulty = (event) => {
    if (event.target.nodeName == "INPUT") {
        difficulty.children[1].classList.remove("error")
        difficultyTrue = true
        if (event.target.nextElementSibling.textContent == "Fácil") {
            button_start.style.background = "rgb(74, 204, 255)"
            difficult = false;
            eaasy = true;
        } else {
            button_start.style.background = "red"
            difficult = true;
            eaasy = false;

        }

        //  let count = setInterval(countdown__start, 1000);

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
        username.classList.remove("error")
        usernameExists = true;
        username.style.border = "0px";
        user.textContent = username.value
        user_layer.classList.remove("displayNone")
    }
}
const chargeAvatars = () => {
    for (let i = 0; i < 4; i++) {
        let div = document.createElement("DIV");
        //     div.classList.add("")
        avatarDiv.append(div);
        let random = Math.floor(Math.random() * avatars.length)
        let randomAvatar = avatars.splice(random, 1)[0];
        let avatar = document.createElement("IMG");
        avatar.src = "./assets/images/avatares/" + randomAvatar;
        avatar.className = "avatar";
        div.appendChild(avatar)
    }
}
let avatarIsSet = false;
let avatar = "";
const chooseAvatar = (event) => {
    if (event.target.nodeName === "IMG") {
        avatarDiv.classList.remove("error")
        user_layer.nextElementSibling.src = event.target.getAttribute("src")
        avatar = event.target.getAttribute("src");
        user_layer.nextElementSibling.classList.remove("displayNone")
        user_layer.nextElementSibling.classList.remove("avatar")
        user_layer.nextElementSibling.classList.add("avatar_user")
        user_layer.nextElementSibling.style.margin = "0px";
        avatarIsSet = true
    }
}
let startToPlay = false;
const playGame = () => {
    if (avatarIsSet == true && usernameExists == true && difficultyTrue == true) {
        container.style.height = "660px";
        settings.style.display = "none"
        game.classList.remove("displayNone")
        container.style.justifyContent = "center"
        const playerName = document.getElementById("player_name")
        playerName.textContent = username.value
        const playerAvatar = document.getElementById("player_avatar")
        playerAvatar.setAttribute("src", avatar)
        //CPU Random avatar process
        const player = document.getElementById("player")
        player.children[1].getAttribute("src")
        //   playerAvatar.setAttribute("src", user_container.lastElementChild.getAttribute("src"))
        const avatarsCopy = [
            "cartas-de-poquer.png",
            "jugando-a-las-cartas.png",
            "mano.png",
            "poker.png"
        ]
        let random = Math.floor(Math.random() * avatarsCopy.length)
        user_container.children[1].className = "displayNone"
        user_container.children[2].className = "displayNone"
        console.log(avatarsCopy[random])
        const cpu_avatar = document.getElementById("CPU_avatar")
        cpu_avatar.setAttribute("src", "./assets/images/avatares/" + avatarsCopy[random])
        //   shufflingCards();
        starTtoPlay = true

        playerStart();
        CPUStart();
    } else {
        if (avatarIsSet == false) {
            // avatarDiv.style.backgroundColor="red"
            avatarDiv.classList.add("error")
        }
        if (difficultyTrue == false) {
            difficulty.children[1].classList.add("error")
        }
        if (usernameExists == false) {
            username.classList.add("error")
        }
    }
}
let barajaPlayerFinal

const PlayerCountCards = document.getElementById("PlayerCountCards")

const playerStart = () => {
    barajaPlayerFinal = baraja1.slice(0, 10)
    PlayerCountCards.textContent = Playercards
}
let barajaCPUFinal
const CPUStart = () => {
    barajaCPUFinal = baraja2.slice(0, 10)
    const containerCPU = document.getElementById("CPU")
    containerCPU.lastElementChild.classList.remove("displayNone")
    if (difficult == true) {
        containerCPU.lastElementChild.textContent = "Hard Mode"
        containerCPU.lastElementChild.classList.add("hard")
    } else {
        containerCPU.lastElementChild.textContent = "Easy Mode"
    }
}
const shufflingCards = () => {
    for (let i = baraja1.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baraja1[i], baraja1[j]] = [baraja1[j], baraja1[i]];
    }
    for (let i = baraja2.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baraja2[i], baraja2[j]] = [baraja2[j], baraja2[i]];
    }

}
const playerLaunchCard = () => {
    if (winGame == false) {
        if (CPUTurn == false && barajaPlayerFinal.length != 1) {
            console.log(Playercards)
            console.log(barajaPlayerFinal.length)
            let cardBefore = tableCard.getAttribute("src")
            tableCard.setAttribute("src", "./assets/images/baraja/" + barajaPlayerFinal[0] + ".png")
            Playercards--;
            PlayerCountCards.textContent = Playercards
            barajaPlayerFinal.shift();
            console.log(cardBefore)
            coincidenceCheck("Player", barajaPlayerFinal[0], cardBefore);
            CPUTurn = true;
            CPULaunchCard();
           
        } else if (Playercards == 1 || barajaPlayerFinal.length == 1) {
             game.style.display= "none";
             result.classList.remove("displayNone");

             draw.classList.remove("displayNone");

           // location.reload();

        }
    }
}
let flag = true;

const CPULaunchCard = () => {
   if (flag) {
        flag = false; // Deshabilitar futuras ejecuciones
        let timeOut = setTimeout(() => {
            if (winGame == false) {
                if (CPUTurn == true || Playercards == 0) {
                    let cardBefore = tableCard.getAttribute("src");
                    tableCard.setAttribute("src", "./assets/images/baraja/" + barajaCPUFinal[0] + ".png");
                    barajaCPUFinal.shift();
                    CPUcards--;
                    coincidenceCheck(timeOut, barajaCPUFinal[0], cardBefore);
                    CPUTurn = false;
                }
            }

            flag = true; // Habilitar la ejecución para la próxima llamada
        }, 2000);
    }
};

const showDraw = () => {
    game.style.display = "none";
}



const coincidenceCheck = (timeOut, carta, cardBeforeSave) => {

    if (cardBeforeSave != "./assets/images/baraja/atras.png")

        cardBefore.setAttribute("src", cardBeforeSave)
    tableCard.setAttribute("src", "./assets/images/baraja/" + carta + ".png")
    imageOfTable = tableCard.getAttribute("src")
   // console.log(tableCard.getAttribute("src"))
    let nameCard = carta.substring(carta.lastIndexOf("/") + 1);
   // console.log(cardBeforeSave)
    let numberCard = nameCard.substring(0, 1)
  //  console.log(numberCard)
    let nameCardBefore = cardBeforeSave.substring(cardBeforeSave.lastIndexOf("/") + 1);
    let numberCardBefore = nameCardBefore.substring(0, 1)
  //  console.log(numberCardBefore)
    if (numberCard == numberCardBefore) {
        clearInterval(timeOut)
        winGame = true
        button__hunt.classList.add("button__hunt")
        hunt();
    };

}

const hunt = () => {
    PlayerTime = new Date().getTime();
    if (difficult == true) {
        CPUTime = 800 + Math.random() * 400;
    } else {
        CPUTime = 1000 + Math.random() * 3000;
    }
    console.log("Tiempo de reacción de la CPU: " + CPUTime + " milisegundos");
    button__hunt.addEventListener("click", detenerConteo)



};

const detenerConteo = () => {
    game.style.display = "none";
    result.classList.remove("displayNone");

    let tiempoFin = new Date().getTime();
    let tiempoTranscurrido = tiempoFin - PlayerTime;
debugger 
    console.log(CPUTime)
    console.log("Conteo detenido. Tiempo transcurrido: " + tiempoTranscurrido + " milisegundos");
   
  //  container.style.justifyContent="start"
    
    tiempoTranscurrido = tiempoTranscurrido / 1000
    CPUTime = CPUTime / 1000
    if (tiempoTranscurrido < CPUTime) {
        const timeFinalUser = document.getElementById("timeFinalUser");
        const timeFinalCPU = document.getElementById("timeFinalCPU");
        
        console.log("gana usuario")
        win.classList.remove("displayNone");
        
        win.style.display="flex";
        timeFinalUser.textContent = tiempoTranscurrido.toFixed(2)
        timeFinalCPU.textContent = CPUTime.toFixed(2)
    } else {
        const timeFinalUser_lose = document.getElementById("timeFinalUser_lose");
        const timeFinalCPU_lose = document.getElementById("timeFinalCPU_lose");
    
        lose.classList.remove("displayNone");
        lose.style.display="flex";
        console.log("gana CPU")
        timeFinalUser_lose.textContent = tiempoTranscurrido.toFixed(2)
        timeFinalCPU_lose.textContent = CPUTime.toFixed(2)
        console.log(tiempoTranscurrido.toFixed(2))
        console.log(CPUTime.toFixed(2))
    }

}

document.addEventListener("DOMContentLoaded", shufflingCards)
check.addEventListener("change", check_checkbox)
button_play.addEventListener("click", start_game)
help.addEventListener("click", showHelp)
button_user.addEventListener("click", saveUser)
avatarDiv.addEventListener("click", chooseAvatar)
difficulty.addEventListener("click", choose__difficulty)
button_start.addEventListener("click", playGame)
playerGiveCardButton.addEventListener("click", playerLaunchCard)
button_reload.addEventListener('click', function () {
    location.reload();
});