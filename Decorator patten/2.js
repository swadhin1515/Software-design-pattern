// The base class for pizzas
class Pizza {
    constructor(size, crust) {
        this.size = size;
        this.crust = crust;
        this.price = 10;
    }

    getDescription() {
        return `A ${this.size} pizza with ${this.crust} crust`;
    }

    getPrice() {
        return this.price;
    }
}

// A subclass for Margherita pizza
class Margherita extends Pizza {
    constructor(size, crust) {
        super(size, crust);
        this.price += 5;
    }

    getDescription() {
        return `${super.getDescription()} and tomato sauce, mozzarella cheese, and basil`;
    }
}

// A subclass for Pepperoni pizza
class Pepperoni extends Pizza {
    constructor(size, crust) {
        super(size, crust);
        this.price += 7;
    }

    getDescription() {
        return `${super.getDescription()} and tomato sauce, mozzarella cheese, and pepperoni`;
    }
}

// A subclass for Hawaiian pizza
class Hawaiian extends Pizza {
    constructor(size, crust) {
        super(size, crust);
        this.price += 8;
    }

    getDescription() {
        return `${super.getDescription()} and tomato sauce, mozzarella cheese, ham, and pineapple`;
    }
}

// The decorator class for toppings
class ToppingDecorator extends Pizza {
    constructor(pizza) {
        super(pizza.size, pizza.crust);
        this.pizza = pizza;
        this.toppings = [];
    }

    addTopping(topping, price) {
        this.toppings.push(topping);
        this.price += price;
    }

    getDescription() {
        return `${this.pizza.getDescription()} with ${this.toppings.join(", ")}`;
    }

    getPrice() {
        return this.pizza.getPrice() + this.price;
    }
}

// Testing the decorator pattern
let pizza = new Margherita("large", "thin");
console.log(pizza.getDescription()); // A large pizza with thin crust and tomato sauce, mozzarella cheese, and basil
console.log(pizza.getPrice()); // 15

let pizzaWithToppings = new ToppingDecorator(pizza);
pizzaWithToppings.addTopping("cheese", 2);
pizzaWithToppings.addTopping("mushrooms", 3);
pizzaWithToppings.addTopping("olives", 2);
console.log(pizzaWithToppings.getDescription()); // A large pizza with thin crust and tomato sauce, mozzarella cheese, and basil with cheese, mushrooms, olives
console.log(pizzaWithToppings.getPrice()); // 22