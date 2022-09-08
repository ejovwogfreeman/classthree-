// comment
//asdfghjkl;'

// data types
// primitive data type
// reference data type

// number, string, boolean, undefined, null
// array, object, function

// variable
// var, let, const

// let name = 'godbless';
// let age = 55;

// let mes = name + ' is ' + age + ' years old' 

// let mes = "freemn's theorem is the best"

// let mes = 'screamed "whooa" when she saw her daughter'

// let mes = `freeman's model is the best and they screamed "whoaa" whem they heard of it`

// console.log(mes)


// operators
// arithemetic operators +, -, *, /, %
// assigment operators =, +=, -=, *=, /=, %=
// comparism operators ==, ===, !=, !==, >, <, >=, <=,
// logical operators &&, ||, ! 
// ternary operators (condtional operators) ?, :
// unary operators e.g -5, +3, ++, -- etc


// var x = 5;
// var y = 20
// let y = 8 
// y = y + 5
// y %= 5

// let y = 5
// let x = 3

// let x = true;

// let name = 'godbless'
// let name2 = 'lancelot' 

// console.log( name2.length !== '8' )

// let x = 3;
// let y = 5; 
// let name = 'godbless'

// if(x === 3) {
//     console.log('false')
// }else {
//     console.log('true')
// }


// for(let i =0; i<20; i++) {
    // console.log(i)
    // if(i%2===0){
    //     console.log(i)
    // }
    // if(i%2!==0) {
    //     console.log(i)
    // }
// }

// string

// let name = `ejvowo godbless`
// console.log(name)

// let name = 'staywell'

// console.log(name.length)
// console.log(name[name.length-1])

// let name = 'fodbless'

// name.push('g')

// console.log(name.replace('f', 'g'))

// console.log(nName)

// console.log(name)

// let name = 'godbless';

// let name2 = 'FREEMAN' 

// console.log(name.toUpperCase())
// console.log(name2.toLowerCase())

// let names = ['mt', 'gb', 'pl', 'js']

// names.push('rita')

// console.log(names)


// string properties => length
// string methods => toUpperCase(), toLowerCase(), replace(), split(), concat(), trim(), includes(), padStart(), padEnd(), charAt(), indexOf()

// let email = 'ejovwogfreeman007@gmail.com'

// let userName = email.split('@')[0]

// console.log(userName)

// let name = 'ejovwo'
// let surname = 'godbless' 
// let midname = 'lancelot'

// let fullname = name.concat(' ', surname, ' ' , midname)

// console.log(fullname)


// let sentence = 'microsoft is the best company'

// console.log(sentence.replace('microsoft', 'a1tech'))

// console.log(sentence.includes('microsoft'))

// let name = 'm               i am a boy    '

// console.log(name.trim())


// let num = "pg"

// let numpad = num.padEnd(5, "x")

// console.log(numpad)

// let name = 'godbless'

// console.log(name.charAt(name.length-1))

// console.log(name.indexOf('g'))


// let name = 'godbless'

// let x = name.slice(0, 3)
// let y = name.substring(0, 3)
// let z = name.substr(0, 3)

// console.log(name.slice(0, 3))
// console.log(name.substring(0, 3))
// console.log(name.substr(0, 3))

// let sentence = 'everyone said today was a great day at work'

// console.log(sentence.slice(14, 35))
// console.log(sentence.slice(0, 36))

// let x = sentence.split(' ')
// console.log(`${x[2]} ${x[3]} ${x[4]} ${x[5]} ${x[6]}`)

// console.log(x.slice(2, 7).join(' '))

// let x = 'macmillian'

// console.log(x.lastIndexOf('i'))
// console.log(x.indexOf('i'))

// let name = 'godbless'
// let surname = 'ejovwo'
// let day = 'today' 

// let sentence =  `i sad she's a great man "whooooaaa" ` 
// let sentence = name + ' ' + surname + " is a good boy " + day

// let sentence = `${name} ${surname} is a good boy ${day}`

// let sentence = `
//     the 
//     boy 
//     is great
// `

// console.log(sentence)

// let x = 5;

// let y = x.toString()

// console.log(y)
// console.log(x)


// console.log(typeof(y))


