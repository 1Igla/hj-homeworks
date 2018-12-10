'use strict';
navigator.mediaDevices
.getUserMedia({video: true, audio: false})
.then((stream) => {
const video = document.querySelector('.container');
video.src = URL.createObjectURL(stream);
})
