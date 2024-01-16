// Define an abstract class for products
class Product {
    constructor(name) {
        this.name = name;
    }

    // Define an abstract method for displaying the product
    display() {
        throw new Error("Abstract method!");
    }
}

// Define a concrete class for books
class Book extends Product {
    constructor(name, author) {
        super(name);
        this.author = author;
    }

    // Override the display method for books
    display() {
        console.log("This is a book named " + this.name + " by " + this.author + ".");
    }
}

// Define a concrete class for games
class Game extends Product {
    constructor(name, genre) {
        super(name);
        this.genre = genre;
    }

    // Override the display method for games
    display() {
        console.log("This is a game named " + this.name + " of " + this.genre + " genre.");
    }
}

// Define a factory class for creating products
class ProductFactory {
    // Define a factory method for creating products based on the type parameter
    createProduct(type, name, info) {
        let product;
        if (type === "book") {
            product = new Book(name, info);
        } else if (type === "game") {
            product = new Game(name, info);
        } else {
            throw new Error("Invalid type!");
        }
        return product;
    }
}

// Create an instance of the factory class
let factory = new ProductFactory();

// Create some products using the factory method
let book1 = factory.createProduct("book", "The Lord of the Rings", "J.R.R. Tolkien");
let book2 = factory.createProduct("book", "Harry Potter and the Philosopher's Stone", "J.K. Rowling");
let game1 = factory.createProduct("game", "The Witcher 3: Wild Hunt", "action role-playing");
let game2 = factory.createProduct("game", "Minecraft", "sandbox");

// Display the products using the display method
book1.display(); // This is a book named The Lord of the Rings by J.R.R. Tolkien.
book2.display(); // This is a book named Harry Potter and the Philosopher's Stone by J.K. Rowling.
game1.display(); // This is a game named The Witcher 3: Wild Hunt of action role-playing genre.
game2.display(); // This is a game named Minecraft of sandbox genre.

console.log(book1, book2, game1, game2)