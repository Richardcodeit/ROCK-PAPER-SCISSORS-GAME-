let Items =["SCISSORS","PAPER","ROCK",]
let COMPUTER = document.getElementById("computer")
let HUMAN = document.getElementById("human")
let RESULT = document.getElementById("result")
let SCISSSORS = document.getElementById("scissors")
let ROCK = document.getElementById("rock")
let PAPER = document.getElementById("paper")
let RESET= document.getElementById("reset")
let computerCount = document.querySelector(".computer-score")
let humanCount = document.querySelector(".human-score")
let group = document.getElementById("getscore")
let Humanscore = -1;
let Computerscore = -1;
function gotscorehuman(){
    Humanscore +=1;
}
function gotscoreComputer(){
    Computerscore +=1;

}
let GCS = gotscoreComputer()
let GSH = gotscorehuman()
function getItem(){
    let ITEMS = Math.floor(Math.random()*3)
    return(Items[ITEMS])
}
let answer = getItem()

function resultChecker(user, computer){
    if (user === computer){
        RESULT.innerHTML = "IT IS A TIE REPLAY !!!"
       
    }
    else if (user=== "SCISSORS" && computer==="PAPER"){
        RESULT.innerHTML ="YOU WIN !!!"
        GSH = gotscorehuman()
        humanCount.innerHTML = "YOU :" + Humanscore

    }
    else if (user=== "ROCK" && computer==="SCISSORS"){
        RESULT.innerHTML ="YOU WIN !!!"
        GSH = gotscorehuman()
        humanCount.innerHTML = "YOU :" + Humanscore
    }
    else if (user=== "PAPER" && computer==="ROCK"){
        RESULT.innerHTML ="YOU WIN !!!"
        GSH = gotscorehuman()
        humanCount.innerHTML = "YOU :" + Humanscore
    }
    else{
        RESULT.innerHTML = "COMPUTER WINS !!!"
        GCS = gotscoreComputer()
        computerCount.innerHTML = "COM :" + Computerscore
    }
}
SCISSSORS.addEventListener("click", function(){
    let user = "SCISSORS"
    resultChecker(user, answer)
    HUMAN.innerHTML="YOU: " + "SCISSORS"
    COMPUTER.innerHTML="COMPUTER: " + answer
    answer = getItem()

})
ROCK.addEventListener("click", function(){
    let user = "ROCK"
    resultChecker(user, answer)
    HUMAN.innerHTML="YOU: " + "ROCK"
    COMPUTER.innerHTML="COMPUTER: " + answer
    answer = getItem()
})
PAPER.addEventListener("click", function(){
    let user = "PAPER"
    resultChecker(user, answer)
    HUMAN.innerHTML="YOU: " + "PAPER"
    COMPUTER.innerHTML="COMPUTER: " + answer
    answer = getItem()

})
RESET.addEventListener("click", function(){
    RESULT.innerHTML=" "
    HUMAN.innerHTML="YOU: " 
    COMPUTER.innerHTML="COMPUTER: "
    answer = getItem()
   Humanscore = 0;
   Computerscore = 0;
   humanCount.innerHTML = "YOU :" + 0
   computerCount.innerHTML = "COM :"+ 0 
    if (event.target !== RESET){
     answer= getItem()
    }
})

