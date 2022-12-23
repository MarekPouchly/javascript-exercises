const fibonacci = function(number) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    if (isNaN(number)){
        number = stoi(number)
    }
    
    if (number >= 0) {
        for (let i = 1; i < number; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
    } else if (number < 0) {
        return "OOPS"
    }
    return nextTerm
};

// Do not edit below this line
module.exports = fibonacci;
