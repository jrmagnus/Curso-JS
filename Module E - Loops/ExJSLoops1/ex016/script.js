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
        } else {
            if ( n1 < n2 ) {
                res.innerHTML = `Counting: `
                for ( var i = n1; i <= n2; i += s ) {
                    res.innerHTML += `${i}, `
                }
                res.innerHTML += `End!`
            } else if ( n1 > n2 ) {
                res.innerHTML = `Counting: `
                for ( var i = n1; i >= n2; i -= s ) {
                    res.innerHTML += `${i}, `
                }
                res.innerHTML += `End!`
            } else {
                res.innerHTML = "Start and Finish are the same"
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