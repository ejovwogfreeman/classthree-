////////////////////////////////////////////////////////////////////
/////////////////////////////class 1////////////////////////////////
////////////////////////////////////////////////////////////////////

// 1) primitive
// 2) Reference

// primitive data types
// number string boolean null undefined

// refrecnce data types
// array objects

// var x = 5;
// var y = 7;

// var sum = x + y;
// var diff = x - y;
// var pro = x * y

// var ans = x**3 + y 

// var z = x + y*2

// var ans = z + x + y

// x = x + 5;

// x+=5;

// x-=5

// x--


// var quot = y/x

// var p = y%x

// +, -, *, /, %, **, ++, --, +=, -=, *=, /=, =, ==, ===, !==, >, <, >=, <=, ?, &&, ||, !


// console.log('5'==='6')

// var x = 5;
// var y = '5'

// console.log(typeof(y))

// console.log(5==='5' ? 'correct' : 'incorrect')

// console.log(5!='5')


// BIDMAS

// console.log((3*5)**2 + 6 / 2 - 1)


// stings

// var name = 'john doe'

// var name2 = 'mary smith'

// var name3 = "morgan freeman"

// var sentence = "he is using mary's pen"

// var statement = 'he screamed "whooooooaaaaa" when he saw the lion coming'

// var sent = 'he is using mary\'s pen'

// var state = "he screamed \"whooooooaaaaa\" when he saw the lion coming"

// console.log(state)

// string concatenation

// var firstName = 'mark'
// var surName = 'powells'

// var fullName = firstName + surName
// var fullName = firstName + ' ' + surName

// console.log(fullName)

// var name = prompt('what is your name?')

// alert(name + ' welcome to my awesome website')

// let email = 'ahainteractivetechhub@company.com'

// let name = 'godbless'

// console.log(name[1])

// name[1] = 'k'

// console.log(n)

// var names = ['gb', 'freeman', 'lancelot']

// console.log(names)

// names[2] = 'merlin'

// names[0] = 'godbless'

// names[1] = 'free'

// console.log(names)


// write a program to welcome a user,
// and ask for an amount of money to invest,
// write a program that will will retrun times two of any amount of money invested as your profit

// var name = prompt('hello user, what is your name?')
// alert('welcome to my invest platform ' + name)
// var invest = prompt('how much do you want to invest ($)?')
// alert('your money is now doubled ' + invest * 2)

////////////////////////////////////////////////////////////////////
/////////////////////////////class 2////////////////////////////////
////////////////////////////////////////////////////////////////////

// let name = 'godbless'

// string property => length
// console.log(name.length)

// string methods
// replace
// split
// concat
// trim
// padding (padStart and padEnd)
// toUpperCase
// toLowerCase
// slice
// substring
// substr
// indexOf
// lastIndexOf
// startsWith
// endsWith
// includes
// search
// backtics


// console.log(name[0])

//rplace method 

// console.log(name.replace('god', 'Jesus'))

// console.log(name.replace('s', 'f'))

// console.log(name.replace(/s/g, 'f'))

// var company = "Microsoft is the best company"

// console.log(company.replace(/microsoft/i, "google"))

// var com = "google is my favorite company because google helps lots of developer alot"

// console.log(com.replace(/google/g, "stack overflow"))

// split method

// var name = "godbless";

// console.log(name.split(''))

// console.log(name.split('b'))

// let email = 'ejovwogfreeman@gmail.com'

// let username = email.split('@')[0]

// console.log(username)

// console.log(email.split('@')[0])

// concat method

// var name = 'godbless';
// var surname = 'ejovwo';

// var fullName = name.concat(' ', surname)
// console.log(fullName)

// trim method

// var name = '        godbless'

// console.log(name)

// let trimmed = name.trim()

// console.log(trimmed)

// console.log(trimmed.length)

// padding

// let x = '7'
// console.log(x.padEnd(5, 'x'))

// console.log(x.padStart(5, 'y'))

// toUpperCase

// let name = 'godbless'
// console.log(name.toUpperCase())

// let surname = 'EJOVWO'
// console.log(surname.toLowerCase())

// slice
// var name = "morgan freeman"

// console.log(name.slice(0, 6))

// substring
// var name = "morgan freeman"

// console.log(name.substring(0, 6))

// substr
// var name = "morgan freeman"

// console.log(name.substr(0, 6))

// indexOf
// var name = 'godbless'
// console.log(name.indexOf('s'))

// // lastIndex
// var name = 'godbless'
// console.log(name.lastIndexOf('s'))

// // startsWith
// var name = 'godbless'
// console.log(name.startsWith('g'))

// // endsWith
// var name = 'godbless'
// console.log(name.endsWith('s'))

// // includes
// var name = 'godbless'
// console.log(name.includes('b'))

// // search
// var name = 'godbless'
// console.log(name.search('b'))


