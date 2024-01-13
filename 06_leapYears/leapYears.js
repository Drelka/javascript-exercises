const leapYears = function(year) {
    if (year % 4 == 0 && ( year % 400 == 0 || !(year % 100 == 0) )){
            return true;
        } else {
            return false;
        }
};

// Do not edit below this line
module.exports = leapYears;

/*
use *year* agrgument in a function
check if it is a leap year:
    divisible by 4
    not divisible by 100, unless divisible by 400
return boolean value (true or false)
*/