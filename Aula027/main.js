(function() {
    'use strict';

    function on(element, event, callback) {
        document.querySelector(element)
        .addEventListener(event, callback, false);
    }

    function off(element, event, callback) {
        document.querySelector(element)
            .removeEventListener(event, callback, false);
    }

    on('[data-js="input"]', 'keydown', function(event) {
        console.log(this.value);
    });

    on('[data-js="select"]', 'change', function() {
        document.querySelector('[data-js="input"]').value = this.value;
    });
})();