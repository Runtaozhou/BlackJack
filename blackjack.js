
let cardNum1 
let cardNum2 
let cards
let sum
let hasBlackJack
let isAlive =false
let message = ""
let bestScore=150
let scoreBoxBase = "Your Cash: $"
let scoreBox = document.getElementById("score")
let messageEl =document.getElementById("messages")
let cardBox = document.getElementById("cardDisplay")
let newCardButton = document.getElementById("newCard-btn")
newCardButton.style.display= 'none';
let stopButton = document.getElementById("stop-btn")
stopButton.style.display = 'none';
let startButton = document.getElementById("start-btn")
//set up the card drawings 
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
function startGame(){
    if(bestScore<=0){
        newCardButton.style.display="none"
        stopButton.style.display="none"
        startButton.style.display="none"
        messageEl.textContent="Sorry you don't have any money to play"
        messageEl.style.marginTop="200px"
        cardBox.style.display="none"
    }
    else if(bestScore>=500){
        newCardButton.style.display="none"
        stopButton.style.display="none"
        startButton.style.display="none"
        messageEl.textContent="You have become the richest man in the casino!"
        messageEl.style.marginTop="200px"
        cardBox.style.display="none"
    }
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
