'use strict';

function toggleMenu(event) {
  event.preventDefault();
  if (this.classList.contains('show')) {
      this.classList.remove('show');
      this.classList.add('hide');
  } else {
    this.classList.add('show');
    this.classList.remove('hide');
    }
    event.stopPropagation();
}

function openLink(event) {
  console.log(this.textContent);
  console.log(event.target);
}

function init(node) {
  node.addEventListener('click', toggleMenu);
}

function initLink(node) {
  if (node.dataset.toggle) {
    return;
  }
  node.addEventListener('click', openLink);
  node.addEventListener('click', toggleMenu);
}

const arr_drop = Array.from(document.querySelectorAll('.dropdown'))
  arr_drop.forEach(init);

Array
  .from(document.querySelectorAll('a'))
  .forEach(initLink);
