'use strict';
var elem = document.createElement("video");
elem.setAttribute("autoplay", "autoplay");
var audio = document.createElement("audio");
var app = document.querySelector('.app');

var container = document.querySelector('.container').appendChild(elem);
var errorText = document.getElementById('error-message');
var controls = document.querySelector('.controls');
var takePhoto = document.getElementById('take-photo');
var video = document.querySelector('video');
var isplaying = true;
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
var list = document.querySelector('.list');

if(navigator.webkitGetUserMedia!=null) {
  var options = {
    video:true,
    audio:false
  };
  // запрашиваем доступ к веб-камере
    navigator.webkitGetUserMedia(options,
      function(stream) {
        controls.style.display = 'block';
        // включаем поток в URL
        video.src = window.URL.createObjectURL(stream);
        app.appendChild(video);
      },
      function(e) {
        errorText.appendChild(document.createTextNode("error happened"));
        errorText.style.display= 'block';
        console.log(document.getElementById('error-message'));
      }
    );
  };



takePhoto.addEventListener('click', takePicture);
function takePicture(stream) {
  if (isplaying) {
    video.pause();
    isplaying = false;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    var image = document.createElement("image");
    app.appendChild(image);
    image.setAttribute('src', canvas.toDataURL('image/png'));
    list.style.visibility = 'inherit';
    let pic = takeTemplate(image);
    list.insertBefore(pic, list.firstChild);
    console.log(list);

  }
  else {
    video.play();
    isplaying = true;
  };
};

function el(tag, attr, children) {
  const element = document.createElement(tag);
  if (attr instanceof Object) {
    Object.keys(attr).forEach(i => {
      element.setAttribute(i, attr[i])
    });
  }
  if (typeof children === 'string') {
    element.textContent = children;
  } else if (children instanceof Array) {
    children.forEach(child => element.appendChild(child));
  }
  return element;
};

function takeTemplate(img){
  return el('figure', null, [
    el('img', {src: img}),
    el('figcaption', null, [
      el('a', {href: img, download: 'snapshot.png'}, [
        el('i', {class: 'material-icons'}, 'file_download')
      ]),
      el('a', null, [
        el('i', {class: 'material-icons'}, 'file_upload')
      ]),
      el('a', null, [
        el('i', {class: 'material-icons'}, 'delete')
      ])
    ])
  ])
};

function upload(img) {
  var formData = new FormData();
  var blob = dataURItoBlob(img.src);
  formData.append('image', blob);
  return fetch('https://neto-api.herokuapp.com/photo-booth', {
    method: 'POST',
    body: data
  });
};

function dataURItoBlob(dataURI) {
const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
const array = [];
const byteString = atob(dataURI.split(',')[1]);

for(let i = 0; i < byteString.length; i++) {
  array.push(byteString.charCodeAt(i));
}

return new Blob([new Uint8Array(array)], { type: mimeString });
}

function handleClick(event) {
var btnName = event.target.innerText;
var figure = event.target.closest('figure');
if (btnName !== 'file_download') {
  event.preventDefault();
  switch (btnName) {
    case 'file_upload' :
      const img = figure.querySelector('img');
      upload(img)
        .then(res => {
        if (200 <= res.status && res.status < 300) {
          event.target.parentNode.style.visibility = 'hidden';
        }
      })
        .catch(err => {
          error.style.display = 'block';
          error.textContent = err;
        });
      break;
    case 'delete' :
      figure.remove();
      break;
    }
  } else {
    event.target.parentNode.style.visibility = 'hidden';
  }
};
