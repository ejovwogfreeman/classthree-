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
// conditionals
// loops and switch statement 
// higher order array method

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

let student = {
    name: 'rita', 
    surname: 'frank', 
    gender: 'female', 
    class: '400L', 
    hobby: ['singing', 'cooking', 'coding'], 
    children: [
        {
            name: 'mark', 
            age: 3
        }, 
        {
            name: 'mirabella', 
            age: 2
        }
    ], 
    address: {
        state: 'delta', 
        country: 'nigeria', 
        street: '1st lane road'
    }
} 

// console.log(student.hobby[1][student.hobby[1].length-1])
// console.log(student.address.street.split(' ')[2])
// console.log(student.address.country)
// console.log(student.children[1].name[student.children[1].name.length-1])
// student.children.push({name: 'osas', age: '1'})
// student.children.shift()
// student.children.splice(1, 0, {name: 'john', age: 2.5})
// console.log(student.children)
// console.log(student)