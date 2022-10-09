function start() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    msg.innerHTML = (`Hour now is ${h}:${m}:${s}`)
    if ( h >= 5 && h <= 12 ) {
        //morning
        img.src = "img/morning.jpg"
        document.body.style.background = '#CBCC8B'
    } else if ( h > 12 && h < 19 ) {
        //afternoon
        img.src = "img/afternoon.jpg"
        document.body.style.background = '#DA5403'
    } else {
        //night
        img.src = "img/night.jpg"
        document.body.style.backgroundColor = '#121212'
    }
}