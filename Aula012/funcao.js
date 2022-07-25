function myFunction() {
    return [1, 2, 3]
}
myFunction()[0]

function myFunction() {
    return {
        prop1: 1,
        prop2: 'fernando',
        prop3: function() {
            return 'prop3';
        }
    }
}

myFunction()