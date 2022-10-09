var n = Number(prompt("Amount of repeats?"))
var count = n
document.write(`You did ${count} times!`)
while(n > 0){
    if(n == 10){
        alert(`Almost finishing! 😊`)
    }
    alert(`ALERT, more ${n} times`)
    n--
}