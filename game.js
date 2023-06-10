/**
 * 1. user inputs number of players
 * 2. one player will be assigned imposter
 * 3. generate randomized word
 * (loop over players)
 * if imposter {
 *      4a.     display imposter
 * } else {
 *      4b.     Display word to players 
 * }
 * 5. (next button) 
 * 
 * end loop
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function imposterGame(playerCount = 6) {
    const imposter = getRandomInt(playerCount);
    const randomWord = "boat";
    for (let player = 1; player <= playerCount; player++) {
        if (player === imposter) {
            alert("Imposter");
        } else {
            alert(randomWord);
        }
        alert("Next");
    }
}


const submitButton = document.getElementById("submitButton");
//console.log(submitButton);

const numberOfPlayersInput = document.getElementById("numberOfPlayersInput");
//console.log(numberOfPlayersInput);

submitButton.addEventListener('click', startGame);

function startGame(clickEvent) {
    clickEvent.preventDefault();
    imposterGame(numberOfPlayersInput.value);
}

