'use strict';

var element  = document.getElementById('container');
var ul = element.querySelector('ul');
ul.querySelector('li').remove();

var fragment = document.createDocumentFragment();
var contacts = JSON.parse(loadContacts());

contacts.forEach(function(contact) {
    let li = document.createElement('li');
    li.textContent = contact.name;
    li.setAttribute('data-email', contact.email);
    li.setAttribute('data-phone', contact.phone);
    fragment.appendChild(li);
});

ul.appendChild(fragment);
