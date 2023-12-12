let randomNum = parseInt(Math.random() *100 + 1);

const guess1 = document.querySelector('.input');
const button = document.querySelector('#button');
const lowHi = document.querySelector('#lowHi');
const prevs = document.querySelector('#prevs');
const rems = document.querySelector('#rems');
const newGame = document.querySelector('#newGame');

let rem = 1;

let playGame = true;

if(playGame){
    button.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(guess1.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    } else if(guess>100){
        alert('please enter a number less than 100');
    } else if(guess<1){
        alert('please enter a number greater than 1');
    } else{
        if(rem === 10){
            displayGuess(guess);
            displayMsg(`Game Over . Random number was ${randomNum}`)
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }

    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMsg(`You guessed it right`);
        endGame();
    } else if(guess<randomNum){
        displayMsg(`number is more than ${guess}`);
    } else if(guess>randomNum){
        displayMsg(`number is less than ${guess}`);
    }
}

function displayGuess(guess){
    guess1.value = "";
    prevs.innerHTML += `${guess}; `;
    rem++;
    rems.innerHTML = `${11 - rem}`;
}

function displayMsg(message){
    lowHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    guess1.value = "";
    guess1.setAttribute('disabled','');
    playGame = false;
    newGames();
}

function newGames(){
    newGame.addEventListener('click',function(e){
        e.preventDefault();
        randomNum = parseInt(Math.random() *100 + 1);
        prevs.innerHTML = "";
        rem = 1;
        rems.innerHTML = `${11 - rem}`;
        guess1.removeAttribute('disabled');
        lowHi.innerHTML = "";
        playGame = true;
    })
}



