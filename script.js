console.log('Padawans Day 2 ')

const day = new Date().getDay()

console.log(day)

switch (day) {
  case 0:
    console.log('Get ready for class tomorrow')
    break
  case 1:
    console.log('Welcome back to school')
    break
  case 2:
    console.log('happy tues')
    break
  case 3:
    console.log('hump day')
    break
  case 4:
    console.log('intro weekend project')
    break
}

const literalDay = new Date().toString().split(' ')[0]
console.log(literalDay)

switch (literalDay) {
  case 'sun':
    console.log('turn in proj')
    break
  case 'mon':
    console.log('welcome back')
    break
  case 'Tue':
    console.log('tuesday is here')
    break
}

const person = {
  name: 'brandt',
  age: 27,
  favoriteLan: 'python'
}

console.log(person['name'])
console.log(person.age)

for (const k of Object.keys(person)) {
  console.log(k)
  // console.log(person.k)
  console.log(console.log(person[k]))
}

const person2 = {
  name: 'dylan',
  age: 33,
  programming_languages: ['python', 'javaScript/typeScript', 'go'],
  fav_col: 'purple',
  teams: [
    {
      football: 'bears',
      basketball: 'bulls'
    },
    {
      football: 'eagles',
      basketball: 'miami'
    }
  ]
}

const {age, programming_languages} = person2
console.log(age, ' ================ ', programming_languages)
console.log(person2.teams[0].football)

console.log(Object.keys(person2))
console.log(Object.values(person2))

const person2keys = Object.keys(person2)
for (let i = 0; i < person2keys.length; i++) {
  console.log(person2[person2keys[i]])
}

for (const k in person2) {
  if (Array.isArray(person2[k])) {
    console.log(person2[k])
  }
}

const nums = [2,4,5,6,7]

const [two, four, ...restOfNums] = nums

console.log(restOfNums, 'rest of nums')

function loopNums(...nums){
  console.log(nums)
  for(const num of nums){
    console.log(num)
  }
}

loopNums(3,4,5,8)
loopNums(...[3,4,5,2])

function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year

  this.printInfo = function (color) {
    console.log(`
    make : ${this.make}
    model : ${this.model}
    year : ${this.year}
    `)
  }
}

const car = new Car('honda', 'fit', 2008)
console.log(car.make)

car.printInfo('white')

class Human {

  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  printInfo() {
    return `
    name: ${this.name} 
    age: ${this.age}
    gender: ${this.gender}
    `
  }
}

const human = new Human('dylan', 33, 'male')
console.log(human.age)

console.log(human.printInfo())

class Child extends Human {

  constructor(name, age, gender, isWalking) {
    super(name, age, gender)
    this.isWalking = isWalking
  }

  displayIsWalking() {
    return `
     isWalking: ${this.isWalking}
    `
  }
}

const child = new Child('tommy', 2, 'male', true)

console.log(child.gender)

console.log(child.printInfo())

function outer(num) {
  const outerVar = 'outer'
  function inner(num2) {
    console.log(outerVar)
    return num2 + num
  }
  return inner
}

const add10 = outer(10)

console.log(add10(5))
console.log(add10(20))

const add20 = outer(20)


function first(func) {
  func()
  console.log('first func call')
}
function second() {
  console.log('second func call')
}


function firstDelay() {
  setTimeout(() => console.log(1, ' delay'), 2000)
}

firstDelay()
first(second)

function isEvenNumber(num) {
  return new Promise((res, rej) => {
    if (num % 2 === 0) {
      res(num)
    } else {
      rej([false, num])
    }
  })
}


const checkEven = isEvenNumber(10)
console.log(checkEven)

checkEven.then((result) => console.log(`Even number: ${result}`)).catch(error => console.log(`Even number: ${error}`))


isEvenNumber(13)
.then( result => console.log(
  console.log(`Even number: ${result[1]}`)
))
.catch( error => {
  console.log(`Even number : ${error[0]} ${ error[1]}`)
})

const students = [ 'justin', 'parker']

const students2 = [ 'johynny', 'judah', ...students]

console.log(students2)