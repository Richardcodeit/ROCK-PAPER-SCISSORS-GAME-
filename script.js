let Items =["SCISSORS","PAPER","ROCK"]
let COMPUTER = document.getElementById("computer")
let HUMAN = document.getElementById("human")
let RESULT = document.getElementById("result")
let SCISSSORS = document.getElementById("scissors")
let ROCK = document.getElementById("rock")
let PAPER = document.getElementById("paper")
let RESET= document.getElementById("reset")


function getItem(){
    let ITEMS = Math.floor(Math.random()*3)
    return(Items[ITEMS])
}
let answer = getItem()

function resultChecker(user, computer){
    if (user === computer){
        RESULT.innerHTML = "IT IS A TIE"
    }
    else if (user=== "SCISSORS" && computer==="PAPER"){
        RESULT.innerHTML ="YOU WIN!"
    }
    else if (user=== "ROCK" && computer==="SCISSORS"){
        RESULT.innerHTML ="YOU WIN!"
    }
    else if (user=== "PAPER" && computer==="ROCK"){
        RESULT.innerHTML ="YOU WIN!"
    }
    else{
        RESULT.innerHTML = "COMPUTER WINS !!!"
    }
}
SCISSSORS.addEventListener("click", function(){
    let user = "SCISSORS"
    resultChecker(user, answer)
    HUMAN.innerHTML="YOU: " + "SCISSORS"
    COMPUTER.innerHTML="COMPUTER: " + answer
})
ROCK.addEventListener("click", function(){
    let user = "ROCK"
    resultChecker(user, answer)
    HUMAN.innerHTML="YOU: " + "ROCK"
    COMPUTER.innerHTML="COMPUTER: " + answer
    answer.style.backgroundColor="white"
})
PAPER.addEventListener("click", function(){
    let user = "PAPER"
    resultChecker(user, answer)
    HUMAN.innerHTML="YOU: " + "PAPER"
    COMPUTER.innerHTML="COMPUTER: " + answer
})
RESET.addEventListener("click", function(){
    RESULT.innerHTML=" "
    HUMAN.innerHTML="YOU: " 
    COMPUTER.innerHTML="COMPUTER: "
    answer = getItem()

    if (event.target !== RESET){
     answer= getItem()
    }
})

