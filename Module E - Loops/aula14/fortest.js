function forloop() {
    var qtd = Number(document.getElementById("txtbrk").value)
    //alert(qtd)
    var res = document.getElementById("res")
    res.innerHTML = ""
    for ( var i = 0; i < qtd; i++) {
        var img = document.createElement('img') //create a IMG element in HTML
        img.setAttribute('src', 'img/brick.png')
        img.setAttribute('id', 'pict')
        img.setAttribute('width', '30px')
        res.appendChild(img)
    }
    res.style.textAlign = 'center'
}