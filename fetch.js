// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// const fetchData = async () => {
//     let url = 'https://jsonplaceholder.typicode.com/todos/'
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data)
// }

// fetchData()

const person = {
    name: 'freeman',
    surname: 'mark',
    age: 30,
    isMarried: true
}

let newData = JSON.stringify(person)

localStorage.setItem('datas', newData)

// let x = JSON.parse(newData) 

let y = localStorage.getItem('tasks')

console.log(y)
