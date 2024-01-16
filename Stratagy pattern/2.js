// The strategy interface
class ValidationStrategy {
    validate(input) {
        // Abstract method to be overridden by concrete strategies
        throw new Error("Not implemented");
    }
}

// A concrete strategy class for email validation
class EmailValidationStrategy extends ValidationStrategy {
    validate(input) {
        // Use a regular expression to check if the input is a valid email
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(input);
    }
}

// Another concrete strategy class for password validation
class PasswordValidationStrategy extends ValidationStrategy {
    validate(input) {
        // Check if the input is at least 8 characters long and contains at least one digit and one special character
        const regex = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return regex.test(input);
    }
}

// The context class
class Validator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    validate(input) {
        return this.strategy.validate(input);
    }
}

// Using the strategy pattern
const validator = new Validator(new EmailValidationStrategy());
console.log(validator.validate("test@example.com")); // Output: true
console.log(validator.validate("test@example")); // Output: false
validator.setStrategy(new PasswordValidationStrategy());
console.log(validator.validate("password123")); // Output: false
console.log(validator.validate("passw0rd!")); // Output: true