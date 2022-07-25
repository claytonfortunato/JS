function showOtherFunction(func) {
    return func();
}

console.log(showOtherFunction(function() {
    return 'Functional JS!'
}));