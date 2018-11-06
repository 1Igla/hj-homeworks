const request = new XMLHttpRequest();
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather', true);
request.addEventListener("load", onload);
request.send();

function onload() {
 var response = JSON.parse(request.responseText);
  setData(response);
   console.log(response);
}

request.onreadystatechange = function() {
if (this.readyState != 4) return;
if (this.status != 200) {
    console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
    return;
  }
}
