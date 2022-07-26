(function() {
    'use strict';

    var $div = document.querySelector('div');
    $div.addEventListener('click', function() {
        this.classList.toggle('blue');
    }, false);
})();