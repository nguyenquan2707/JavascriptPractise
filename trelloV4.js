const myTodoV2 = [{
  title: 'will learn Javascript',
  isDone: false
}, {
  title: 'will learn ajax',
  isDone: false
}, {
  title: 'will learn jQuery',
  isDone: false
}]
/* const findTodo = function(myTodoV2, search) {
    const index = myTodoV2.findIndex(function(todo , index) {
        return todo.title.toLowerCase() === search.toLowerCase();
    })
    return myTodoV2[index];
}
console.log(findTodo(myTodoV2, 'will learn javascript')); */
const findTodo = function (myTodoV2, search) {
  const index = myTodoV2.find(function (todo) {
    console.log(todo.title)
    console.log(search)
    return todo.title.toLowerCase() === search.toLowerCase()
  })
  return index
}

console.log(findTodo(myTodoV2, 'will learn ajax'))

const myTodo = []

myTodo.push('will learn JavaScript')
myTodo.push('will learn ajax')
myTodo.push('will learn jQuery')
myTodo.push('will learn Python')

let search = function (text) {
  if (text === '') {
    console.log('lease enter search pattern')
    window.alert('please enter search pattern')
  } else if (myTodo.indexOf(text) === -1) {
    console.log('not found')
    window.alert('Not found')
  } else {
    console.log(`search found`)
    window.alert(`Search found ${myTodo[myTodo.indexOf(text)]}`)
  }
}
