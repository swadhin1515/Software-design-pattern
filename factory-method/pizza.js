// Define an abstract class for pizzas
class Pizza {
    constructor(name, toppings, price) {
        this.name = name;
        this.toppings = toppings;
        this.price = price;
    }

    // Define an abstract method for displaying the pizza
    display() {
        throw new Error("Abstract method!");
    }
}

// Define a concrete class for cheese pizzas
class CheesePizza extends Pizza {
    constructor(name, toppings, price, cheeseType) {
        super(name, toppings, price);
        this.cheeseType = cheeseType;
    }

    // Override the display method for cheese pizzas
    display() {
        console.log("This is a cheese pizza named " + this.name + " with " + this.toppings + " toppings and " + this.cheeseType + " cheese. It costs $" + this.price + ".");
    }
}

// Define a concrete class for veggie pizzas
class VeggiePizza extends Pizza {
    constructor(name, toppings, price, veggies) {
        super(name, toppings, price);
        this.veggies = veggies;
    }

    // Override the display method for veggie pizzas
    display() {
        console.log("This is a veggie pizza named " + this.name + " with " + this.toppings + " toppings and " + this.veggies + " veggies. It costs $" + this.price + ".");
    }
}

// Define a concrete class for meat pizzas
class MeatPizza extends Pizza {
    constructor(name, toppings, price, meat) {
        super(name, toppings, price);
        this.meat = meat;
    }

    // Override the display method for meat pizzas
    display() {
        console.log("This is a meat pizza named " + this.name + " with " + this.toppings + " toppings and " + this.meat + " meat. It costs $" + this.price + ".");
    }
}

// Define a factory class for creating pizzas
class PizzaFactory {
    // Define a factory method for creating pizzas based on the type parameter
    createPizza(type, name, toppings, price, info) {
        let pizza;
        if (type === "cheese") {
            pizza = new CheesePizza(name, toppings, price, info);
        } else if (type === "veggie") {
            pizza = new VeggiePizza(name, toppings, price, info);
        } else if (type === "meat") {
            pizza = new MeatPizza(name, toppings, price, info);
        } else {
            throw new Error("Invalid type!");
        }
        return pizza;
    }
}

// Create an instance of the factory class
let factory = new PizzaFactory();

// Create some pizzas using the factory method
let pizza1 = factory.createPizza("cheese", "Margherita", "tomato sauce and basil", 10, "mozzarella");
let pizza2 = factory.createPizza("veggie", "Garden Fresh", "cheese and tomato sauce", 12, "mushrooms, onions, peppers, olives");
let pizza3 = factory.createPizza("meat", "Pepperoni", "cheese and tomato sauce", 15, "pepperoni, sausage, bacon");

// Display the pizzas using the display method
pizza1.display(); // This is a cheese pizza named Margherita with tomato sauce and basil toppings and mozzarella cheese. It costs $10.
pizza2.display(); // This is a veggie pizza named Garden Fresh with cheese and tomato sauce toppings and mushrooms, onions, peppers, olives veggies. It costs $12.
pizza3.display(); // This is a meat pizza named Pepperoni with cheese and tomato sauce toppings and pepperoni, sausage, bacon meat. It costs $15.