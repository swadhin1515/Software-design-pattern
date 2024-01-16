// Define a class with a private constructor
class Calculator {
    constructor() {
        this.result = 0;
    }

    // Define a method to add a number to the result
    add(number) {
        this.result += number;
        return this;
    }

    // Define a method to subtract a number from the result
    subtract(number) {
        this.result -= number;
        return this;
    }

    // Define a method to multiply the result by a number
    multiply(number) {
        this.result *= number;
        return this;
    }

    // Define a method to divide the result by a number
    divide(number) {
        this.result /= number;
        return this;
    }

    // Define a method to get the current result
    getResult() {
        return this.result;
    }
}

// Define an IIFE that returns an object with a getInstance method
const Singleton = (() => {
    // Define a private variable to store the instance
    let instance;

    // Define a function to create an instance of the class
    function createInstance() {
        return new Calculator();
    }

    // Return an object with a getInstance method
    return {
        getInstance: function() {
            // Check if an instance already exists
            if (!instance) {
                // If not, create one and store it
                instance = createInstance();
            }
            // Return the stored instance
            return instance;
        },
    };
})();

// Test the singleton design pattern
const calculator1 = Singleton.getInstance();
const calculator2 = Singleton.getInstance();
const calculator3 = Singleton.getInstance();

// Perform some calculations
calculator1.add(10).subtract(5).multiply(2).divide(4); // 2.5
calculator2.add(20).subtract(10).multiply(4).divide(2); // 20

// Check if the instances are the same
console.log(calculator1 === calculator2); // true

// calculator3.add(1222)
// Check the results
console.log(calculator1.getResult()); // 20
console.log(calculator2.getResult()); // 20
console.log(calculator3.getResult()); // 20