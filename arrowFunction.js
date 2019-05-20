//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

let normalFunc = function(name) {
    console.log(`Hello ${name}`);
}

normalFunc('Quan');

//convert to arrow function v1

// let arrowlFunc = (name) => {
//     console.log(`Hello ${name}`);
// }

// arrowlFunc('Quan');

//convert to arrow function v2
//let arrowFunc = (name) => console.log(`Hello ${name}`);
//arrowFunc('Quan');

//convert to arrow function v3
let arrowFunc = name => console.log(`Hello ${name}`);
arrowFunc('Quan');

//array of object

let myTodoV2 = [{
    title : 'will learn Javascript',
    isDone: true,
},{
    title: 'will learn ajax',
    isDone: false,
},{
    title: 'will learn Nodejs',
    isDone: true,
}];
// narrow function
const findTodo = (myTodoV2, search) => {
    const index = myTodoV2.findIndex(todo => todo.title.toLowerCase() === search.toLowerCase());
    return myTodoV2[index];
}
console.log(findTodo(myTodoV2, 'will learn Javascript'));

//filter
console.log('----------------------------------------')
myTodoV2.filter((myTodo) => myTodo.isDone === true).forEach((done) => console.log(done.title));

console.log('-------------------thing not Done 1');
myTodoV2.filter((myTodo) => {if(myTodo.isDone === false) { return myTodo.title;}}).forEach((done) => console.log(done.title));

//thingDone1.forEach((done) => console.log(done.title));

/////////////////
console.log('---------------')
let myNum = [3, 4 ,1 ,9];
myNum.forEach(data => {console.log(data)});

console.log('---------------new data')
myNum.map(function(data) {
    return data+1;
}).forEach(function(newdata) {
    console.log(newdata)
})
//arrowFunc version
console.log('-----------------')
myNum.map(data => data+1).forEach((newdata) => console.log(newdata))

//
let element = ['quan','tra']
console.log('-------------------------destructing parameter')
element.map(({ length: newLength}) => newLength).forEach((newLength) => console.log(newLength));

let a = {
    title: 'title',
    isDone: true,
}
console.log(a.name)