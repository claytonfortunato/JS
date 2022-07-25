var arr = [1, 2, 3, 4, 5];
var map = arr.map(function(item, index, array) {
    return { index: index, item: item };
});
console.log(arr, map);