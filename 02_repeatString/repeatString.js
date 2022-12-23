let returnedString

const repeatString = function(word,number) {
    returnedString = '';
    if (number >= 0) {
        for(let i=0; i<number; i++) {
            returnedString += `${word}`;
        }
        return returnedString;
    } else if (number < 0) {
        return 'ERROR';
    }
};

console.log(returnedString)

// Do not edit below this line
module.exports = repeatString;