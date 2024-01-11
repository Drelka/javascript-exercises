const reverseString = function(word) {
    let toArray = word.split("");
    let backToFront = toArray.reverse();
    let toString = backToFront.join("");
    return toString;
};

// Do not edit below this line
module.exports = reverseString;
