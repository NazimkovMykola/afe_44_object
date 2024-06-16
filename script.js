// примітивні типи данних 

// не примітивні типи (складного типу) - завжди копіюються за посиланням
const arr1 = ['one']
const arr2 = arr1

arr2[0] = 'two'

console.log(arr1)
//об'єкти - це аналог фізичних предметів
// за допомогою літералу об'єкту
// ключ:значення(key:value)

const pen = {
    color:'white', 
    diametr: 10, 
    length: 50, 
    colorText:'blue'
}
// через ключове слово new 
const newObj = new Object({id:20})

console.log(pen.diametr)

const d = 'diametr'
console.log(pen[d])

//Object.keys, Object.values
console.log(Object.keys(pen))
console.log(Object.values(pen))

Object.keys(pen).forEach(key => {
    console.log(key, ':', pen[key])
})

// for in
for(let key in pen) {
     console.log(key, ":", pen[key])
}

const user = {}
user.name = 'Mykola'
user.name = "Ivan"
user.name = "Artem"
user.name = "Andrew"


console.log(user.name)

// JSON - js object notation

// JSON.parce() JSON.stringify()

const user2 = {
    id: 15415,
    name: 'Ivan', 
    age: 16, 
    isTeacher: false,
    length: function() {
        return 4
    }
}

localStorage.setItem('user', JSON.stringify(user2))

console.log( JSON.parse(localStorage.getItem('user')))

user2.greeting()

//всі елементи в JS є об'єктами

const string = "tEst"
console.log(string.length)
console.log(string.toLocaleLowerCase())
console.log(string.toLocaleUpperCase())
console.log(string[1])

//Symbol - унікальні символи

const id = new Symbol('id')
const testObj = {
    id: 15555
}
testObj.id = 1111
