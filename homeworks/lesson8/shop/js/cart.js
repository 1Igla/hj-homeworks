'use strict';

const prod = document.querySelectorAll('.add-to-cart');
const products = Array.from(prod);



for (const prod of products){
	prod.addEventListener('click', addToCart);
  const titl = prod.getAttribute('data-title');
  console.log(typeof prod);
}

function iter(atr) {
  for(var i=0; i < items.length; i++ ) {
    if(items[i].title === atr) {
      console.log(items[i]);
    }
  }
};
iter(prod.title)
//iter(items[1].title)

//arr.forEach(e.addEventListener('click', addToCart));
//addToCart( items[0] ); // кнопка добавления товара в корзину
