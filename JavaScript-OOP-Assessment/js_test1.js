// Exercise Set 1: Classes & Private Fields
// Time: ~30 mins
class BankAccount {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#transactions.push(`You have deposited ${amount}`);
    } else {
      console.error("You entered a negative Number ");
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      this.#transactions.push(`You have withdrawn ${amount}`);
    } else {
      console.error("You don't have enough balance");
    }
  }

  get Statement() {
    return this.#transactions;
  }

  get balance() {
    return this.#balance;
  }
  // TODO: Implement these methods
  // 1. deposit(amount) - Add validation
  // 2. withdraw(amount) - Prevent overdraft
  // 3. getStatement() - Return transaction history
  // 4. get balance() - Return current balance

  // Bonus: Add interest calculation
}

// Exercise Set 2: Inheritance & Method Override
// Time: ~20 mins
class Vehicle {
  constructor(type, speed) {
    this.type = type;
    this.speed = speed;
  }

  move() {
    return `Moving at ${this.speed}km/h`;
  }
}

// TODO: Create Car and Bicycle classes that:
// 1. Inherit from Vehicle
// 2. Override move() with specific behavior
// 3. Add unique methods (e.g., honk() for Car)
// 4. Use super() correctly

// Exercise Set 3: Static Methods & Singleton
// Time: ~30 mins
class Counter {
  static #instance;
  #count = 0;

  // TODO:
  // 1. Implement singleton pattern
  // 2. Add increment/decrement methods
  // 3. Add static method to reset all counters
  // 4. Prevent direct instantiation
}

// Exercise Set 4: Async Operations
// Time: ~30 mins
/*
Exercise: Build a DataFetcher class that handles API requests

Part 1: fetchWithTimeout method
- Create a method that fetches data but times out if it takes too long
- The method should take two parameters: url and timeout (in milliseconds)
- If the fetch takes longer than timeout, throw an error "Request Timed Out"
- Return the fetched data as JSON

Example usage:
const fetcher = new DataFetcher();
fetcher.fetchWithTimeout('https://api.example.com/data', 5000) // 5 second timeout

Hints:
- Use Promise.race() to compete between fetch and timeout
- Remember to handle errors with try/catch
*/



// Exercise Set 5: Event System
// Time: ~40 mins
class EventEmitter {
  // TODO: Build mini event system:
  // 1. on(event, callback)
  // 2. off(event, callback)
  // 3. emit(event, data)
  // 4. once(event, callback)
}

// Exercise Set 6: Error Handling
// Time: ~20 mins
class Validator {
  // TODO: Create methods to:
  // 1. Validate email format
  // 2. Check password strength
  // 3. Custom error classes
  // 4. Error logging system
}

// Each exercise includes unit tests:
// describe('BankAccount', () => {
//   test('should handle deposits correctly', () => {
//     const account = new BankAccount();
//     account.deposit(100);
//     expect(account.balance).toBe(100);
//   });

//   test('should prevent negative withdrawals', () => {
//     const account = new BankAccount();
//     expect(() => account.withdraw(50)).toThrow();
//   });
// });
