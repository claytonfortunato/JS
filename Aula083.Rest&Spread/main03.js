//Spread
const top2Series = ['Breaking Bad', 'True Detective']

//ES5 way
// var dramaSeries = [
//      `The Handmaid's Tale`,
//     'House M.D.'
// ].concat(top2Series)

// ES6 way
const dramaSeries = [
    `The Handmaid's Tale`,
    ...top2Series,
    'House M.D.'
]

console.log(dramaSeries);