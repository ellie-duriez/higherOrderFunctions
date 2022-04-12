// Activity (1)
// Write a simple function which logs “Hello Code
// Nation” to the console.
// Then write a higher order function which will run
// our simple function five times, even though you
// only call it one time.
// Hint: Pass the simple function as a parameter, and
// this will involve a for loop.

const sayHello = () => {
    console.log("Hello Code Nation");
}

const repeat = (multiplier, object) => {
    for (i = 0; i<multiplier; i++) {
        object();
    }
}

repeat(5, sayHello)

// Activity (2)
// The array method .map is an example of a higher
// order function.
// Declare a variable with five numbers, then
// use .map to iterate through the array and multiply
// each array item by 3

myNumbers = [8, 5, 4, 2, 9];
console.log(myNumbers.map(i => i*3))


// Activity (3)
// Test this function to make
// sure it works by passing a
// number to the doMaths
// function, then passing a
// number and one of the four
// maths functions, to the
// returned function.

const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}

console.log(doMaths(5)(2,add));
