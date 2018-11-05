'use strict';

var element  = document.getElementById('container');
var ul = element.querySelector('ul');
ul.querySelector('li').remove();

var fragment = document.createDocumentFragment();
var browsers = JSON.parse(loadContacts());

browsers.forEach(function(browser) {
    let li = document.createElement('li');
    li.textContent = browser.name;
    li.setAttribute('data-email', browser.email);
    li.setAttribute('data-phone', browser.phone);
    fragment.appendChild(li);
});

ul.appendChild(fragment);
