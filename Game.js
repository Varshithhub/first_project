

let userscore;
let roundcount;

function playGame(playerchoice){
    let arr = ["rock" , "paper" , "scissors"];
    const index = Math.floor(Math.random()*arr.length);
    let resultmsg;
    if(playerchoice===arr[index]){
        resultmsg=`It's a Draw! both chose ${playerchoice}`;
    }else if((
        (playerchoice === "rock" && arr[index] === "scissors") ||
        (playerchoice === "paper" && arr[index] === "rock") ||
        (playerchoice === "scissors" && arr[index] === "paper")
      )){
        resultmsg=`you win ${playerchoice} beats ${arr[index]}`;
        userscore++;
      }
    else{
        resultmsg = `you lose ${arr[index]} beats ${playerchoice}`
    }  
    roundcount++;
    document.getElementById("result").innerText = resultmsg;
    document.getElementById("score").innerText = `score : ${userscore}`;
    document.getElementById("round").innerText = `round : ${roundcount}/10`;
    if(roundcount===10){
      endgame();
    }

}

function endgame(){
  const finalmsg = 
        userscore>=6?`Congratulations! You won the game with a score of ${userscore} out of 10!`:
        `Game over! You lost with a score of ${userscore} out of 10.`;
        document.getElementById("result").innerText =finalmsg;
  document.getElementById("resbtn").style.display="block";      
}


function restart(){
  userscore =0 ;
  roundcount=0;
  document.getElementById("resbtn").style.display="none";
}