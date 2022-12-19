const set1 = [0, 1, 2]
const set2 = [ 3, 4, 5]

// ES5 way
Array.prototype.unshift.apply(set2, set1)

// ES6 way
const newSet = [...set1, ...set2]

console.log(newSet)