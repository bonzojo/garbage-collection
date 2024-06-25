output = [];
let count=0;

function fizzBuzz() {

    count++;
    if (count % 3 === 0 && count % 5 === 0) {
        output.push('FizzBuzz');
    }
    else if (count % 3 === 0) {
        output.push('Fizz');
    }
    else if (count % 5 === 0) {
        output.push('Buzz');
    }
    else {
        output.push(count);
    };
};

for (let i = 0; i < 100; i++){
    fizzBuzz()
};

console.log(output);