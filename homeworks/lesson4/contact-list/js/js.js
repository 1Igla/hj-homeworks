'use strict';

const element  = document.getElementById('container');
const ul = element.querySelector('ul');
ul.querySelector('li').remove();

const fragment = document.createDocumentFragment();
const contacts = JSON.parse(loadContacts());

contacts.forEach(function(contact) {
    let li = document.createElement('li');
    li.textContent = contact.name;
    li.setAttribute('data-email', contact.email);
    li.setAttribute('data-phone', contact.phone);
    fragment.appendChild(li);
});

ul.appendChild(fragment);
