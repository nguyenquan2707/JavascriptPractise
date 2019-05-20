num1 = 20;
num2 = 25;

//console.log(num.toFixed(2));

let ranDom= function(num1, num2) {
    return Math.floor(Math.random()*(num2 - num1) + 1) + num1;
}


let sleep = function(num) {
    return new Promise(resolve => setTimeout(resolve, num));
}

let runRandom = async  function() {
    for(let i  = 0 ; i < i + 1 ; i++) {
        console.log(ranDom(i));
        await sleep(2000);
    }
}
//runRandom();
let first = ranDom(num1, num2);
let second = ranDom(num1, num2);

let text1 = Number.parseInt(first).toString(); let text2 = Number.parseInt(second).toString();

console.log(text1+text2);
console.log(first);
console.log(second);