// let students = ['gb', 'mt', 'pl', 'js', true, ['freeman', 'lancelot'], 33]

// console.log(typeof(students))
// console.log(Array.isArray(students))
// console.log(students.length)
// console.log(students[students.length-1])
// students[0] = 'godbless'
// console.log(students[5][0][1])

// array methods => pop, push

// let students = ['gb', 'mt', 'pl', 'js']

// students.pop()
// students.push('rita')
// students.push('elijah')
// students.push('mark', 'powells', 'chronicles')
// students.unshift('merlin', 'lancelot', 'arthur')
// students.shift('merlin')
// students[6] = 'eli eli';

// console.log(students)

// for loop

// for(i=0; i<=10; i++) {
//     console.log(i)
// }

// let students = ['gb', 'mt', 'pl', 'js']

// students.push('bb', 'tyga', 'lil wayne')
// students.pop()


// console.log(students)

// for(let i=0; i<students.length; i++) {
//     console.log(students[i])
// }


// let students = [4, 20, 3, 8, 33, 27]

// let add = 0;

// for(let i=0; i<students.length; i++) {
//     add += students[i]
// }

// console.log(add)

// let add = students.reduce((a,b)=> a*b, 1)

// console.log(add)

// let sorted = students.sort((a,b)=> a-b)

// console.log(sorted)

// let students = ['jeremiah', 'matt', 'pls', 'jsh', 'elijah', 'rita']


// let sliced = students.slice(1, 4)
// console.log('---------------------------------------\nbefore slice ')
// console.log(sliced)
// console.log(students)
// console.log('after slice \n ---------------------------------------\n\n')


// console.log('---------------------------------------\nbefore splice')
// let spliced = students.splice(1, 3)
// console.log(spliced)
// console.log(students)
// console.log('after splice \n ---------------------------------------')


// slice => start and position
// splice => start and length


// let spliced = students.splice(5, 0, 'freeman')
// console.log(spliced)
// console.log(students)

// let result = ['A','B', 'C', 'A', 'F', 'A']

// console.log(result.filter((x)=> x !== 'F'))

// console.log(result.filter(function(x){
//     if(x !== 'F') {
//         return true;
//     }
// }))

// objects
// function
// conditionals(if, else if, else and switch statement)
// loops (for, while)
// higher order array method
// oop (funtions methods and classes and prototype methods)

// let nums = [20, 54, 78, 82]

// console.log(nums.reduce((a, b)=> a + b))

// let sum = 0;

// for(let i=0; i<nums.length; i++) {
//     sum = sum + nums[i]
// }

// console.log(sum)

// let car = {
//     model
// }


// let student = {
//     name: 'jeremiah', 
//     surname: 'osagie', 
//     gender: 'Male', 
//     class: 'ss3'
// }

// console.log(student["gender"])
// console.log(student.class)

// student.name = 'maxwell'
// student.staus = 'married'
// student.isAdmin = true
// student.hobby = 'dancing'

// console.log(student)

// let student = {
//     name: 'rita', 
//     surname: 'frank', 
//     gender: 'female', 
//     class: '400L', 
//     hobby: ['singing', 'cooking', 'coding'], 
//     children: [
//         {
//             name: 'mark', 
//             age: 3
//         }, 
//         {
//             name: 'mirabella', 
//             age: 2
//         }
//     ], 
//     address: {
//         state: 'delta', 
//         country: 'nigeria', 
//         street: '1st lane road'
//     }
// } 

// console.log(student.hobby[1][student.hobby[1].length-1])
// console.log(student.address.street.split(' ')[2])
// console.log(student.address.country)
// console.log(student.children[1].name[student.children[1].name.length-1])
// student.children.push({name: 'osas', age: '1'})
// student.children.shift()
// student.children.splice(1, 0, {name: 'john', age: 2.5})
// console.log(student.children)
// console.log(student)


// functions functionName(){
//     codeblock;
// } 

// function hello() {
//     console.log('hello john')
// }

// hello()

// function greet(){
//     console.log('good morinig sir')
//     // alert('good morinig sir')
// }

// greet()

// function greet(name, time) {
//     console.log(`good ${time} ${name}, welcome`)
// }

// greet('godbless', 'afternoon')

