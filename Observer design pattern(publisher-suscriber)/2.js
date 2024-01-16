// The StockExchange class
class StockExchange {
    constructor(name) {
        this.name = name; // The name of the stock exchange
        this.price = 0; // The current stock price
        this.observers = []; // The list of observers
    }

    // Add an observer to the list
    attach(investor) {
        this.observers.push(investor);
    }

    // Remove an observer from the list
    detach(investor) {
        let index = this.observers.indexOf(investor);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    // Notify all observers with the current price
    notify(price) {
        for (let observer of this.observers) {
            observer.update(price);
        }
    }

    // Set the current price and notify the observers
    setPrice(price) {
        this.price = price;
        this.notify(price);
    }
}

// The Investor class
class Investor {
    constructor(name, budget, strategy) {
        this.name = name; // The name of the investor
        this.budget = budget; // The budget of the investor
        this.strategy = strategy; // The strategy of the investor
        this.stocks = 0; // The number of stocks the investor owns
    }

    // Update the investor with the current price
    update(price) {
        // Perform some action based on the strategy and the price
        // For example, buy, sell, or hold the stock
        switch (this.strategy) {
            case "aggressive":
                // Buy as many stocks as possible if the price is low
                if (price < 50 && this.budget >= price) {
                    let quantity = Math.floor(this.budget / price);
                    this.budget -= quantity * price;
                    this.stocks += quantity;
                    console.log(`${this.name} bought ${quantity} stocks at $${price} each.`);
                }
                // Sell all stocks if the price is high
                else if (price > 100 && this.stocks > 0) {
                    this.budget += this.stocks * price;
                    console.log(`${this.name} sold ${this.stocks} stocks at $${price} each.`);
                    this.stocks = 0;
                }
                break;
            case "conservative":
                // Buy one stock if the price is low
                if (price < 50 && this.budget >= price) {
                    this.budget -= price;
                    this.stocks++;
                    console.log(`${this.name} bought one stock at $${price}.`);
                }
                // Sell one stock if the price is high
                else if (price > 100 && this.stocks > 0) {
                    this.budget += price;
                    this.stocks--;
                    console.log(`${this.name} sold one stock at $${price}.`);
                }
                break;
            case "random":
                // Buy or sell a random number of stocks
                let action = Math.random() < 0.5 ? "buy" : "sell";
                let quantity = Math.floor(Math.random() * 10) + 1;
                if (action === "buy" && this.budget >= price * quantity) {
                    this.budget -= price * quantity;
                    this.stocks += quantity;
                    console.log(`${this.name} bought ${quantity} stocks at $${price} each.`);
                } else if (action === "sell" && this.stocks >= quantity) {
                    this.budget += price * quantity;
                    this.stocks -= quantity;
                    console.log(`${this.name} sold ${quantity} stocks at $${price} each.`);
                }
                break;
        }
    }
}

// Create some stock exchanges
let nasdaq = new StockExchange("NASDAQ");
let nyse = new StockExchange("NYSE");

// Create some investors
let alice = new Investor("Alice", 1000, "aggressive");
let bob = new Investor("Bob", 1000, "conservative");
let charlie = new Investor("Charlie", 1000, "random");

// Attach some investors to the stock exchanges
nasdaq.attach(alice);
nasdaq.attach(bob);
nyse.attach(charlie);

// Set some prices and notify the investors
nasdaq.setPrice(40); // Alice bought 25 stocks at $40 each. Bob bought one stock at $40.
nyse.setPrice(60); // Charlie sold 6 stocks at $60 each.
nasdaq.setPrice(120); // Alice sold 25 stocks at $120 each. Bob sold one stock at $120.
nyse.setPrice(80); // Charlie bought 9 stocks at $80 each.
nasdaq.setPrice(12000);