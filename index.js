let homeScore = 0; 
let guestScore = 0;

let homeEl = document.getElementById("home-score");
homeScore = Number(homeEl.textContent);

let guestEl = document.getElementById("guest-score");
guestScore = Number(guestEl.textContent);

function homeAdd1Point(){
    homeScore += 1
    homeEl.textContent = homeScore;
}
function homeAdd2Point(){
    homeScore += 2
    homeEl.textContent = homeScore;
}
function homeAdd3Point(){
    homeScore += 3
    homeEl.textContent = homeScore;
}

function guestAdd1Point(){
    guestScore += 1
    guestEl.textContent = guestScore;
}
function guestAdd2Point(){
    guestScore += 2
    guestEl.textContent = guestScore;
}
function guestAdd3Point(){
    guestScore += 3
    guestEl.textContent = guestScore;
}

function newGame(){
    homeScore = 0; 
    guestScore = 0;
    homeEl.textContent = homeScore;
    guestEl.textContent = guestScore;
}