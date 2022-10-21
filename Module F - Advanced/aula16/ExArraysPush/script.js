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
        result.innerHTML = ''
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
    if (values.length == 0) {
        alert("Please input any value")
    } else {
        orderValues()
        inputResult()
    }
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

function inputResult() {
    let maxValue = values[values.length -1]
    let minValue = values[0]
    let sumValue = values.reduce((a, b) => a + b, 0)
    let medValue = sumValue / values.length
    result.innerHTML += "<p>You have " + (values.length) + " values,</p>"
    result.innerHTML += "<p>Maximum value is :" + maxValue + " </p>"
    result.innerHTML += "<p>Minimum value is :" + minValue + " </p>"
    result.innerHTML += "<p>Median of values is :" + medValue.toFixed(2) + " </p>"
    result.innerHTML += "<p>Sum of values is :" + sumValue + " </p>"
}