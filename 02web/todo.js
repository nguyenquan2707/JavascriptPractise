let ul = document.querySelector('#list')
let li

let addButton = document.querySelector('#add')
addButton.addEventListener('click', addTodo)

let removeButton = document.querySelector('#remove')
removeButton.addEventListener('click', removeTodo)

function removeTodo () {
  li = ul.children
  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) { // loop all element li, each li, then input have checked, then remove li, done
      ul.removeChild(li[index])
    }
  }
}

function addTodo () {
  let add = document.querySelector('#input')
  let value = add.value

  let textnode = document.createTextNode(value)

  if (value === '') {
    return false
  } else {
    // create li
    li = document.createElement('li')
    // create checkbox
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.setAttribute('id', 'check')

    // create lable
    let lable = document.createElement('lable')
    lable.appendChild(textnode)
    // ul.appendChild(lable)
    li.appendChild(checkbox)
    li.appendChild(lable)

    ul.insertBefore(li, ul.childNodes[0])
    li.className = 'visual'

    // clear data in input
    add.value = ''
  }
}
