// The strategy interface
class Strategy {
    execute(data) {
        // Abstract method to be overridden by concrete strategies
        throw new Error("Not implemented");
    }
}

// The context class
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(data) {
        return this.strategy.execute(data);
    }
}

// A concrete strategy class
class LowerCaseStrategy extends Strategy {
    execute(data) {
        return data.toLowerCase();
    }
}

// Another concrete strategy class
class UpperCaseStrategy extends Strategy {
    execute(data) {
        return data.toUpperCase();
    }
}

// Using the strategy pattern
// Create a context object with a lower case strategy
const context = new Context(new LowerCaseStrategy());
console.log(context.executeStrategy("Ex JSJJSJSJJSJSample Text")); // Output: "example text"
context.setStrategy(new UpperCaseStrategy());
console.log(context.executeStrategy("Example Text")); // Output: "EXAMPLE TEXT"