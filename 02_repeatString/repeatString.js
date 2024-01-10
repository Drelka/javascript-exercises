const repeatString = function(string, num) {
    let i = 0;
    result = "";

    if (num > 0) {
        do{ result += string;
            i++;
        } while(i < num);
    } else if (num < 0) {
        console.log("Something went wrong. MISSION ABORTED.");
        return "ERROR";  
    } else {}
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
