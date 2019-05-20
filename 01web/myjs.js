console.log('Hello World')
console.log(document.title)
console.log(document.getElementById('one'))
console.log(document.querySelector('p'))
// all p
console.log(document.querySelectorAll('p'))
// element at index 1
console.log(document.querySelectorAll('p')[1])
// get p class
console.log(document.querySelectorAll('.pclass'))

/* document.querySelector('#search').addEventListener('click', (event) => {
  console.log(event.target.value)
}) */

/* document.querySelector('#search').addEventListener('change', (event) => {
    console.log(event.target.value)
  }) */

/* document.querySelector('#search').addEventListener('input', (event) => {
  console.log(event.target.value)
}) */
