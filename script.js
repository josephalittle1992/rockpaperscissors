/*
function computerSelection() {
    let plays = ['Rock', 'Paper', 'Scissors'];
    let hand = Math.floor(Math.random() * plays.length);
    return plays[hand]

}

function playerSelection() {
    let selection = prompt('Enter your hand', 'Rock, Paper, or Scissors?')

    if (selection) {
        let selLower = selection.toLowerCase();
        let answer = selLower[0].toUpperCase() + selLower.substring(1);
        if (answer != 'Rock' && answer != 'Scissors' && answer != 'Paper') {
            return 'invalid'
        } else {
            return answer
        }
    } else {
        return 'invalid'
    }
}



function playerVersusComputer(playerPlay, computerPlay) {
    if (playerPlay == 'invalid') {
        return 'Invalid player answer!'
    } else if (playerPlay == 'Rock' && computerPlay == 'Paper') {
        return ('You lose!  Paper beats Rock');
    } else if (playerPlay == 'Rock' && computerPlay == 'Rock') {
        return ('You tied!');
    } else if (playerPlay == 'Rock' && computerPlay == 'Scissors') {
        return ('You win!  Rock beats Paper');
    } else if (playerPlay == 'Scissors' && computerPlay == 'Paper') {
        return ('You win!  Scissors beats Paper');
    } else if (playerPlay == 'Scissors' && computerPlay == 'Rock') {
        return ('You lose!  Rock beats Scissors');
    } else if (playerPlay == 'Scissors' && computerPlay == 'Scissors') {
        return ('You tied!');
    } else if (playerPlay == 'Paper' && computerPlay == 'Paper') {
        return ('You tied!');
    } else if (playerPlay == 'Paper' && computerPlay == 'Rock') {
        return ('You win!  Paper beats Rock');
    } else if (playerPlay == 'Paper' && computerPlay == 'Scissors') {
        return ('You lose!  Scissors beats Paper');
    }


}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let result = playerVersusComputer(playerSelection(), computerSelection());
        if (result.substring(4, 5) == 'w') {
            playerScore += 1
            console.log(result)
        } else if (result.substring(4, 6) == 'lo') {
            computerScore += 1
            console.log(result)
        } else if (result.substring(4, 5) == 't') {
            console.log(result)
        } else {
            console.log(result);
            i -= 1
        }
        console.log('Computer Score = ' + computerScore);
        console.log('Player Score = ' + playerScore);

    }
    if (computerScore > playerScore) {
        console.log('Computer Wins!')
    } else if (computerScore < playerScore) {
        console.log('Player Wins!')
    } else console.log('It\'s a tie!');

}
*/



//New Game
let startBtn = document.getElementById('btnStart');
let scoreString = document.getElementById('score');
let statusString = document.getElementById('status');
scoreString.textContent = "";
statusString.textContent = "Press \"Start Game\" to begin playing!";


    let started = false;
    btnStart.addEventListener('click', () => {
        if (started == false) {
            game('start');
            started = true;

        } else if (started == true) {
            game('reset');
        }


    })

function resetGame() {
    btnStart.textContent = "Start Game";
    scoreString.textContent = "";
    statusString.textContent = "Press \"Start Game\" to begin playing!";

}

function game(x) {
    if (x == 'reset') {
        alert('reset');
        resetGame();
        started = false;
    } else if (x == 'start') {
        let playerScore = 0;
        let computerScore = 0;
        scoreString.textContent = "Your Score: 0 Computer Score: 0";
        statusString.textContent = "Pick your move!";
        btnStart.textContent = "End Game";

        function computerSelection() {
            let plays = ['Rock', 'Paper', 'Scissors'];
            let hand = plays[Math.floor(Math.random() * plays.length)];
            return hand;
        }

        function playRound(playerMove) {
            let result = "";
            let playerPlay = playerMove;
            let computerPlay = computerSelection();
            if (playerPlay == 'Rock' && computerPlay == 'Paper') {
                result = ('You lose!  Paper beats Rock');
            } else if (playerPlay == 'Rock' && computerPlay == 'Rock') {
                result = ('You tied!');
            } else if (playerPlay == 'Rock' && computerPlay == 'Scissors') {
                result = ('You win!  Rock beats Scissors');
            } else if (playerPlay == 'Scissors' && computerPlay == 'Paper') {
                result = ('You win!  Scissors beats Paper');
            } else if (playerPlay == 'Scissors' && computerPlay == 'Rock') {
                result = ('You lose!  Rock beats Scissors');
            } else if (playerPlay == 'Scissors' && computerPlay == 'Scissors') {
                result = ('You tied!');
            } else if (playerPlay == 'Paper' && computerPlay == 'Paper') {
                result = ('You tied!');
            } else if (playerPlay == 'Paper' && computerPlay == 'Rock') {
                result = ('You win!  Paper beats Rock');
            } else if (playerPlay == 'Paper' && computerPlay == 'Scissors') {
                result = ('You lose!  Scissors beats Paper');
            }

            statusString.textContent = result;

            if (result.substring(4, 5) == 'w') {
                playerScore += 1
                console.log(result)
            } else if (result.substring(4, 5) == 'l') {
                computerScore += 1
                console.log(result)
            } else if (result.substring(4, 5) == 't') {
                console.log(result)
            }

            scoreString.textContent = scoreString.textContent = "Your Score: " + playerScore + " Computer Score: "
                + computerScore;

        }

        function gameStart() {

            let move = "";
            let rockImg = document.getElementById('rock');
            let paperImg = document.getElementById('paper');
            let scissorsImg = document.getElementById('scissors');
            rockImg.addEventListener('click', () => {
                move = 'Rock';
                playRound(move);
            })
            paperImg.addEventListener('click', () => {
                move = 'Paper';
                playRound(move);
            })
            scissorsImg.addEventListener('click', () => {
                move = 'Scissors';
                playRound(move);
            })

        }

        gameStart();
    }
}

loadGame();