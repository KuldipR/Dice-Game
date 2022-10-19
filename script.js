let score = 0;
let turn = 0;
let currentScore1 = 0;
let currentScore2 = 0;
newGame();
btnRoll = document.getElementById(`rDice`)
btnHold = document.getElementById(`ho`)
btnNewGame = document.getElementById(`nGame`)
btnRoll.addEventListener(`click`, rollDice)
btnHold.addEventListener(`click`, holdPoint)
btnNewGame.addEventListener(`click`, newGame)
function rollDice() {
    let img = document.querySelector(`.img`)
    let random = Math.floor(Math.random() * 6 + 1);
    let playerScr = document.getElementById(`score--${turn}`)
    if (random === 1) {
        score = 0
        playerScr.innerText = `${score}`
        if (turn == 0) {
            document.querySelector(`.player--${turn}`).classList.remove(`player--active`)
            turn = 1;
            document.querySelector(`.player--${turn}`).classList.add(`player--active`)
        }
        else if (turn == 1) {
            document.querySelector(`.player--${turn}`).classList.remove(`player--active`)
            turn = 0;
            document.querySelector(`.player--${turn}`).classList.add(`player--active`)

        }
        img.innerHTML = `<img src="dice-${random}.png" alt="Playing dice" class="dice" /> `
    }
    else {
        img.innerHTML = `<img src="dice-${random}.png" alt="Playing dice" class="dice" /> `
        score = score + random;

        playerScr.innerText = `${score}`
    }
    console.log(random, score);
}
function holdPoint() {
    if (turn == 0) {
        currentScore1 += score;
        document.querySelector(`.player--${turn}`).classList.remove(`player--active`)
        let crtScore = document.getElementById(`current--${turn}`)
        crtScore.innerText = `${currentScore1}`
        score = 0;
        if (currentScore1 > 99) {

            document.querySelector(`.player--0`).classList.add(`player--winner`)
            document.querySelector(`.player--${turn}`).classList.remove(`player--active`)
            newGame();
        }

        turn = 1;
        document.querySelector(`.player--${turn}`).classList.add(`player--active`)
    }
    else if (turn == 1) {
        document.querySelector(`.player--${turn}`).classList.remove(`player--active`)

        currentScore2 += score;
        let crtScore = document.getElementById(`current--${turn}`)
        crtScore.innerText = `${currentScore2}`
        score = 0;
        if (currentScore2 > 99) {

            document.querySelector(`.player--1`).classList.add(`player--winner`)
            document.querySelector(`.player--${turn}`).classList.remove(`player--active`)
            newGame();
        }
        turn = 0;
        document.querySelector(`.player--${turn}`).classList.add(`player--active`)
    }
}
function newGame() {
    document.querySelector(`.player--0`).classList.remove(`player--winner`)
    document.querySelector(`.player--1`).classList.remove(`player--winner`)
    playing = true;
    score = 0;
    turn = 0;
    currentScore1 = 0;
    currentScore2 = 0
    let playerScr1 = document.getElementById(`score--0`)
    let playerScr2 = document.getElementById(`score--1`)
    let crtScore = document.getElementById(`current--0`)
    let crtScore5 = document.getElementById(`current--1`)

    crtScore.innerText = `${currentScore1}`
    crtScore5.innerText = `${currentScore1}`
    playerScr1.innerText = `${currentScore1}`
    playerScr2.innerText = `${currentScore1}`
}

