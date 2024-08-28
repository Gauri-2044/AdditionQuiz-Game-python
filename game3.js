let wish = document.querySelector(".wish");
let winner = document.querySelector("#winner");
let score = document.querySelector("#score");

let youScore = document.querySelector("#you");
let compScore = document.querySelector("#comp");

if(Number(youScore)>Number(compScore)){
    winner.innerText = "YUO WINS !!";
    score.innerText = `Your score is ${youScore}`;
}
else if (Number(youScore)<Number(compScore)){
    winner.innerText = "YUO LOSES !!";
    score.innerText = `Your score is ${youScore}`;
}
else{
    winner.innerText = "TIE UP !!";
    score.innerText = `Your score is ${youScore}`;
}