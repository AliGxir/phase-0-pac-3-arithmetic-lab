1 + 80;
60 - 40;
2 * 3.4;
5.0 / 2.5;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


//let number = 5;
//number++; //=> 5... hmmm
//number; //=> 6 -- the number was incremented after it was evaluated
//number --; //=> 6
//number; //=> 5


//--number ; // => 4
//number; //=> 4
//++number; //=> 5
//number //=> 5

//let number = 5;
//number += 3; //=> 8
//number -= 2; //=> 6
//number *= 10; //=> 60
//number /= 5; //=> 12


//reset number
//number = 10;

function add5() {
    return (number += 5);  
}

function divideBy3() {
    return (number /= 3);
}

divideBy3(); //=> 3.33333333335

add5(); //=> 8.333333334

//reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5


parseInt("2", 10); //=> 2

parseInt("2.222", 10);

parseInt("nonsense!", 10);

parseFloat("80.123999"); // 80.123999


function increment(n) {
    return (n+= 1);
}
increment(n);

function decrement(n) {
    return (n-= 1);
}
decrement(n); 

function makeInt(n) {
    return parseInt(n, 10);
}
parseInt("n", 10);

function preserveDecimal(n) {
    return parseFloat(n, 10);
}
parseFloat("n", 10);