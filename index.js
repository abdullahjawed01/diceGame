let dice1 = Math.floor((Math.random()*6) + 1)
let gameDice1 = `/images/dice${dice1}.png`

let img1 = document.querySelector(".img1").setAttribute("src",gameDice1)

let dice2 = Math.floor((Math.random()*6) + 1)
let gameDice2 =  `/images/dice${dice2}.png`

let img2 = document.querySelector(".img2").setAttribute("src",gameDice2)

if (gameDice1>gameDice2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 won"
}else if(gameDice2>gameDice1){
    document.querySelector("h1").innerHTML = "🚩Player 2 won"
}else{
    document.querySelector("h1").innerHTML = "🚩Draw"
}