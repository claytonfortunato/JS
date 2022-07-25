(function() {
    'use strict'
    //Cópia de array usando poucas linhas.
    var arr = [1, 2, 3, 4, 5];
    var arr2 = arr.slice();
    var $divs = document.querySelectorAll('div');
    var $divsCopy = Array.prototype.slice.call($call);
    // console.log(arr, arr2, arr === arr2);
    console.log($divs, $divsCopy, $divs === $divsCopy);
})