//CHECK FOR STRING LENGTH (STRING LENGTH -1 === MAX INDEX)
    //CREATE LOOP:
        //1st SOLUTION (charAt() METHOD)
            //(CHECK IF CHAR AT INDEX 1 === CHAR AT INDEX -1)
            //         (CHAR AT INDEX 2 === CHAR AT INDEX -2 AND SO ON...)
                // ONE LOOP INCREMENTING FROM "0", ANOTHER DECREMENTING FROM "STRING LENGTH - 1"
        //2nd SOLUTION
            //CREATE NEW STRING, REVERSING THE OLD ONE
            //COMPARE STRINGS



const palindromes = function (string) {
    const string2 = string.toLowerCase().replace(/[\.,?! ]/g, "");
    return string2 === string2.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
