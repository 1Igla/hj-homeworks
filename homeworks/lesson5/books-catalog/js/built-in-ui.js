
var content = document.getElementById("content");
var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onLoad);
xhr.open("GET", "https://neto-api.herokuapp.com/book/", true);
xhr.send();

function onLoad() {
  var books = JSON.parse(xhr.responseText);
  console.log(books);
    for (let b of books) {
    let li = document.createElement("li");
    let img = document.createElement("img");

    li.dataset.title = b.title;
    console.log(b.title);
    li.dataset.author = b.author.name;
    li.dataset.info = b.info;
    li.dataset.price = b.price;
    img.src = b.cover.small;
   content.appendChild(li).appendChild(img);


   }
 };


// Регулируем видимость карточки
function toggleCardVisible () {
 document.getElementById('content').classList.toggle('hidden');
 document.getElementById('card').classList.toggle('hidden');
}


document.getElementById('close').addEventListener('click', toggleCardVisible);

document.getElementById('content').addEventListener('click', (event) => {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
      toggleCardVisible();
      document.getElementById('card-title').innerHTML = target.dataset.title;
      document.getElementById('card-author').innerHTML = target.dataset.author;
      document.getElementById('card-info').innerHTML = target.dataset.info;
      document.getElementById('card-price').innerHTML = target.dataset.price;
    }
});
