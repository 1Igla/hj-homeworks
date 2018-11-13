'use strict';
const from = document.getElementById('from');
const to = document.getElementById('to');
const source = document.getElementById('source');
    source.addEventListener('input', output);
const content = document.getElementById('content');
const loader = document.getElementById('loader');
const list = document.getElementsByTagName('select');
  for(let input of list) {
    input.addEventListener("input", output);
  }
const result = document.getElementById('result');
      result.addEventListener("input", output);

var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", onLoad);
    xhr.addEventListener("loadstart", onLoadStart);
    xhr.addEventListener("loadend", onLoadEnd);
    xhr.open("GET", "https://neto-api.herokuapp.com/currency");
    xhr.send();

function onLoad() {
  console.log("Сработало событие load");
  content.classList.remove('hidden');
  var data =JSON.parse(xhr.responseText);

  for (let i = 0; i < data.length; i++ ) {
    for(let select of list) {
      var option = document.createElement('option');
      select.appendChild(option);
      option.label = data[i].code;
      option.value = data[i].value;
      }
  }
  console.log(document.getElementById("result").value = ((Number(from.value) * Number(source.value)) / Number(to.value)).toFixed(2));
};

function output() {
    console.log(document.getElementById("result").value = ((Number(from.value) * Number(source.value)) / Number(to.value)).toFixed(2));
}

function onLoadStart() {
  console.log("Сработало событие loadstart");
  loader.classList.remove('hidden');
}


function onLoadEnd() {
  console.log("Сработало событие loadend");
  loader.innerHTML = '';
};
