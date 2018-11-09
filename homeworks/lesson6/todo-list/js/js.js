'use strict';
var listblock = document.querySelector('.list-block');
var list = document.getElementsByTagName('li');//коллекция Li
var checkbox = document.querySelectorAll('input');//коллекция input
var output = document.querySelector('output');

Array.from(checkbox).forEach(i=>{
  i.addEventListener('click', onclick);
});

var num = 0;

function onclick(ev) {
  if (this.hasAttribute('checked')) {
    var arr = this.removeAttribute('checked');
  } else {
    var att = this.setAttribute('checked', true);
  }
  if(this.hasAttribute('checked')===true) {
    ++num;
  } else if(this.hasAttribute('checked')===false){
    --num;
  }
    console.log(output.value = `${num} из ${checkbox.length}`);
  if(num === checkbox.length) {
    listblock.classList.add('complete');
  } else listblock.classList.remove('complete');
};

for(let i of checkbox) {
  if (i.checked === true) num++;
}
console.log(output.value = `${num} из ${checkbox.length}`);
