let person = {
    name: `Junior`,
    birthday: [1989, 02, 19],
    calcage(){
       date = new Date()
       year = date.getFullYear()
       month = date.getMonth() + 1
       day = date.getDate()
       if (month < this.birthday[1]) {
        age = year - this.birthday[0] - 1
       } else {
           age = year - this.birthday[0]
       }
       return age
    },
}

var age = person.calcage()
console.log(`The person named ${person.name} has ${age} year old.`)