// Define a class with a private constructor
class Logger {
    constructor() {
        this.logs = [];
    }

    // Define a method to log messages
    log(message) {
        this.logs.push(message);
        console.log(message);
    }
}

// Define an IIFE that returns an object with a getInstance method
const Singleton = (() => {
    // Define a private variable to store the instance
    let instance;

    // Define a function to create an instance of the class
    function createInstance() {
        return new Logger();
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
const logger1 = Singleton.getInstance();
const logger2 = Singleton.getInstance();
const logger3 = Singleton.getInstance();


// Log some messages
logger1.log("Hello");
logger2.log("World");
logger3.log("sjdhshdskdkshfkhskfskhfkhsf")

// Check if the instances are the same
console.log(logger1 == logger2); // true

// Check the logs
console.log(logger1.logs); // ["Hello", "World"]
console.log(logger2.logs); // ["Hello", "World"]
console.log(logger3.logs);