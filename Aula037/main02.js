(function() {
    'use strict';

    var $form = document.querySelector('[data-js="form"]');
    $form.insertAdjacentHTML('afterend', $form.outerHTML);
                            /**
                             beforebegin,
                             afterbegin,
                             beforeend,
                             */

    console.dir($form);
})();