// function greet(name='godbless', time="morning") {
//     console.log(`good ${time} ${name}, welcome`)
// }

// greet('freeman', 'afternoon')

// function greet(name='godbless', time="morning") {
//     return `good ${time} ${name}, welcome`
// }

// console.log(greet('freeman', 'afternoon'))

// function clacArea(radius=1) {
//     let value = 3.14 * (radius)**2
//     return value
// }

// let area;

// area = clacArea()

// console.log('the area is: ' + area)


// function aor(l=1, b=1) {
//     return l * b
// }

// let area; 

// area = aor(6, 3)

// console.log(area)


// function toCelcius(far) {
//     let val = 5/9
//     let diff = far - 32
//     let cel = val * diff
//     return cel;
// }

// let celcius = toCelcius(209)

// console.log(celcius)

// function clacArea(a, b, c){
//     let s = (a+b+c)/2
//     let area = (s*(s-a)*(s-b)*(s-c))**0.5
//     return area;
// }

// let triangle = clacArea(6, 9, 7)

// console.log(triangle)


// conditionals

// let color = 'red';

// console.log(color==='red' ? 'the color is red' : 'the color is not red')

// if(color==='red') {
//     console.log('the color is red')
// }else {
//     console.log('the color is not red')
// }

// let age = 20;

// if(age < 20) {
//     console.log('you are too young')
// }

// let age = 20;

// if(age == 20) {
//     console.log('you are too young')
// }else {
//     console.log('congrats')
// }


// let color = 'indigo';

// if(color==='red') {
//     console.log('danger')
// }else if(color==='green'){
//     console.log('success')
// }else if(color==='blue'){
//     console.log('primary')
// }else if(color==='yellow'){
//     console.log('warning')
// }else {
//     console.log('not a match')
// } 


// let color = 'indix';

// switch(color){
//     case 'red':
//         console.log('the color is red')
//         break;
//     case 'blue':
//         console.log('the color is blue')   
//         break;
//     default:
//         console.log('not a match')       
// }

// loops

// for(let i=1; i<=20; i++) {
//     console.log(i + ': i am sorry')
// }


// let x = 1;

// while(x<=20){
//     console.log(x)
//     x++;
// }


// higher order array method
// reduce
// sort

// array iteration e.g
// forEach
// for of
// map
// filter

// const companies = [
//     {
//         id: 1,
//         name: 'google',
//         staffs: 23, 
//         startYear: 1974, 
//         isTech: true
//     },
//     {
//         id: 2,
//         name: 'facebook',
//         staffs: 13, 
//         startYear: 2004, 
//         isTech: true
//     }, 
//     {
//         id: 3,
//         name: 'gucci',
//         staffs: 37, 
//         startYear: 1990, 
//         isTech: false
//     }, 
//     {
//         id: 4,
//         name: 'amazon',
//         staffs: 15, 
//         startYear: 1996, 
//         isTech: true
//     }, 
//     {
//         id: 5,
//         name: 'microsoft',
//         staffs: 25, 
//         startYear: 1975, 
//         isTech: true
//     }, 
//     {
//         id: 6,
//         name: 'starlink',
//         staffs: 29, 
//         startYear: 1999, 
//         isTech: true
//     }, 
//     {
//         id: 7,
//         name: 'Nadia',
//         staffs: 30, 
//         startYear: 2005, 
//         isTech: false
//     }, 
// ]

// looping through the array
// for(let i=0; i<companies.length; i++) {
//     console.log(companies[i].name) 
// }

// returning only tech companies using for loop 
// for(let i=0; i<companies.length; i++) {
//     if(companies[i].isTech===true){
//         console.log(companies[i].name)
//     }    
// }


// companies.forEach(function(company){
//     console.log(company)
// })

// for(let company of companies){
//     console.log(company)
// }

// companies.map(function(company){
//     console.log(company)
// })

// companies.filter(function(company){
//     if(company.isTech===true){
//         console.log(company)
//     }
// })

// questions
// 1) return only the tech companies
// 2) claculate the total number of staffs in all the companies
// 3) return companies that starts before 2000
// 4) retrun the sum of staffs in the company with the highest number of staffs and the lowest of staffs
// 5) return the companies with number of staffs greater than 30


