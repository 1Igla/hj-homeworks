'use strict';

<<<<<<< HEAD
const prod = document.querySelectorAll('.add-to-cart');
console.log(prod);
console.log(showMore);
const products = Array.from(prod);


function iter(atr) {
  for(var i=0; i < items.length; i++ ) {
    if(items[i].title === atr) {
      return items[i];
    }
=======
function click(event) {
  if(event.target.classList.contains('add-to-cart')) {
    event.preventDefault();
    addToCart({
      'title': event.target.dataset.title,
      'price': event.target.dataset.price,
    })
>>>>>>> cc3b01efc6046b18544b881735b900ddfbf60a0a
  }
}

<<<<<<< HEAD

for (const prod of products){
  var titl = prod.getAttribute('data-title');
  prod.addEventListener('click', function() {
    return addToCart(iter(titl));
  //   console.log(titl);
  })
};

//showMore.addEventListener('click', function() {
=======
document.getElementsByClassName('items-list')[0].addEventListener('click', click)
>>>>>>> cc3b01efc6046b18544b881735b900ddfbf60a0a
