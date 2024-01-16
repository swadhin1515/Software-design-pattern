// The product class
class Pizza {
    constructor() {
        this.toppings = [];
        this.crust = "";
        this.size = "";
    }
}

// The builder class
class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    // A method for each step
    addTopping(topping) {
        this.pizza.toppings.push(topping);
        return this; // Return the builder object to allow chaining
    }

    setCrust(crust) {
        this.pizza.crust = crust;
        return this;
    }

    setSize(size) {
        this.pizza.size = size;
        return this;
    }

    // A method to return the final product
    build() {
        return this.pizza;
    }
}

// The director class
class PizzaMaker {
    // A static method that takes a builder object and invokes the steps
    static makePizza(builder) {
        return builder
            .addTopping("cheese")
            .addTopping("pepperoni")
            .setCrust("thin")
            .setSize("large")
            .build();
    }
}

// Using the builder method
let builder = new PizzaBuilder();
let pizza = PizzaMaker.makePizza(builder);
console.log(pizza);
// Pizza {
//   toppings: [ 'cheese', 'pepperoni' ],
//   crust: 'thin',
//   size: 'large'
// }