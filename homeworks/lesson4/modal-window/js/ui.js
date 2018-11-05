'use strict';
document.addEventListener('DOMContentLoaded', function(){
    var j = document.querySelectorAll('.btn.trigger')[0];
    console.log(j);
    j.addEventListener('click', initModalUi());
}, true);
