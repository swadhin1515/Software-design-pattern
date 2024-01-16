// """ 
// Closures are not exclusive to functional programming.They can also be used in object - oriented programming, as you have demonstrated in your code.A closure is simply a
// function that can access variables from its lexical scope, even
// if the
// function is executed outside of that scope.In your code, the display methods are closures because they can access the properties of the Pizza class, even
// if they are called on instances of the subclasses.

// You can think of the Pizza class as a
// function that returns a closure(the display method) and some data(the properties).When you create a subclass of Pizza, such as CheesePizza, you are invoking the Pizza
// function and passing some arguments to it.The Pizza
// function then returns a closure(the display method) that can access the arguments and the data.This is similar to how a
// function can
// return a closure that can access its parameters and local variables.

// Closures are useful in object - oriented programming because they allow you to define methods that can access the state of the object without explicitly passing the object as an argument.They also enable you to create private variables that are only accessible by the methods of the object.For example, you could rewrite your Pizza class as follows:

// / Define a function that creates a pizza object
function createPizza(name, toppings, price) {
    // Define some private variables
    let cheeseType;
    let veggies;
    let meat;

    // Define a public method for displaying the pizza
    function display() {
        console.log("This is a pizza named " + name + " with " + toppings + " toppings. It costs $" + price + ".");
        // Access the private variables based on the type of pizza
        if (cheeseType) {
            console.log("It has " + cheeseType + " cheese.");
        }
        if (veggies) {
            console.log("It has " + veggies + " veggies.");
        }
        if (meat) {
            console.log("It has " + meat + " meat.");
        }
    }

    // Define a public method for setting the cheese type
    function setCheeseType(type) {
        cheeseType = type;
    }

    // Define a public method for setting the veggies
    function setVeggies(veg) {
        veggies = veg;
    }

    // Define a public method for setting the meat
    function setMeat(mt) {
        meat = mt;
    }

    // Return an object with the public methods
    return {
        display: display,
        setCheeseType: setCheeseType,
        setVeggies: setVeggies,
        setMeat: setMeat
    };
}

// Create some pizzas using the createPizza function
let pizza1 = createPizza("Margherita", "tomato sauce and basil", 10);
pizza1.setCheeseType("mozzarella");
let pizza2 = createPizza("Garden Fresh", "cheese and tomato sauce", 12);
pizza2.setVeggies("mushrooms, onions, peppers, olives");
let pizza3 = createPizza("Pepperoni", "cheese and tomato sauce", 15);
pizza3.setMeat("pepperoni, sausage, bacon");

// Display the pizzas using the display method
pizza1.display(); // This is a pizza named Margherita with tomato sauce and basil toppings. It costs $10. It has mozzarella cheese.
pizza2.display(); // This is a pizza named Garden Fresh with cheese and tomato sauce toppings. It costs $12. It has mushrooms, onions, peppers, olives veggies.
pizza3.display(); // This is a pizza named Pepperoni with cheese and tomato sauce toppings. It costs $15. It has pepperoni, sausage, bacon meat.



// In this code, the display, setCheeseType, setVeggies, and setMeat methods are closures that 
// can access the private variables cheeseType, veggies, and meat.These variables are not accessible from outside the object, 
// so they are effectively encapsulated.This is one way to implement information hiding in JavaScript.