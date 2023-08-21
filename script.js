

function getComputerChoice(){
    var r = Math.floor(Math.random()*3);
    if (r == 0) return "rock";
    if (r == 1) return "paper";
    if (r == 2) return "scissors";
}

function playRound(pS, cS){
    pS = pS.toLowerCase();
    if (pS == cS) return "Its a draw! Both players chose "+pS;
    else if ((pS == "rock" && cS == "paper") || (pS == "paper" && cS == "scissors") || (pS == "scissors"  && cS == "rock"))
         return "Computer wins! "+cS+" beats "+pS;
    else return "You win! "+pS+" beats "+cS;
}


let p = 0;
let c = 0;

function updateScore(){
    document.querySelector(".score").innerHTML = "Player: "+p.toString() + "      Computer: "+c.toString();
}

function playRound2(e){
    const result = playRound(e.srcElement.id,getComputerChoice());
    document.querySelector(".results").innerHTML =result;
    if (result.includes("You win")){
        p += 1;
    }
    if (result.includes("Computer")){
        c += 1;
    }

    updateScore();

    if (p == 5 && c == 5){
        document.querySelector(".score").innerHTML = "Tie! reseting...";   
        p = 0;
        c = 0;
    }
    if (p == 5){
        document.querySelector(".score").innerHTML = "Player won 5 rounds! reseting...";   
        p = 0;
        c = 0;
    }
    if (c == 5){
        document.querySelector(".score").innerHTML = "Computer won 5 rounds! reseting...";
        p = 0;
        c = 0;   
    }
}

const btns = document.querySelectorAll(".btn");
btns.forEach(element => element.addEventListener("click",playRound2));
