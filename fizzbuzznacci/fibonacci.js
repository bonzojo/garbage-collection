function fibonacciGenerator(n) {
    let fibArray = [];
    if (n >= 1) {
        fibArray.push(0); 
    }
    if (n >= 2) {
        fibArray.push(1); 
    }
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    console.log(fibArray);
}

fibonacciGenerator(50);
