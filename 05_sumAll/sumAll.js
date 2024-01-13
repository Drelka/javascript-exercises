const sumAll = function(low, high) {
    let sum = 0;
    let isNumber = function (val){
        return typeof val === "number";
    }
    if (low < 0 || high < 0 || !isNumber(high) || !isNumber(low)) return "ERROR";
    
    if (low > high){
        const x = low;
        low = high;
        high = x;
    }
    for (i = low; i <= high; i++){
        sum += i;
    }    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;


/*
 take (x to y) (ex 1 to 4)
 create sumXtoY = 0
 for (i = x ; i <= y ; i++)
  {sumXtoY += i}
*/
 
 