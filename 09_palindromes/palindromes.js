const palindromes = function(string) {
    let removeSpecialChars = string.split(/[\s,\.!]+/)
    let joinChars = removeSpecialChars.join("");
    let splitChars = joinChars.split("")
    let frontPalindrome = splitChars.join("").toLowerCase();

    let reversePalindrome = splitChars.reverse();
    let backPalindrome = reversePalindrome.join("").toLowerCase();

    if (frontPalindrome === backPalindrome) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
