function inputNumber() {
    
    let values = []
    let number = Number(document.getElementById('numberTextInput').value)
    let logBox = document.getElementById('numberList')

    function isNumber(n) {
        if ( n > 0 && n < 100 ) {
            return true
        } else {
            return false
        }
    }

    function inList (n, l) {
        if ( l.indexOf(number) != -1 ) {
            return true
        } else {
            return false
        }
    }
    
    if ( !isNumber(number) || inList(number, values) ) {
        alert("Invalid value or allready addedd")
    } else {
        let item = document.createElement('logNumber')
        item.text = `Input number ${number}`
        item.value = `logNumber${i}`
        logBox.appendChild(item)
    }
}