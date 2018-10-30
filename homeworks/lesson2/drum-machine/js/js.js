'use strict';


var btn = document.getElementsByClassName('drum-kit__drum');

      for(var i=0; i < btn.length; i++) {
        btn[i].onclick = function f () {
          var click = this.getElementsByTagName('audio')[0];
          click.play();

          if( click.play() ) {
              click.pause();
              click.currentTime = 0;
          }
            click.play();
        }
      }
