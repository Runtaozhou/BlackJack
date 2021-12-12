//create the first two numbers for first two cards  
let cardNum1 
let cardNum2 
// this will be the array that keep track of the current cards you have 
let cards
// sum the value of your cards 
let sum
//boolean variable that indicates if you have a blackjack or not 
let hasBlackJack
//indicates if you are still in the game or not 
let isAlive =false
// messages that is going to be printed on the screen 
let message = ""
// the initial cash you have is 150 dollars 
let bestScore=150
let scoreBoxBase = "Your Cash: $"
// the initial html elements
let scoreBox = document.getElementById("score")
let messageEl =document.getElementById("messages")
let cardBox = document.getElementById("cardDisplay")
// the initial buttons 
// before we start the game, I have to hide the stop and draw card button
let newCardButton = document.getElementById("newCard-btn")
newCardButton.style.display= 'none';
let stopButton = document.getElementById("stop-btn")
stopButton.style.display = 'none';
let startButton = document.getElementById("start-btn")
//set up the card drawings one card number corresponding to their images 
function printCard(cardNumber){
    let pokercard = ""
    if(cardNumber===1){
        pokercard = "🂡"
    }
    else if(cardNumber===2){
        pokercard = "🂢"
    }
    else if(cardNumber===3){
        pokercard = "🂣"
    }
    else if(cardNumber===4){
        pokercard = "🂤"
    }
    else if(cardNumber===5){
        pokercard = "🂥"
    }
    else if(cardNumber===6){
        pokercard = "🂦"
    }
    else if(cardNumber===7){
        pokercard = "🂧"
    }
    else if(cardNumber===8){
        pokercard = "🂨"
    }
    else if(cardNumber===9){
        pokercard = "🂹"
    }
    else if(cardNumber===10){
        pokercard = "🂺"
    }
    else if(cardNumber===11){
        pokercard = "🂻"
    }
    else if(cardNumber===12){
        pokercard = "🂽"
    }
    else if(cardNumber===13){
        pokercard = "🂾"
    }
    return pokercard

}
// there are special cases in term of how to calcualte the value based on the card 
function getCardValue(value){
    if(value===1){
        return 11
    }
    if(value>10){
        return 10
    }
    else{
        return value
    }
}
// this function is linked to the new game button
function startGame(){
    // if we don't have any money. then the game terminates. You lost. 
    if(bestScore<=0){
        newCardButton.style.display="none"
        stopButton.style.display="none"
        startButton.style.display="none"
        messageEl.textContent="Sorry you don't have any money to play"
        messageEl.style.marginTop="200px"
        cardBox.style.display="none"
    }
    // if you have more than 500 dollars then you have reached your goal and the games terminates as well 
    else if(bestScore>=500){
        newCardButton.style.display="none"
        stopButton.style.display="none"
        startButton.style.display="none"
        messageEl.textContent="You have become the richest man in the casino!"
        messageEl.style.marginTop="200px"
        cardBox.style.display="none"
    }
    // other wise we will render the game and do the inital setup for the game. 
    else{
        cardNum1 = getRandom()
        cardNum2 = getRandom()
        sum = getCardValue(cardNum1)+getCardValue(cardNum2)
        cards = [cardNum1,cardNum2]
        cardBox.textContent =""
        hasBlackJack=false
        isAlive=true
        gameStarted =true
        console.log(cards)
        console.log(sum)
        scoreBox.textContent = scoreBoxBase+bestScore
        startButton.style.display = 'none';
        newCardButton.style.display = 'initial';
        stopButton.style.display = 'initial';
        renderGame()
    }
    
}
// this function renders the game and make sure to give or take money from the user based on their sumed value 
function renderGame(){
    for(i=0;i<cards.length;i++){
        cardBox.textContent = cardBox.textContent+printCard(cards[i])
    }
    if(sum<=20){
        message="do you want to draw another card?"
        
    
    }
    else if(sum ===21){
        message ="you've got blackjack!"
        hasBlackJack=true
        startButton.style.display = 'initial';
        startButton.style.marginTop = "5px";
        bestScore+=50
        scoreBox.textContent = scoreBoxBase+bestScore
        newCardButton.style.display = 'none';
        stopButton.style.display = 'none';
    
    }
    else{
        message = "you are out of the game!"
        isAlive= false
        startButton.style.display = 'initial';
        startButton.style.marginTop = "5px";
        bestScore-=30
        scoreBox.textContent = scoreBoxBase+bestScore
        newCardButton.style.display = 'none';
        stopButton.style.display = 'none';

    }
    
    messageEl.textContent = message
}
// this function generates new cards randomly 
function newCard(){
        let newcard = getRandom()
        sum+=getCardValue(newcard)
        cards.push(newcard)
        console.log(cards)
        console.log(sum)
        cardBox.textContent =""
        renderGame()
    
}

function getRandom(){
    return Math.floor(Math.random()*13)+1

}
// for stop function, we have to give or take money from the user depend on their sumed total from their hands. 
function stop(){
    
        if(sum===20){
        bestScore+=40
        scoreBox.textContent = scoreBoxBase+bestScore
        console.log("best score: "+bestScore)
    }
    else if(sum===19){
        bestScore+=30
        scoreBox.textContent = scoreBoxBase+bestScore
        console.log("best score: "+bestScore)
    }
    else if(sum===18){
        bestScore+=20
        scoreBox.textContent = scoreBoxBase+bestScore
        console.log("best score: "+bestScore)
    }
    else if(sum===17){
        bestScore+=10
        scoreBox.textContent = scoreBoxBase+bestScore
        console.log("best score: "+bestScore)
    }
    else{
        bestScore-=15
        scoreBox.textContent = scoreBoxBase+bestScore
        console.log("best score: "+bestScore)
    }
    // scoreBox.textContent = scoreBoxBase+scoreArray[scoreArray.length-1]
    startGame()

    
    
    
    
}
