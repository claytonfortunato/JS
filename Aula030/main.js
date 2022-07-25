(function() {
    'use strict';

    function afterDomContentLoaded() {
        alert('DOMContentLoaded');  
        var fragment = document.createDocumentFragment();
        var childP = document.createElement('p');
        var textChildP = document.createTextNode('Texto da tag P!');
    
        childP.appendChild(textChildP);
        fragment.appendChild(childP);

        document.body.appendChild(fragment);
    }

    function afterWindowLoad() {
        alert('AfterWindowLoad');
    }

    document.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);
    window.addEventListener('load', afterWindowLoad, false);
})(document);