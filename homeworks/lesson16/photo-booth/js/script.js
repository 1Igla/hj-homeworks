'use strict';
var elem = document.createElement("video");
elem.setAttribute("autoplay", "autoplay");
var audio = document.createElement("audio");
var app = document.querySelector('.app');
var image = document.createElement("image");
app.appendChild(image);
//var body = document.querySelector('body');
//body.insertBefore(elem, body.firstChild);
//<audio id="audio" src="http://dev.interactive-creation-works.net/1/1.ogg" ></audio>
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
        video.src = window.webkitURL.createObjectURL(stream);
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
    image.setAttribute('src', canvas.toDataURL('image/png'));
    list.style.visibility = 'inherit';
    list.insertBefore(image, list.firstChild);
    console.log(list);
    takeTemplate(image);
  }
  else {
    video.play();
    isplaying = true;
  };
};
