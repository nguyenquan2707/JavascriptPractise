let userName = 'nguyenquan2707@gmail.com '
let passWord = '1234567'

console.log(passWord.length > 5)
console.log(userName.trim().endsWith('@gmail.com'))

let userNameCheck = function (userName = '') {
  if ((userName.includes('2707')) && (userName.length > 6)) {
    return true
  }
  return false
}

let passWordCheck = function (passWord) {
  if (passWord.length > 6) {
    return true
  }
  return false
}
if (userNameCheck(userName) && passWordCheck(passWord)) {
  console.log('you just log in')
} else {
  console.log('username or password not math')
}
