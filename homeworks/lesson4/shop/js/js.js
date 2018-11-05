'use strict';

var but = document.querySelectorAll('button.add'); // товар
var count = document.getElementById('cart-count'); //товаров в корзине
var totalPrice = document.getElementById('cart-total-price'); // общая цена
console.log(totalPrice);

var i = 0;
var n = 0;
function add() {
  count.innerHTML = ++i;
  n += Number(this.dataset.price);
  console.log(n)
  totalPrice.innerHTML = getPriceFormatted(n);
}


for (const k of but){
	k.addEventListener('click', add);
}
