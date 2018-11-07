'use strict';
var tabs = document.querySelector('.tabs')
var email = document.querySelectorAll('nav > a')[0];
var sms = document.querySelectorAll('nav > a')[1];
var content = document.getElementById('content');
var preloader = document.getElementById('preloader');
var xhr = new XMLHttpRequest();

xhr.open("GET", "email-tab.html",false);
xhr.addEventListener("progress", () => {
  preloader.classList.remove('hidden');
});
xhr.send();
email.classList.add('active');
content.innerHTML = xhr.responseText;

var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "sms-tab.html",false);
xhr2.send();

email.onclick = function() {
  this.removeAttribute('href');
  sms.classList.remove('active');
  this.classList.add('active');
  content.innerHTML = xhr.responseText;
};

sms.onclick = function() {
  this.removeAttribute('href');
  email.classList.remove('active');
  this.classList.add('active');
  content.innerHTML = xhr2.responseText;
};
