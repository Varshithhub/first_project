




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
        resultmsg=`you win ${playerchoice} beats ${arr[index]}`
      }
    else{
        resultmsg = `you lose ${arr[index]} beats ${playerchoice}`
    }  

    document.getElementById("result").innerText = resultmsg;
}