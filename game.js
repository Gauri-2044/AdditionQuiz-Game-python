// //demonstrate the mode of document 
// let body = document.querySelector("body")
// let mode = "dark";
// let innerMode = document.querySelector("#innerMode");
// let modeE = innerMode.addEventListener("click",() => {
//     if(mode=="light"){
// body.style.backgroundColor="pink"
// innerMode.style.backgroundColor="white"
// mode="dark"
//     }
//     else{
//         body.style.backgroundColor="crimson"
//         innerMode.style.backgroundColor="blue"
//         mode="light" 
//     }
// })

// //demonstrate the actual game between you and computer
// let userInput;
// let compInput;
// let btnR=document.querySelector("#rock") 
// let btnP=document.querySelector("#paper") 
// let btnS=document.querySelector("#scissor") 
// let result = document.querySelector(".result")

// btnR.addEventListener("click",()=>{
//     userInput = "rock"
// })
// btnP.addEventListener("click",()=>{
//     userInput = "paper"
// })
// btnS.addEventListener("click",()=>{
//     userInput = "scissor"
// })

// let comp = ["rock","paper","scissor"]
// let indx = Math.ceil(Math.random()*2)
// console.log(indx)
// compInput=comp[indx]
// console.log(compInput)

// if(userInput=="scissor" && compInput=="paper"){
//     result.innerText="You wins , Scissor cuts the paper"
// }
// else if(userInput=="rock" && compInput=="paper"){
//     result.innerText="computer wins , Paper wraps the rock"
// }
// else if(userInput=="rock"&& compInput=="scissor"){
//     result.innerText="You win , rock beats the scissor"
// }
// else if (userInput=="paper"&& compInput=="rock"){
//     result.innerText="You wins , Paper wraps the rock"
// }
// else if (userInput=="paper" && compInput=="scissor"){
//     result.innerText="computer wins , Scissor cuts the paper"
// }
// else if(userInput=="scissor" && compInput=="rock"){
//     result.innerText="Computer wins , rock beats the scissor"
// }
// else{
//     result.innerText="Tie UP"
// }



let body = document.querySelector("body");
let mode = "dark";
let innerMode = document.querySelector("#innerMode");
innerMode.addEventListener("click", () => {
    if (mode === "light") {
        body.style.backgroundColor = "pink";
        innerMode.style.backgroundColor = "white";
        mode = "dark";
    } else {
        body.style.backgroundColor = "crimson";
        innerMode.style.backgroundColor = "blue";
        mode = "light"; 
    }
});

let userInput;
let compInput;
let btnR = document.querySelector("#rock");
let btnP = document.querySelector("#paper");
let btnS = document.querySelector("#scissor");
let result = document.querySelector(".result");
let youScore = document.querySelector("#you");
let compScore = document.querySelector("#comp");

btnR.addEventListener("click", () => {
    userInput = "rock";
    playGame();
});
btnP.addEventListener("click", () => {
    userInput = "paper";
    playGame();
});
btnS.addEventListener("click", () => {
    userInput = "scissor";
    playGame();
});

function playGame() {
    let comp = ["rock", "paper", "scissor"];
    let indx = Math.floor(Math.random() * 3);
    compInput = comp[indx];

    if (userInput === "scissor" && compInput === "paper") {
        result.innerText = "You win, Scissor cuts the paper.";
        result.style.backgroundColor="green";
        youScore.innerText=Number(youScore.innerText)+1;
    } 
    else if (userInput === "rock" && compInput === "paper") {
        result.innerText = "Computer wins, Paper wraps the rock.";
        result.style.backgroundColor="red";
        compScore.innerText =Number(compScore.innerText)+1;
    } 
    else if (userInput === "rock" && compInput === "scissor") {
        result.innerText = "You win, Rock beats the scissor.";
        result.style.backgroundColor="green";
        youScore.innerText=Number(youScore.innerText)+1;
    }
     else if (userInput === "paper" && compInput === "rock") {
        result.innerText = "You win, Paper wraps the rock.";
        result.style.backgroundColor="green";
        youScore.innerText=Number(youScore.innerText)+1;
    }
     else if (userInput === "paper" && compInput === "scissor") {
        result.innerText = "Computer wins, Scissor cuts the paper.";
        result.style.backgroundColor="red";
        compScore.innerText =Number(compScore.innerText)+1;
    } 
    else if (userInput === "scissor" && compInput === "rock") {
        result.innerText = "Computer wins, Rock beats the scissor.";
        result.style.backgroundColor="red";
        compScore.innerText =Number(compScore.innerText)+1;
    } 
    else {
        result.innerText = "Tie!";
        result.style.backgroundColor="blue";
    }
}

