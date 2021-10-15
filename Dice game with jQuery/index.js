function getRandomNumber(){
   return Math.floor(Math.random()*6)+1;
}

$(".myButton").click(function(){
    let dice1 = getRandomNumber() 
    let dice2 = getRandomNumber()
    let resultStr = "";
    $(".img1").attr("src", "images/dice" + [dice1] +".png")
    $(".img2").attr("src", "images/dice" + [dice2] +".png")
    if (dice1 > dice2){
        resultStr = "🚩 Play 1 Wins!";
    }
    else if (dice2 > dice1){
        resultStr = "Player 2 Wins! 🚩";
    }
    else{
        resultStr = "Draw!"
    }
    
    $("h1").text(resultStr);   

})



