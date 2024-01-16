// This is a class that defines a pizza object
class Pizza {
    // These are the properties of the pizza object
    // They are set to null by default
    size = null;
    crust = null;
    cheese = null;
    toppings = [];

    // This is a method that sets the size property
    setSize(size) {
        // This is how you assign a value to a property
        this.size = size;
        // This is how you return the same object
        // This allows you to chain multiple methods
        return this;
    }

    // This is a method that sets the crust property
    setCrust(crust) {
        this.crust = crust;
        return this;
    }

    // This is a method that sets the cheese property
    setCheese(cheese) {
        this.cheese = cheese;
        return this;
    }

    // This is a method that adds a topping to the toppings array
    addTopping(topping) {
        this.toppings.push(topping);
        return this;
    }

    // This is a method that prints the properties of the pizza object
    show() {
        console.log("This pizza has:");
        console.log("Size: " + this.size);
        console.log("Crust: " + this.crust);
        console.log("Cheese: " + this.cheese);
        console.log("Toppings: " + this.toppings.join(", "));
    }
}

// This is how you create a new pizza object using the builder method
// You can use the dot operator to chain the methods
// You can use any value or type you want for the properties
let pizza = new Pizza()
    .setSize("large")
    .setCrust("thin")
    .setCheese("mozzarella")
    .addTopping("pepperoni")
    .addTopping("mushrooms")
    .addTopping("mussdsdsdddddddddddddddd");

// This is how you show the properties of the pizza object
pizza.show();