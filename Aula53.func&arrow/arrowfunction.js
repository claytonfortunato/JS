function sum(a, b = 10) {  // Function
    return a + b;
}

const sumArrow = (a, b = 10) => { // Arrow function
    return a + b;
};

const sumValue = sumArrow(2);

console.log(sumValue);
