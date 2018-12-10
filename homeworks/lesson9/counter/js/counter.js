'use strict';
var counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const res = document.getElementById('reset');

function click (count) {
    let num = Number(localStorage.counter);
    count? num++ : num--;
     counter.textContent = num;
    console.log(counter.textContent);
    localStorage.setItem('counter', counter.textContent);
}
function reset() {
    counter.textContent = '0';
    localStorage.setItem('counter', counter.textContent);
}

increment.addEventListener('click', ()=>click(true));
decrement.addEventListener('click', ()=>click(false));
res.addEventListener('click', ()=>reset());

if (localStorage.getItem('counter')) {
  counter.textContent = localStorage.getItem('counter');
} else {
  counter.textContent = '0';
}