// backtics
// var sentence = `my mother"s dog is pretty` 
// console.log(sentence)

// var name = 'godbless'

// console.log(name + ' ' + 'is a good boy because' + ' ' + name + ' ' + 'does good things only')

// console.log(`${name} is a good boy because ${name} does good things only`)



// create a sytem that will ask a you for your name and if the first letter of your name is not g it will tell you
// that you are not welcome but if its g it will log welcome you have successfully cracked the code.

// let name = 'gb'

// console.log(name[name.length-1])

// let name = 'elizabeth'

// console.log(name[name.length-1])

// let name = prompt('what is your name?')

// if(name[0] != 'g') {
//     alert('you are not welcome')
// } else {
//     console.log('you have successfully craked the code')
// }

// if(name[0] == 'g') {
//     console.log('you have successfully craked the code')
// } else {
//     alert('you are not welcome')
// }

////////////////////////////////////////////////////////////////////
/////////////////////////////class 3////////////////////////////////
////////////////////////////////////////////////////////////////////

// let x = 333

// let y = x.toString()

// console.log(typeof(y))

// let z = x.toExponential(6)

// let x = '55'

// let y = Number(x)
// let y = parseInt(x)
// let y = parseFloat(x)

// let y = 55

// console.log(typeof(y))

// console.log(x == y)

// let date = new Date()

// console.log(typeof(date))

// let x = new Number(23);

// console.log(typeof(x))

// let names = ['gb']

// 

// let x = 'sxdfvghjk'
// let y = x + 5
// console.log(typeof(y))

// let x = '20'
// let y = '50'
// console.log(x + y)

// console.log(Math.floor(Math.random()*10 + 1))

// var students = ['rita', 'joshua', 'elijah', 'favor', 'melody', 'priscillia']

// console.log(students.length)

// push
// pop
// shift
// ushift
// slice
// splice
// toString
// join
// concat
// spread
// sort
// reverse
// reduce

// let x = students.slice(0,2)

// console.log(x)
// console.log(students)


// let y = students.splice(0,2,'gb','lancelot','mr smith','incredible')
// console.log(y)
// console.log(students)


// push adds to the end of an array
// pop removes from the end of an array
// unshift adds to the begining of an array
// shift removes from the begining of an array

// var names = ['gb', 'lance', 'fman']

// let viewers = ['first', 'second', 'third']

// let people = ["john", "great"]

// let x = names.toString()

// let x = names.join('-')

// let x = viewers.concat(names)

// let x = [...names, ...viewers, ...people]

// let x = [20, 30, 25, 2, 89]

// console.log(x.sort())

// console.log(x.reverse())

// let names = ['master', '65', 'Asphalt', 'abigail', 'collins', 'Mango', 34]

// console.log(names.sort())

// let x = [20, 30, 25, 2, 89]

// let y = x.reduce((a,b)=> a+b, 0)

// console.log(y)



////////////////////////////////////////////////////////////////////
/////////////////////////////class 4////////////////////////////////
////////////////////////////////////////////////////////////////////


// let names = ['rita', 'joshua', 'elijah']

// names.push('godbless')
// names.pop()
// names.pop()
// names.unshift('lancelot')
// names.shift()

// console.log('when we sliced')
// let sliced = names.slice(0, 1)
// console.log(sliced)
// console.log(names)

// console.log('when we spliced')
// let spliced = names.splice(0,1)
// console.log(spliced)
// console.log(names)


// conditionals

// if statement
// if (condition) {
//     code block;
// }

// var color = 'red';

// if(color==='red') {
//     console.log('the color is red')
// } 

// let name = 'godbless';

// if (name[0] === 'g') {
//     console.log('you are the real owner of this account')
// }

// nested if

// if(color==='red') {
//     if(color[0] === 'r') {
//         console.log('the first alphabet is r')
//     }
// } 

// else statement
// var color = 'green';

// if(color==='red') {
//     console.log('the color is red')
// }else {
//     console.log('the color is not red')
// }

// else if

// var color = 'red';

// if(color === 'red ') {
//     console.log('the color is not red')
// } else if (color === 'green') {
//     console.log('the color is red')
// } else if ( color === 'red') {
//     console.log('the color is pink')
// }else {
//     console.log('none of the above')
// }

// var name = 'godbless'

// if( name === 'godbless') {
//     console.log('the name is you')
// } else if (name === 'mario') {
//     console.log('mario club')
// } else if (name === 'freeman') {
//     console.log('the name is godbless')
// }else if (name === 'godbless') {
//     console.log('the name is godbless')
// }else {
//     console.log('all of the above')
// }

// let email = 'gb@gmail.com'

