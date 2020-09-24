// init
let list = document.querySelector('#my-todo')
let done = document.querySelector('#done')
let input = document.querySelector('#newTodo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

// Create
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', function (event) {
  // console.log(this)
  // console.log(event.target)
  let inputValue = document.querySelector('#newTodo').value
  // console.log(inputValue)
  if (inputValue !== '') {
    addItem(inputValue)
  }
})

// Delete and check (My Todo)
list.addEventListener('click', function (event) {
  // console.log(this)
  // console.log(event.target)
  if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    li.remove()
  } else if (event.target.tagName === 'LABEL') {
    // event.target.classList.toggle('checked')
    let newItem = document.createElement('li')
    newItem.innerHTML = `
    <label for="done" class='checked'>${event.target.innerHTML}</label>
    <i class="delete fa fa-trash"></i>`
    done.appendChild(newItem)
    event.target.parentElement.remove()
  }
})

// Delete and check for done
done.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    li.remove()
  } else if (event.target.tagName === 'LABEL') {
    let newItem = document.createElement('li')
    newItem.innerHTML = `
      <label for="todo">${event.target.innerHTML}</label>
      <i class="delete fa fa-trash"></i>`
    list.appendChild(newItem)
    event.target.parentElement.remove()
  }
})

//space check
input.addEventListener('keypress', e => {
  if (e.keyCode === 13) {
    let inputValue = document.querySelector('#newTodo').value
    // console.log(inputValue)
    if (inputValue !== '') {
      addItem(inputValue)
    }
  }
})




