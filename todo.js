let tasks = document.getElementById('tasks')

let form = document.getElementById('new-task-form')
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    addTask()
})

let inputTask = document.getElementById('new-task-input')

function addTask(){ 
    let task = document.createElement('div')
    let content = document.createElement('div')
    let input = document.createElement('input')
    let actions = document.createElement('div')
    let editBtn = document.createElement('button')
    let doneBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')
    let time = document.createElement('small')   

    let date = new Date().toDateString() + ' | ' + new Date().toLocaleTimeString() 
    time.textContent = date

    task.setAttribute('class', 'task')
    content.setAttribute('class', 'content')
    actions.setAttribute('class', 'actions')

    if(inputTask.value === '') {
        alert('invalid task')
        return;
    }
    
    input.value = inputTask.value;

    input.setAttribute('class', 'text')
    input.setAttribute('readonly', 'readonly')

    editBtn.textContent = 'edit'
    editBtn.setAttribute('class', 'edit')

    editBtn.addEventListener('click',()=> {
        if(editBtn.textContent === 'edit'){
            editBtn.textContent = 'save'
            input.removeAttribute('readonly')
        }else if(input.value === ''){
            alert('invalid input')
        }
        else{
            editBtn.textContent = 'edit'
            input.setAttribute('readonly', 'readonly')            
        }
    })

    doneBtn.textContent = 'done'
    doneBtn.setAttribute('class', 'done')

    doneBtn.addEventListener('click',()=> {
        if(doneBtn.textContent === 'done'){
            doneBtn.textContent = 'undone'
            input.classList.add('strike')
        }
        else{
            doneBtn.textContent = 'done'
            input.classList.remove('strike')           
        }
    })


    deleteBtn.textContent = 'delete'
    deleteBtn.setAttribute('class', 'delete')

    deleteBtn.addEventListener('click', ()=> {
        task.style.display = 'none';
    })

    content.appendChild(input)
    content.appendChild(time)
    actions.appendChild(editBtn)
    actions.appendChild(doneBtn)
    actions.appendChild(deleteBtn)

    task.appendChild(content)
    task.appendChild(actions)

    tasks.prepend(task)

    inputTask.value = '';
}

