let number = document.getElementById('numberTextInput')
let logBox = document.getElementById('numberList')
let result = document.getElementById('result')
let values = []

number.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        inputNumber()
      }
})

function inputNumber() {
    if ( !isNumber(number.value) || inList(number.value, values) ) {
        alert(`Invalid value or allready addedd`)
    } else {
        addNumber()
    }
    number.value = ''
    number.focus()
}

function isNumber(n) {
    if ( Number(n) > 0 && Number(n) < 100 ) {
        return true
    } else {
        return false
    }
}

function inList (n, l) {
    if ( l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function addNumber() {
    values.push(Number(number.value))
    let item = document.createElement('option')
    item.text = `Input number ${number.value}`
    item.value = `logNumber${values.length}`
    logBox.appendChild(item)
}

function calcAndOrder() {
    orderValues()
    setMaxMin()
    valuesSum()
    inputResult()
}

function orderValues() {
    values.sort(function(a, b) {
        return a - b
    })
    logBox.innerHTML = ''
    for ( let i = 0; i < values.length ; i++) {
        let item = document.createElement('option')
        item.text = `Input number ${values[i]}`
        item.value = `logNumber${i}`
        logBox.appendChild(item)
    }
}

function setMaxMin () {
    let maxValue = ''
    let minValue = ''
}

function valuesSum () {
    let valuesSum = 0
    for( i = 0; i < values.length; i++ ) {
        valuesSum += values[i]
    }
}

function inputResult() {
    //todo
}