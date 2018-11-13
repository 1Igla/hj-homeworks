'use strict';
const title = document.querySelectorAll('input');
const arr_title= Array.from(title);
const form = document.querySelector('.contentform')
const out = document.getElementById('output');
const outs = out.querySelectorAll('output');
const arr_outs = Array.from(outs);
const textarea = document.querySelectorAll('textarea');
const arr_textarea = Array.from(textarea);
Array.prototype.push.apply(arr_title, arr_textarea);
const button = document.querySelector('button');
const button2 = document.querySelectorAll('button')[1];
    button2.addEventListener('click', addonclick);
const main = document.querySelector('main');
const address = document.querySelector('input[name="zip"]');
const outaddress = document.getElementById('zip');


address.onkeypress = function(e)  { // Индекс
  var e = e || event;
  if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
      return false;
    }
  };

  function getChar(event) { // Индекс
    if (event.which == null) {
      if (event.keyCode < 32) return null;
      return String.fromCharCode(event.keyCode)
    }
    if (event.which != 0 && event.charCode != 0) {
      if (event.which < 32) return null;
      return String.fromCharCode(event.which)
    }
    return null;
  };

arr_title.forEach(i=> {
  i.addEventListener('input', showMessage);
})

var obj = {};
textarea[0].addEventListener('input', showMessage);

function showMessage() { // Заполнение полей
  obj[this.name] = this.value;
  var counter = Object.keys(obj).map(p => obj[p]).filter(v => v).length;
  if (counter == arr_title.length){
    button.disabled = null;
  }
  else {
    button.disabled = true;
  }
};


button.addEventListener('click', onclick)

function onclick(event) {//отправка формы
  event.preventDefault();
  main.classList.remove("hidden");

  arr_outs.forEach(function (e) {
    let needInput = form.querySelector(`[name="${e.id}"]`);
    if (needInput) {
      e.value = needInput.value;
    }
  })

};

function addonclick() { //изменение формы
  event.preventDefault();
  main.classList.add("hidden");
}
