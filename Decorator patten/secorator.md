`The decorator design pattern is a way of adding new functionality or behavior to an existing object without modifying its original code. It is also known as a wrapper pattern, because it wraps the original object with another object that implements the same interface, but adds some extra features12.

A decorator is a function that takes an object as an argument and returns a new object that enhances the original object. The new object can have additional properties or methods, or override the existing ones. The original object is not changed, but decorated with new capabilities.

For example, suppose you have a User object that has a name and a say method. You can create a DecoratedUser object that decorates the User object with some additional information, such as the street and city. The DecoratedUser object will have the same name and say method as the User object, but it will also have a street and city property, and a modified say method that prints the address as well. Here is a possible implementation in JavaScript:
`

`// User object
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
`

`
`The decorator design pattern is useful when you want to extend the functionality of an object dynamically, without affecting other instances of the same class, or without using inheritance. It is also useful when you want to compose different features or behaviors from multiple decorators, rather than creating a complex subclass hierarchy12.
`
**However, the decorator design pattern is not very common in JavaScript, because the language already supports dynamic object extension and composition natively. You can easily add or modify properties or methods of an object at runtime, without using a decorator function. You can also use the extend and mixin patterns to achieve similar effects23.`**