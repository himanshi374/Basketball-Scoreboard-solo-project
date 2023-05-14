let scorehomeEl = document.getElementById("score-home-el")
let scoreguestEl = document.getElementById("score-guest-el")

let counthome = 0
let countguest = 0
 
function freethrowhome(){
    counthome = counthome + 1
    scorehomeEl.textContent = counthome
}
function midrangehome(){
    counthome = counthome + 2
    scorehomeEl.textContent = counthome
}
function longthreehome(){
    counthome = counthome + 3
    scorehomeEl.textContent = counthome
}
function freethrowguest(){
    countguest = countguest + 1
    scoreguestEl.textContent = countguest
}
function midrangeguest(){
    countguest = countguest + 2
    scoreguestEl.textContent = countguest
}
function longthreeguest(){
    countguest = countguest + 3
    scoreguestEl.textContent = countguest
}