// function greet(){
//     console.log('hello today is a great day')
// }

// greet()


// let greet = () => {
//     console.log('hello today is a nice day')
// }

// greet()

// function greet(name, time){
//     console.log(`hello ${name} good ${time}`)
// }

// greet('godbless', 'morning')


// let greetMe = (name, time) => {
//     console.log(`hello ${name} good ${time} today`)
// }

// greetMe('freeman', 'evening')

// solutions to questions
// let techComp = companies.filter(company => company.isTech===true)
// console.log(techComp)

// let staffs = companies.map(company => company.staffs)
// let staffsaTotal = staffs.reduce((x, y)=> x+y)
// console.log(staffsaTotal)

// let oldComapnies = companies.filter(company => company.startYear < 2000)
// console.log(oldComapnies)

// let staffs = companies.map(company=> company.staffs)
// console.log(staffs)
// let sorted = staffs.sort((a, b)=> a - b)

// console.log(sorted)

// let sum = sorted[0] + sorted[sorted.length-1]

// let added = staffs.reduce((y, z)=> y+z)
// console.log(added)

// let wmallCompanies = companies.filter(company=> company.staffs < 30)
// console.log(wmallCompanies)


// assignment

// alert('hello')

// let name = prompt('hello what is your name')
// alert(name + ' you are welcome' ) 

// create a system 



// week three of js


// let date = new Date().toDateString() + ' | ' + new Date().toLocaleTimeString()
// console.log(date)
// if(date < 12) {
//     console.log('good morining')
// }else if(date < 16) {
//     console.log('good afternoon')
// }else if(date < 21) {
//     console.log('good evening')
// }else {
//     console.log('good night')
// }

// let person = {
//     name: 'godbless',
//     surname: 'ejovwo',
//     dept: 'web dev',
//     isMarried: true,
//     age: 30,
//     hobby: ['coding', 'eating', 'running'],
//     getPerson(){
//         return `${this.name} is ${this.age} year old`
//     }
// }

// console.log(person.getPerson())


// function Person(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// } 

// const person1 = new Person('godbless', '30', 'coding') 
// const person2 = new Person('marvellous', '18', 'watching romantic film')

// console.log(person1)
// console.log(person2)

// class Person{
//     constructor(name, age, hobby){
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
// }

// const person1 = new Person('gb', 30, 'eating')
// const person2 = new Person('lc', 30, 'eating')
// const person3 = new Person('fm', 30, 'eating')

// let people = [person1, person2, person3] 

// for(let i=0; i<people.length; i++){
//     console.log(people[i].name)
// }


// class Person{
//     constructor(name, age, hobby){
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//     getInfo(){
//         return `${this.name} is ${this.age}years old`
//     }
// }

// const person1 = new Person('gb', 30, 'drumming')

// console.log(person1.getInfo())


// class TheArray{
//     constructor(arr) {
//         this.arr = arr;
//     }
//     getSum(){
//         return this.arr.reduce((a,b)=> a+b)
//     }
// }

// const arr1 = new TheArray([20, 30, 25, 8, 19])
// const arr2 = new TheArray([12, 4, 8, 90])

// console.log(arr2.getSum())

// class Temperature{
//     constructor(celcius) {
//         this.celcius = celcius;
//     }
//     toFarenheit() {
//         return ((9/5) * (this.celcius) + (32))
//     }
// }

// const tem1 = new Temperature(53)

// console.log(tem1.toFarenheit())


// create a method that will convert temperature in farenheit to celcius

// class inheritance

// class Car{
//     constructor(brand){
//         this.brand = brand;
//     }
//     getInfo(){
//         return `${this.brand} is a good car`
//     }
// }

// class Toyota extends Car{
//     constructor(brand,model){
//         super(brand);
//         this.model = model;
//     }
//     getNew(){
//         return `${this.model} is good model of ${this.brand}`
//     }
// }


// const car = new Toyota('toyota', 'camry')

// console.log(car.getNew())


class Person{
    constructor(name){
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getStudent(){
        return `${this.name} is in ${this.department} department`
    }
}


const student = new Student('godbless', 'web dev')

console.log(student.getStudent())