// if(email[0] === 'g') {
//     if(email[1] === 'm') {
//         console.log('first console.log')
//     }
// }else if (email[0] === 'l') {
//     if(email === 'gb@gmail.com') {
//         console.log('second console.log')
//     }
//     return
// }else if (email[2] === '@') {
//     if(email[1] !== 'g') {
//         console.log('third console.log')
//     } else {
//         console.log('forth console.log')
//     }
//     return
// }else {
//     console.log('fifth console.log')
// }

// loops

// for loop

// while


// console.log('the boy is coming soon')
// console.log('the boy is coming soon')
// console.log('the boy is coming soon')
// console.log('the boy is coming soon')
// console.log('the boy is coming soon')
// console.log('the boy is coming soon')
// console.log('the boy is coming soon')

// let state = 'the man is coming soon'

// console.log(state)
// console.log(state)
// console.log(state)
// console.log(state)
// console.log(state)
// console.log(state)
// console.log(state)
// console.log(state)

// for(initial; boundary; increment) {
//     code block;
// }

// for(let i=1; i<=10; i++) {
//     // document.write('the boy is coming soon' + '<br/>')
//     console.log(i + ' the boy is coming soon')
// }

// while loop

// initialize varialbe
// while(boudary condition) {
//     codeblock
//     increment
// }


// var x = 1;

// while (x<=10) {
//     console.log(x + ' the boy is coming')
//     x++;
// }

// let names = ['rita', 'joshua', 'elijah', 'lancelot', 'maxwell', 'powell']

// names.push('ninja')

// for (let i = 0; i < names.length; i++ ) {
//     console.log(names[i])
// }


// switch statement

// array itration;
// for loop
// forEach
// map
// for in
// for of
// filter


// assignment;
// 1) write a program to print all the odd numbers from 30 to 100
// 2) write a program to take a user's first name, last name, email and if the
///// first letter of the name is equal to g it should pass also if the last letter
///// of the surname is equal to g it should pass, and on the console it should print
///// email without adding the @gmail.com

// let firstName = null;
// let lastName = null;
// let email = null;


// firstName = prompt('what is your name?')

// if(firstName[0]==='g') {
//     lastName = prompt('what is your lastname')
//     if(lastName[lastName.length-1]==='g') {
//         email = prompt('what is your email')
//         console.log('your username is ' + email.split('@')[0])
//     }else {
//         alert('email condition not met')
//     }
// }else {
//     alert('name condition not met')
// }

// functions 

// function functionName() {
//     codblock
// }


// function greet() {
//     alert('welcome user')
// }

// greet()

// function greet(name) {
//     alert('wlcome ' + name)
// }

// greet('godbless')
// greet('sabviour')

// function greet(name, time) {
//     alert('wlcome ' + name + ' good ' + time)
// }

// greet('godbless', 'morning')

// function greet(name='freeman', time='morning') {
//     alert('wlcome ' + name + ' good ' + time)
// }

// greet('gb', 'night')

// function addNums(x,y) {
//     console.log(x + y)
// }

// addNums(3,4)

// function multNums(x,y) {
//     console.log(x * y)
// }

// multNums(9,5)


// function addNums(x,y) {
//     return x + y;
// }

// console.log(addNums(5,8))


// arrow functions

// let addNums = (x, y) => {
//     return x + y
// }

// console.log(addNums(3,7))

// let greet = (name, time) => {
    // return 'hello ' + name + ' good ' + time
    // return `hello ${name} good ${time}`
// }

// console.log(greet('godbless', 'morning'))


// let names = ['rita', 'joshua', 'elijah', 'lancelot', 'maxwell', 'powell']
// names.push('gb', 'lc', 'mm2')

// for(let i=0; i<names.length; i++) {
//     console.log(names[i])
// }

// names.forEach((name, index)=> {
//     console.log(`${index+1} - ${name}`)
// })

// names.map((x, i)=> {
//     console.log(`${i+1} - ${x}`)
// })

// for (let i of names) {
//     console.log(i)
// }

// let filtered = names.filter(name=> name !== 'rita')

// console.log(filtered)

// let result = ['A', 'B', 'F', 'C']

// let x = result.filter(y=> y !== 'F')
// for(i of x) {
//     console.log(i)
// }

// console.log(x)

// console.log(result)

// let students = ['joshua', 'rita', 'elijah', 'jones']

// let remainingStudents = students.filter(student => student !== 'jones')

// console.log(remainingStudents)

// let remainingStudents = students.filter(student => {
//      return student !== 'jones'
//     }
// )

// console.log(remainingStudents)

// assignment 
// create a fucntion that accepts two parameter name and age and return a sentence hello name you are age years old 
// crate a function that takes a year and return if the year is a leapyear or not.


////////////////////////////////////////////////////////////////////
/////////////////////////////class 5////////////////////////////////
////////////////////////////////////////////////////////////////////


// function greet(name='gb', age='55') {
//     alert(`hello ${name} you are ${age} years old.`)
// }

