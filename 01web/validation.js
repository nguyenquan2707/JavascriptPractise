function myvalidation() {
  let value = document.querySelector('#search').value
  if (!isNaN(value)) {
    if ((value > 20) || (value < 0)) {
      window.alert('Not ok')
    } else {
      window.alert('ok')
      window.alert(value)
    }
  } else {
    window.alert('please enter number')
  }
}

document.querySelector('#form').addEventListener('submit', (event) => {
  event.preventDefault() // browser will not have any value
  console.log(event.target.username.value)
  window.alert(event.target.username.value)
})
