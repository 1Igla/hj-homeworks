'use strict';
// Список песен:
// 1. LA Chill Tour,
// https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3

// 2. This is it band,
// https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3

// 3. LA Fusion Jam,
// https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3

var play = document.getElementsByClassName('playstate')[0];
var player = document.getElementsByTagName('audio')[0];
var togg = document.getElementsByClassName('playstate')[0];
var back = document.getElementsByClassName('back')[0];
var stop = document.getElementsByClassName('stop')[0];
var next = document.getElementsByClassName('next')[0];
var title = document.getElementsByClassName('title')[0];
var stylus = document.getElementsByClassName('stylus')[0];
var mediaplayer = document.getElementsByClassName('mediaplayer')[0];
var isplaying = false;
var arrName = ["LA Chill Tour", "This is it band", "LA Fusion Jam"];
var arrLink = ["https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3", "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3", "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3"];

play.onclick = () => {
  if ( player.paused ) {
    player.play();
    isplaying = true;
    mediaplayer.classList.add('play');
  } else {
    player.pause();
    isplaying = false;
    mediaplayer.classList.remove('play');
    mediaplayer.classList.add('pause');
  }
};

stop.onclick = () => {    //stop
  if(!(player.paused)) {
    player.pause();
    player.currentTime = 0;
  }
  mediaplayer.classList.remove('play');
};

var i = arrLink.length;
var y = arrName.length;
back.onclick = () => {    //left
  title.title=arrName[--y];
  player.src=arrLink[--i];
if( isplaying ) {
  player.play();
}
  if(i==0) {
    i=arrLink.length;
    y=arrName.length;
  }
};

var k = 0;
var n = 0;
next.onclick = () => {   //right
  title.title=arrName[++n];
  player.src=arrLink[++k];
   if(k==arrLink.length-1) {
    k=-1;
    n=-1;
  }
  if( isplaying ) {
    player.play();
  }
}