// greet()
// greet('rita', 24)


// function isLeapyear(year) {
//     if(year%4===0) {
//         if(year%100 !==0 || year % 400 ===0) {
//             console.log('leapyear')
//         }
//         else {
//             console.log('not leapyear')
//         }
//     }else {
//         console.log('not leapyear')
//     }
// }

// isLeapyear(3000)


// let students = ['rita', 'jeremiah', 'joshua', 'elijah']

// let jsStudents = students.filter(student=> {
//     return student !== 'jeremiah'
// })

// let jsStudents = students.filter(student => student !== 'jeremiah')

// console.log(jsStudents)


// objects

// let person = {
//     name: 'rita', 
//     age: 23, 
//     gender: 'female', 
//     school: 'uniben', 
//     dpartment: 'csc'
// }

// console.log(person.name + ' is ' + person.age + ' years old.')

// let car = {
//     brand: 'toyota', 
//     color: 'red', 
//     model: '2020'
// }

// console.log('my ' + car.brand + ' is ' + car.color + ' in color and its a ' + car.model + ' model')

// const blog = {
//     title: 'my first post', 
//     body: 'this is my first post', 
//     likes: 23
// }

// console.log('my post with the title "' + blog.title + '" and content "' + blog.body + '" has "' + blog.likes + '" likes')

// blog.author = 'jeremiah'
// blog.comments = '30'

// console.log(blog)


// let nums = [23, 55, 20, 30, 50]
// console.log(nums.reduce((a, b)=> a+b, 0))
// console.log(nums.sort((a, b) => a-b))
// console.log(nums.sort((a, b) => b-a))

// const names = ['rita', 'gb', 'elijah', 'joshua']

// console.log(names[0])


// const company = [
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

// let currentYear = new Date().getFullYear()

// console.log(currentYear)

// console.log( currentYear - company[0].startYear )

// 4) retrun the number of staffs in the oldest and the youngest company

// assignment
// 1) return only the tech companies
// 2) claculate the total number of staffs in all the companies
// 3) return companies the starts before 2000
// 4) retrun the sum of staffs in the comapny with the highest number of staffs and the lowest of staffs
// 5) return the companies with number of staffs greater than 30

// Answers

// let tech = company.filter(com=> com.isTech === true)
// console.log(tech)
// console.log(company.filter(com=>com.isTech===true))


// let x = company.map(com => com.staffs)
// console.log(x.reduce((a, b)=> a+b, 0))


// let startBefer200 = company.filter(com => com.startYear < 2000)
// console.log(startBefer200)
// console.log(company.filter(com=> com.startYear < 2000))


// let x = company.map(com => com.staffs)
// let sorted = x.sort((a,b)=> a-b)
// console.log(sorted[0] + sorted[sorted.length-1])

// let num = company.filter(com => com.staffs > 30)
// console.log(num)
// console.log(company.filter(com=> com.staffs > 30))


// let y = company.filter(com => com.staffs < 30)
// let x = y.map(com => com.staffs)
// console.log(x.reduce((a, b)=> a+b, 0))


// for(let i=1; i<10; i++) {
//     if(i == 8) {
//         break;
//     }
//     console.log(i)
// }


// for(let i=1; i<=10; i++) {
//     if(i == 5) {
//         continue;
//     }
//     console.log(i)
// }


// let names = ['joshua', 'elijah', 'rita', 'divine']


// switch statement
// let color = 'red';

// switch (color) {
//     case 'red':
//         console.log('the color is red')
//         break;
//     case 'blue':
//         console.log('the color is blue')
//         break;
//     case 'black':
//         console.log('the color is black')
//         break;
//     default:
//         console.log('the color is not among')
//         break;
// }

// if(color==='red') {
//     console.log('the color is red')
// } else if (color==='blue') {
//     console.log('the color is blue')
// } else if (color==='black') {
//     console.log('the color is black')
// } else {
//     console.log('the color is not among')
// }


// ternary operator

// let x = 20;
// console.log(x == 20  ? 'the value is 20' : 'the value is not 20')

// spread operator

// let x = []

// let name1 = ['joshua', 'elijah', 'rita']

// let name2 = ['peter', 'james', 'paul']

// let x = [...name1, ...name2]

// x.push(name1, name2)

// console.log(x)



// const fruits = ['banana', 'mango', 'orange', 'pineapple', 'pawpaw']

// const food = ['rice', 'beans', 'yam', 'potatoes']

// const consumable = [...fruits, ...food]

// console.log(consumable)

// var name = 'gb'; surname='fr'; age = '99'

// console.log(name, surname, age)

// x = x + y;



// function isLeapyear(year) {
//     if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         return 'leapyear'
//     }else {
//         return 'notleapyear'
//     }
// }

// let c = isLeapyear(2004)

// console.log(c)

