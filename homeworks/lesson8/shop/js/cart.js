'use strict';

const prod = document.querySelectorAll('.add-to-cart');
console.log(prod);
console.log(showMore);
const products = Array.from(prod);


function iter(atr) {
  for(var i=0; i < items.length; i++ ) {
    if(items[i].title === atr) {
      return items[i];
    }
  }
};



for (const prod of products){
  var titl = prod.getAttribute('data-title');
  prod.addEventListener('click', function() {
    return addToCart(iter(titl));
  //   console.log(titl);
  })
};

//showMore.addEventListener('click', function() {
