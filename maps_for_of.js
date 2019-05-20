let Quan = {
    name: 'Nguyen Viet Quan',
    age: 34,
    language: 'Python, Javascript',
}


let Tra = {
    name: 'Tra',
    age: 33,
    language: 'Python, Javascript',
}
// create new Map
let persons = new Map()
persons.set('Quan', Quan)
persons.set('Tra', Tra)

console.log(persons)
console.log('size: ' + persons.size)
console.log(persons.get('Quan'))
console.log(persons.get('Tra'))

console.log(persons.keys())
console.log(persons.values())

//using for of
console.log('-----------------------')
for(const key of persons.keys() ) {
    console.log('key: ' + key)
}
console.log('-----------------------')
for (const value of persons.values()) {
    console.log('name: ' + value.name + ', age ' + value.age + ' language: ' + value.language)
}

for (const [key, value] of persons.entries()) {
    console.log(key + ' : ' + value.name)
}

//using foreach
console.log('-----------------------')
persons.forEach((value, key , persons) => console.log(key + ' = ' + value.name))

console.log('-----------------------')
//automatically convert array of array to map, but only ok with array have two element
let arr = [['1','python','javascript'],['2','nodejs','react']]
let arrMap = new Map(arr)
console.log(arrMap)// Map {'1' => 'python', '2' => 'nodejs'}
