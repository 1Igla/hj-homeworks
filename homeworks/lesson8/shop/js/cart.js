'use strict';

const prod = document.querySelectorAll('.add-to-cart');
const products = Array.from(prod);


function iter(atr) {
  for(var i=0; i < items.length; i++ ) {
    if(items[i].title === atr) {
      return items[i];
    }
  }
};


for (const prod of products){
  const titl = prod.getAttribute('data-title');
  prod.addEventListener('click', function () {
    addToCart(iter(titl));
    console.log(titl);
  });
};
