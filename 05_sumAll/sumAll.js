const sumAll = function(numOne, numTwo) {
    let sum = 0
    
    if (numOne < 0 || numTwo < 0) {
        return 'ERROR';
    } else if (typeof numOne != 'number' || typeof numTwo != 'number') {
        return 'ERROR'
    } else if (isNaN(numOne) || isNaN(numTwo)) {
        return 'ERROR'
    }
    
    for (i = numOne; (numOne < numTwo) ? i <= numTwo : i >= numTwo; (numOne < numTwo) ? i++ : i--) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
