//Reverse a String: Write a function that reverses a given string.

const reverseString = (str) => {
    return str.split(" ").reverse().join(" ");
};

console.log(reverseString("Hello, World!")); // Output: "!dlroW,olleH"

//Count Characters: Create a function that counts the number of characters in a string.

const countCharacters = (str) => {
    return str.length;
};

console.log(countCharacters("Hello, World!")); // Output: 13

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

const capitalizeWords = (str) => {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

console.log(capitalizeWords("hello, world!")); // Output: "Hello, World!" 


//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.


const findMaximumAndMinimum = (arr) => {    
    return [Math.max(...arr), Math.min(...arr)];
};

console.log(findMaximumAndMinimum([1, 2, 3, 4, 5])); // Output: [5, 1]

//Sum of Array: Create a function that calculates the sum of all elements in an array.

const sumOfArray = (arr) => {    
    return arr.reduce((a, b) => a + b, 0);
};

console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15

//Filter Array: Implement a function that filters out elements from an array based on a given condition.

const filterArray = (arr, condition) => {    
    return arr.filter(condition);
};  // Output: [2, 4, 6]

console.log(filterArray([1, 2, 3, 4, 5], (num) => num % 2 === 0));

//Factorial: Write a function to calculate the factorial of a given number.

const factorial = (num) => {    
    return num > 1 ? num * factorial(num - 1) : 1;
};

console.log(factorial(5)); // Output: 120

//Prime Number Check: Create a function to check if a number is prime or not.

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(5)); // Output: true
console.log(isPrime(4)); // Output: false

//Fibonacci Sequence: Implement the Fibonacci sequence using recursion.

const fibonacci = (n) => {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 8