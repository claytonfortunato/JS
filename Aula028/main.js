(function() {
    'use strict';

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $firstText = $mainContent.firstChild;
    var $cloneMainHeader = $mainHeader.cloneNode(true);
    //$mainContent.appendChild($mainHeader);
    $mainContent.appendChild($cloneMainHeader);
    console.log(document.querySelectorAll('.main-header').length);
})();