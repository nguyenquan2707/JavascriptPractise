//What is different beetwen '==' and  '===' 
// When comparing somes  type such as 'int', 'str' then '==' and '===' is same

let num1  = 1;
let num2 = 1;
console.log(num1 === num2); // true, because two 'int'
console.log(num1 == num2); // true, because two 'int'

let text1 = 'hi';
let text2 = 'hi';
console.log(text1 == text2); //true, because two 'str'
console.log(text1 === text2); // true, because two 'str'

//so the different is in Ojbect in Javascript. @@, now
let person = {
    'name' : 'Nguyen Viet Quan',
    'age' : 34
};
let person2 = {
    'name' : 'Nguyen Viet Quan',
    'age' : 34
};

personObject = person;
personObject2 = person;
console.log('--------------');
console.log(personObject == personObject2); // same value =>true
console.log(personObject === personObject2); // same type, same value => true

let per1 = person;
let per2 = person2;

console.log('--------------');
console.log(per1 == per2);
console.log(per1 === per2); //different type, but same the value= > false


console.log('----------------');
console.log('0' === 0) // false, different type
console.log('0' == 0); // cast string to number and compare

let text = new String('Hello');
let text3 = 'Hello';
console.log(typeof(text));
console.log(typeof(text3));
