let joinString = ''

const reverseString = function(string) {
    let splitString = string.split("");

    let reverseArray = splitString.reverse();

    joinString = reverseArray.join("");

    return joinString
};

console.log(joinString)

// Do not edit below this line
module.exports = reverseString;
