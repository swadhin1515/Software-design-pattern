class Animal {
    // These are the properties of the animal class
    // They are set to null by default
    name = null;
    age = null;
    color = null;

    // This is the constructor that accepts a builder object
    constructor(builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.color = builder.color;
    }
}


class Animal {
    // ...
    // This is the static Builder class within the Animal class
    static Builder = class {
        // These are the properties of the builder class
        // They are set to null by default
        name = null;
        age = null;
        color = null;

        // These are the methods to set each property
        setName(name) {
            this.name = name;
            // Each method returns the builder object itself
            // This allows for chaining of methods
            return this;
        }

        setAge(age) {
            this.age = age;
            return this;
        }

        setColor(color) {
            this.color = color;
            return this;
        }

        // This is the build method that returns a new instance of the Animal class
        build() {
            return new Animal(this);
        }
    };
    // ...
}

class Dog extends Animal {
    // This is an additional property of the dog class
    breed = null;

    // This is the constructor that calls the super constructor with the builder object
    constructor(builder) {
        super(builder);
        this.breed = builder.breed;
    }

    // This is an additional method of the dog class
    bark() {
        console.log("Woof! Woof!");
    }
}

class Dog extends Animal {
    // ...
    // This is the static Builder class within the Dog class
    static Builder = class extends Animal.Builder {
        // This is an additional property of the builder class
        breed = null;

        // This is an additional method to set the breed property
        setBreed(breed) {
            this.breed = breed;
            return this;
        }

        // This is the overridden build method that returns a new instance of the Dog class
        build() {
            return new Dog(this);
        }
    };
    // ...
}

// This is how you create a new dog object using the builder method with inheritance
let dog = new Dog.Builder()
    .setName("Spot")
    .setAge(3)
    .setColor("brown")
    .setBreed("Labrador")
    .build();

// This is how you access the properties and methods of the dog object
console.log(dog.name); // Spot
console.log(dog.age); // 3
console.log(dog.color); // brown
console.log(dog.breed); // Labrador
dog.bark(); // Woof! Woof!