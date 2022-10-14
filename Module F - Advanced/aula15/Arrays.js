name = 'Junior'

for (i = 0; i < name.length; i++) {
    console.log(name[i])
}

for (i in name) {
    console.log(name[i])
}
letter = name.indexOf('o')
console.log(letter)