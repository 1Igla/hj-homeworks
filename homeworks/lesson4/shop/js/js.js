'use strict';

const products = document.querySelectorAll('button.add'); // товар
const inbascket = document.getElementById('cart-count'); //товаров в корзине
const totalPrice = document.getElementById('cart-total-price'); // общая цена

function add() {
  let i = 0;
  let n = 0;
  return function() {
    inbascket.innerHTML = ++i;
    n += Number(this.dataset.price);
    totalPrice.innerHTML = getPriceFormatted(n);
  }
};

var f=add();

for (const prod of products){
	prod.addEventListener('click', f);
}
