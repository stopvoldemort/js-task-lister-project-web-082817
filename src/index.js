document.addEventListener("DOMContentLoaded", () => {
  const app = new App()
  app.render()
})

let taskForm = document.getElementById('create-task-form')
let dropDown = document.getElementById('parent-list')
let listsDiv = document.getElementById('lists')

let form = document.getElementById('create-list-form')
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let inputBox = document.getElementById('new-list-title')
  let input = inputBox.value
  inputBox.value = ""

  let newList = new List(input)
  let option = document.createElement("option")
  option.text = newList.title
  option.setAttribute('data-id' , `${newList.id}`)
  dropDown.add(option)

  let listElement = document.createElement('div')
  listElement.style.alignItems
  let listTasks = document.createElement('ul')
  let deleteListButton = document.createElement('button')
  deleteListButton.innerText = "Delete"
  let listTitle = document.createElement('h3')
  listTitle.innerText = newList.title

  listElement.appendChild(listTitle)
  listElement.appendChild(listTasks)
  listElement.appendChild(deleteListButton)

  listElement.setAttribute('data-id', `${newList.id}`)
  listsDiv.appendChild(listElement)
} )



taskForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let listSelector = document.getElementById('parent-list')
  let listOption = listSelector.options[listSelector.selectedIndex]
  let descriptionBox = document.getElementById('new-task-description')
  let priorityBox = document.getElementById('new-task-priority')
  let input = {}

  input.listId = listOption.dataset.id
  input.description = descriptionBox.value
  input.priority = priorityBox.value
  debugger

  descriptionBox.value = ""
  priorityBox.value = ""
  let newTask = new Task(input)
  let listDiv = document.querySelector(`div[data-id='${newTask.listId}'] ul`)
  let listItem = document.createElement('li')
  listItem.innerText = `Description: ${newTask.description}\nPriority: ${newTask.priority}`
  listDiv.append(listItem)
} )
