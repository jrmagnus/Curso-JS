function calc() {
    let num = Number(document.getElementById('txtnum').value)
    let res = document.getElementById('res')
    res.innerHTML = ''
    //<select name="table" id="stable" size="10"></select>
    var stable = document.createElement('select')
    res.appendChild(stable)
    stable.setAttribute('size', '10')
    stable.setAttribute('name', 'table')
    stable.setAttribute('id', 'stable')

    for (i = 1; i <= 10; i++) {
        let item = document.createElement('option')
        item.text = `${num} x ${i} = ${num*i}`
        item.value = `tab${i}`
        stable.appendChild(item)
    }
}