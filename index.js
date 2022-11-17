

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let aScoreBtnOne = document.getElementById("a-score-btn-1")
let aScoreBtnTwo = document.getElementById("a-score-btn-2")
let aScoreBtnThree = document.getElementById("a-score-btn-3")
let aStoreEl =document.getElementById("a-score")
let aScore = 0

function increaseAwayScoreOne(){
    aScore += 1
    aStoreEl.textContent = aScore
}

function increaseAwayScoreTwo(){
    aScore += 2
    aStoreEl.textContent = aScore
}

function increaseAwayScoreThree(){
    aScore += 3
    aStoreEl.textContent = aScore
}

let reSet = document.getElementById("re-set")

function reset() {
    aScore = 0
    homeScore = 0
    homeStoreEl.textContent = homeScore
    aStoreEl.textContent = aScore
}

var timeleft = 900;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Game Over";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + "";
  }
  timeleft -= 1;
}, 1000);