// get two inputs:
    // #1 an array
    // #2 some other arguments
// if 2# is in 1#
    // remove 2# arguments from the 1# array
        // else -ignore

const removeFromArray = function(arr, ...arg) {
    const anArray = [];
    arr.forEach((element) => {
        if (!arg.includes(element)) {
            anArray.push(element);
        }
    });
    return anArray;
};

// Do not edit below this line
module.exports = removeFromArray;
