'use strict';
var menu = document.getElementsByTagName('nav')[0];
var vis = document.getElementsByClassName('secret')[0];

function open(ev) {
  if(ev.ctrlKey && ev.altKey && ev.code === 'KeyT') {
    console.log(menu.classList.contains('visible'));
    ev.preventDefault();
    menu.classList.toggle('visible');
 }
};

document.addEventListener('keydown', open);
document.addEventListener('keypress', open);
document.addEventListener('keydown', secret);


var cod = [];
function secret(ev) {
 cod.push(ev.code);
 var enter = cod.join('');
 console.log(cod);

  let sec = ['KeyY','KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
  let secret = sec.join('');

  if(cod.length == sec.length ) {
   cod.shift();
  }

  if(enter === secret) {
    vis.classList.add('visible')
  }
};
