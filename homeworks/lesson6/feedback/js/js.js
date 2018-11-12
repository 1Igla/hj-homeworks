'use strict';
var title = document.querySelectorAll('input');
var arr_title= Array.from(title);
var textarea = document.querySelectorAll('textarea');
var arr_textarea = Array.from(textarea);
Array.prototype.push.apply(arr_title, arr_textarea);
var button = document.querySelector('button');
var button2 = document.querySelectorAll('button')[1];
button2.addEventListener('click', addonclick);
var main = document.querySelector('main');
var address = document.querySelector('input[name="zip"]');
var outaddress = document.getElementById('zip');

address.onkeypress = function(e)  { // Индекс
  e = e || event;
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
  console.log(outaddress.value = address.value);
  console.log(document.getElementById('address').value = document.querySelector('input[name="address"]').value);
  console.log(document.getElementById('name').value = document.querySelector('input[name="name"]').value);
  console.log(document.getElementById('lastname').value = document.querySelector('input[name="lastname"]').value);
  console.log(document.getElementById('company').value = document.querySelector('input[name="company"]').value);
  console.log(document.getElementById('role').value = document.querySelector('input[name="role"]').value);
  console.log(document.getElementById('city').value = document.querySelector('input[name="city"]').value);
};

function addonclick() { //изменение формы
  event.preventDefault();
  main.classList.add("hidden");
}
