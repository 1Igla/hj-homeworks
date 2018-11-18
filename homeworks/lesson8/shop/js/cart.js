'use strict';

function click(event) {
  if(event.target.classList.contains('add-to-cart')) {
    event.preventDefault();
    addToCart({
      'title': event.target.dataset.title,
      'price': event.target.dataset.price,
    })
  }
}

document.getElementsByClassName('items-list')[0].addEventListener('click', click)
