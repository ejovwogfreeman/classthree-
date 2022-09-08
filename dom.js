// single element selector
// document.getElementById
// document.querySelector

// multiple element selcetor
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelectorAll

// const p = document.getElementsByTagName('p')
// console.log(p)

// for(let i=0; i<p.length; i++) {
//     console.log(p[i])
//     p[i].style.color = 'green';
// }

// const newItem = document.getElementById('gb')

// console.log(newItem)

// let x = document.getElementsByClassName('first')

// for(let i=0; i<x.length; i++) {
//     console.log(x[i])
//     x[i].style.color = 'green';
// }

// console.log(x)

// let x = document.querySelectorAll('.first')
// x.style.background = 'blue';
// x.style.padding = '20px'
// for(let i=0; i<x.length; i++) {
//     console.log(x[i])
//     x[i].style.color = 'green';
// }

// console.log(x)

// innerHtml

// innerText
// textContent


// document.getElementById('x').innerHTML = '<p>hello js dom</p>' 

// let div = document.createElement('h1')

// div.textContent = 'hello i am a div that\'s created from js'

// let body = document.getElementById('body')

// body.appendChild(div)


// alert('helo')

// document.getElementById('btn').addEventListener('click', ()=> {
//     alert('hello world')
// })

// let x = document.getElementById('btn')

// let date = new Date().toDateString()

// x.addEventListener('mouseover', ()=>{
//     alert(date)
// })


let inc = document.getElementById('inc')
let dec = document.getElementById('dec')
let res = document.getElementById('res')
let num = document.getElementById('num')

var count = 0;

inc.addEventListener('click', ()=> {
    count++
    num.textContent = count; 
    if(count > 0) {
        num.style.color = 'green'
    }
})

dec.addEventListener('click', ()=> {
    count--
    num.textContent = count;
    if(count < 0) {
        num.style.color = 'red'
    }
})

res.addEventListener('click', ()=> {
    count = 0;
    num.textContent = count;
    if(count == 0) {
        num.style.color = 'black'
    }
})

