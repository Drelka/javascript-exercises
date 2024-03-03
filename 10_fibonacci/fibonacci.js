// FUNCTION RETURNING FIBONACCI SEQUENCE
// (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ... AND SO ON)

// func(1) = 1
// func(2) = 1
// func(3) = 2 (1+1) (index[1] + index[2])
// func(4) = 3 (1+2) (index[2] + index[3])
// func(5) = 5 (2+3) (index[3] + index[4])
// func(6) = 8 (3+5) (index[4] + index[5])
// func(7) = 13 ...

// so func(x) = [x-2] + [x-1]





const fibonacci = function(count) {
    if(count < 0) return "OOPS";
    const fib = [0, 1];
    let current = 2;
    for(let i = current; i <= count; i++){
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return(fib[count]);
};

// Do not edit below this line
module.exports = fibonacci;
