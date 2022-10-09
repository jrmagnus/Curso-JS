function check() {
    var date = new Date() //get today date
    var dy = date.getFullYear() //get today year
    var by = document.getElementById("txtyear") //get birth year
    var res = document.querySelector('div#res') //placehold result to fill
    by = Number(by.value) //change string to number
    if (by == 0 || by > dy) { //check for a valid year number
        alert("Please input a valid year!")
    } else {
        var age = dy - by
        var sex = document.getElementsByName('radsex')
        var gen = ''
        var img = document.createElement('img') //create a IMG element in HTML
        img.setAttribute('id', 'pict')
        img.setAttribute('width', '250px')
        if (sex[0].checked) { //check selected gender
            gen = 'Men'
            if (age < 5) { //baby
                img.setAttribute('src', 'img/m-baby.jpg')
            } else if (age < 13) { //child
                img.setAttribute('src', 'img/m-child.jpg')
            } else if (age < 22) { //young
                img.setAttribute('src', 'img/m-young.jpg')
            } else if (age < 45) { //adult
                img.setAttribute('src', 'img/m-mid.jpg')
            } else { //old
                img.setAttribute('src', 'img/m-old.jpg')
            }
        } else if (sex[1].checked) { //check selected gender
            gen = 'Woman'
            if (age < 5) { //baby
                img.setAttribute('src', 'img/w-baby.jpg')
            } else if (age < 13) { //child
                img.setAttribute('src', 'img/w-child.jpg')
            } else if (age < 22) { //young
                img.setAttribute('src', 'img/w-young.jpg')
            } else if (age < 45) { //adult
                img.setAttribute('src', 'img/w-mid.jpg')
            } else { //old
                img.setAttribute('src', 'img/w-old.jpg')
            }
        } else {
            alert("Please select a gender!") //Error to select
            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detected a ${gen}, with ${age} years`
        res.appendChild(img)
    }
}