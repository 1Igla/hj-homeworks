'use strict';

var lower=["https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3", "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3",
"https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3", "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3",
"https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3"];

var middle=["https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3", "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3", "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3", "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3", "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3"];

var higher=["https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3", "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3", "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3", "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3"];


var mus = document.querySelector('audio');
var btn = document.querySelectorAll('li');
console.log(mus)
var setm = document.getElementsByClassName('middle')[0];
console.log(setm);

function playSong() {}

for(const ev of btn) {
  ev.addEventListener('click', showKey);
  ev.addEventListener('click', playSong);
}

 function playSong() {
  mus.play();
}

  var n=0;
  function showKey(event) {
    ++n;
    if(event.altKey) {
     mus.src = lower[n];
     setm.classList.remove('middle');
     setm.classList.remove('lower');
     setm.classList.add('higher');
      if(n == middle.length-1) {
        n=-1;
      }
    }else if(event.shiftKey){
      mus.src = higher[n];
      setm.classList.remove('higher');
      setm.classList.remove('middle');
      setm.classList.add('lower');
      if(n == higher.length-1) {
        n=-1;
      }
    }else {
      mus.src = middle[n];
      setm.classList.remove('higher');
      setm.classList.remove('lower');
      setm.classList.add('middle');

      if(n == lower.length-1) {
        n=-1;
      }
     }
};
