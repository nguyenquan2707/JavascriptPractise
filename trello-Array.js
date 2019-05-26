const myTodo = []

myTodo.push('will learn JavaScript')
myTodo.push('will learn ajax')
myTodo.push('will learn jQuery')
myTodo.push('will learn Python')

//show element at specify position
console.log(`element at 0: ${myTodo[0]}`)

//contact two array
//const newArray = ['will learn React'];
//console.log(myTodo.concat(newArray));

//fill
console.log(myTodo.fill('new', 2, 3))

//includes
let includes = myTodo.includes('will learn JavaScript')
console.log(`include ?  ${includes}`)

//array to string
arrayToString = myTodo.join(' - ')
console.log(`array to String: ${arrayToString}`)

//lastIndexOf
console.log(myTodo.lastIndexOf('will learn ajax'));

//length
console.log(myTodo.length)

//map
console.log('map...........')
myTodo.map(function (data, index) {
    console.log(index, data)
})

//for loop
myTodo.forEach(function(data) {
    console.log(data)
})

//how to using it, fun , https://developer.mozilla.org/bm/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
let findIndex = myTodo.findIndex(function (task) {
    return task == 'will learn JavaScript'

})
 console.log(`find index at ${findIndex} positon`)

 let array = Array.of(1)
 console.log(array)
 