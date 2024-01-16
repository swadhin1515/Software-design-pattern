// User object
function User(name) {
    this.name = name;
    this.say = function() {
        console.log("User: " + this.name);
    };
}

// DecoratedUser object
function DecoratedUser(user, street, city) {
    this.user = user;
    this.name = user.name; // ensures interface stays the same
    this.street = street;
    this.city = city;
    this.say = function() {
        console.log("Decorated User: " + this.name + ", " + this.street + ", " + this.city);
    };
}

// Example usage
var user = new User("Kelly");
user.say(); // User: Kelly
var decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.say(); // Decorated User: Kelly, Broadway, New York