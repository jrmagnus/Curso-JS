function count() {
    var n1 = Number(document.getElementById("txtnum1").value)
    var n2 = Number(document.getElementById("txtnum2").value)
    var s = Number(document.getElementById("txtstp").value)
    var res = document.getElementById("res")
    res.innerHTML = ""

    if (n1 == 0 || n2 == 0) {
        alert("Please input a valid number!")
    } else {
        if (s == 0) {
            alert("Using step 1")
            s = 1
            var count = ''
            var start = ''
            var finsh = ''
        } else {
            if ( n1 < n2 ) {
                var start = n1
                var finsh = n2
                count = start
            } else if ( n1 > n2 ) {
                var start = n2
                var finsh = n1
                count = start
            }
            while ( count < finsh ) {
                var input = document.createElement('span')
                input.innerHTML = (count + " 👉 ")
                res.appendChild(input)
                count = count + s
            }
            if ( count >= finsh ) {
                var input = document.createElement('span')
                input.innerHTML = (count + " 🏁 ")
                res.appendChild(input)
            }
        }
    }
    res.style.textAlign = 'center'
    res.style.backgroundColor = '#5a5353'
    res.style.width = '400px'
    res.style.padding = '10px'
    //res.style.border-radius = '21px'
    res.style.margin = 'auto'
}