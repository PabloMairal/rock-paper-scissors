const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const reset = document.querySelector('.reset')
const container = document.querySelector('.container')
    let content = document.createElement('div');
    content.classList.add('content');
    let score = document.createElement('div');
    score.classList.add('score');
    let result = document.createElement('div');
    result.classList.add('result');
    let res = document.createElement('div');
    res.classList.add('res');
        let round = 0;
        let COM = 0;
        let player = 0;

        reset.addEventListener('click', () =>{
            round = 0;
            player = 0;
            COM = 0;
            container.replaceChildren("");
        } );

        rock.addEventListener('click', (playerSelection)=>{
                playerSelection = "rock";
                playRound(computerPlay(Math.random()), playerSelection);
            } ); 
        
        paper.addEventListener('click', (playerSelection)=>{
                playerSelection = "paper";
                playRound(computerPlay(Math.random()), playerSelection);
            } ); 
        
        scissors.addEventListener('click', (playerSelection)=>{
                playerSelection = "scissors";
                playRound(computerPlay(Math.random()), playerSelection);
            } ); 

        function computerPlay(computerPlay){ 
            let number = computerPlay * 100; 
            if(number >= 0 && number <= 33){ 
                return "rock"
            }
            else if(number >= 34 && number <=66){
                return "paper";   
            }
            else{
              return  "scissors"  
            }
        }

        function playRound(computer, human){
        if(player < 5 && COM < 5){
            if (computer === "rock" && human === "rock"){
                content.textContent = "It's a tie";
                container.appendChild(content);
                player = player + 1;
                COM = COM + 1;
                round++;
                score.textContent = `COM ${COM} - You ${player}`;
                container.appendChild(score);
        }
            else if (computer === "rock" && human === "paper"){
                content.textContent = "You won! Paper beats Rock";
                container.appendChild(content);
                player = player + 1;
                round++;
                score.textContent = `COM ${COM} - You ${player}`;
                container.appendChild(score);
        }
            else if(computer === "rock" && human === "scissors"){
                content.textContent = "You lost! Rock beats Scissors";
                container.appendChild(content);
                COM = COM + 1;
                round++;
                score.textContent = `COM ${COM} - You ${player}`;
                container.appendChild(score);
        }

            else if (computer === "paper" && human === "rock"){
                content.textContent = "You lost! Paper beats Rock";
                container.appendChild(content);
                COM = COM + 1;
                round++;
                score.textContent = `COM ${COM} - You ${player}`;
                container.appendChild(score);
        }
            else if(computer === "paper" && human === "paper"){
                content.textContent = "It's a tie";
                container.appendChild(content);
                player = player + 1;
                COM = COM + 1;
                round++;
                score.textContent = `COM ${COM} - You ${player}`;
                container.appendChild(score);
        }
            else if(computer === "paper" && human === "scissors"){
                content.textContent = "You won! Scissors beats Paper";
                container.appendChild(content);
                player = player + 1;
                round++;
                score.textContent = `COM ${COM} - You ${player}`;
                container.appendChild(score);
        }
            else if(computer === "scissors" && human === "rock"){
                content.textContent = "You won! Rock beats Scissors";
                container.appendChild(content);
                player = player + 1;
                round++;
                score.textContent = `COM ${COM} - You ${player}`;
                container.appendChild(score);
        }
            else if(computer === "scissors" && human === "paper"){
                content.textContent = "You lost! Scissors beats Paper";
                container.appendChild(content);
                COM = COM + 1;
                round++;
                score.textContent = `COM ${COM} - You ${player}`;
                container.appendChild(score);
        }
            else if(computer === "scissors" && human === "scissors"){
                content.textContent = "It's a tie";
                container.appendChild(content);
                player = player + 1;
                COM = COM + 1;
                round++;
                score.textContent = `COM ${COM} - You ${player}`;
                container.appendChild(score);
        }
            if(COM === 5 && COM > player){
                result.textContent = "You lost the game.";
                container.appendChild(result);
        }
            else if(COM === 5 && player === 5 ){
                result.textContent = "Wow! It's a tie. What are the odds?";
                container.appendChild(result);
        }
            else if (player === 5 && player > COM){
                result.textContent = "You won the game!";
                container.appendChild(result);
        }  

    }
    else{
        res.textContent = "Press Reset to play Again";
        container.appendChild(res);
    }
    }