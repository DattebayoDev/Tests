// Product Fetcher Exercise
// Learning objectives:
// 1. Understanding async/await and Promises
// 2. Handling API responses
// 3. Error handling
// 4. Loading states
// 5. Data transformation
// 6. API response caching

class ProductFetcher {
    constructor() {
      this.baseURL = 'https://fakestoreapi.com/products';
      this.cache = new Map(); // For storing previously fetched products
    }
  
    // Exercise 1: Basic API Fetch
    // TODO: Implement a method to fetch all products
    // Learning: async/await, fetch API, error handling
    async getAllProducts() {
      // Your code here:
      // 1. Use fetch to get products from this.baseURL
      // 2. Convert response to JSON
      // 3. Return the products array
      // 4. Add try/catch for error handling
    }
  
    // Exercise 2: Single Product Fetch with Timeout
    // TODO: Implement a method to fetch a single product with timeout
    // Learning: Promise.race, timeouts
    async getProductById(id, timeoutMs = 5000) {
      // Your code here:
      // 1. Create a timeout promise
      // 2. Fetch product by ID (${this.baseURL}/${id})
      // 3. Race between timeout and fetch
      // 4. Handle timeout error
    }
  
    // Exercise 3: Cached Product Fetch
    // TODO: Implement caching for products
    // Learning: Caching, Map object
    async getProductWithCache(id) {
      // Your code here:
      // 1. Check if product exists in cache
      // 2. If yes, return cached product
      // 3. If no, fetch from API and store in cache
      // 4. Return product
    }
  
    // Exercise 4: Fetch Products by Category
    // TODO: Implement filtering products by category
    // Learning: Array methods, URL parameters
    async getProductsByCategory(category) {
      // Your code here:
      // 1. Fetch all products
      // 2. Filter products by category
      // 3. Return filtered array
    }
  
    // Exercise 5: Price Converter
    // TODO: Implement currency conversion
    // Learning: Data transformation, Math methods
    async getProductsInCurrency(currency = 'EUR') {
      // Your code here:
      // 1. Fetch all products
      // 2. Convert prices (assume EUR is 0.85x USD)
      // 3. Return products with converted prices
    }
  }
  
  // Example test cases (uncomment to test your implementation):
  async function runTests() {
    const fetcher = new ProductFetcher();
  
    try {
      // Test 1: Get all products
      console.log('Getting all products...');
      const products = await fetcher.getAllProducts();
      console.log(`Found ${products.length} products`);
  
      // Test 2: Get single product with timeout
      console.log('Getting product with ID 1...');
      const product = await fetcher.getProductById(1);
      console.log('Product:', product.title);
  
      // Add more test cases for other methods...
  
    } catch (error) {
      console.error('Test failed:', error.message);
    }
  }
  
  // Run the tests
  // runTests();