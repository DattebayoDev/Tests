class ShoppingCart {
  // Should have methods for:
  // 1. Adding items (check inventory first)
  // 2. Processing payment with timeout
  // 3. Handling concurrent operations

  constructor() {
    // Simulate a database of inventory
    this.inventory = {
      laptop: { price: 999, stock: 5 },
      phone: { price: 699, stock: 8 },
      tablet: { price: 399, stock: 3 },
    };
    this.cart = [];
  }

  // TODO: Implement these methods
  async addToCart(itemName, quantity) {
    // 1. Check if item exists
    // 2. Check if enough stock
    // 3. Add to cart if available
    // 4. Throw error if not available

    if (
      (itemName in this.inventory) &
      (quantity < this.inventory[itemName].stock)
    ) {
      this.cart.push(itemName, quantity);
      this.inventory[itemName].stock =
        this.inventory[itemName].stock - quantity;
    } else {
        
      throw Error("Not enough");
    }
  }

  async checkInventory(itemName) {
    // Simulate database check with delay
  }

  async processOrder(timeoutMs = 5000) {
    // 1. Calculate total
    // 2. Process payment with timeout
    // 3. Update inventory
    // 4. Clear cart if successful
  }
}

amazon = new ShoppingCart();
amazon.addToCart("phone", 5);
amazon.addToCart("phone", 5);
