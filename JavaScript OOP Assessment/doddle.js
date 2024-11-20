class DataFetcher {
  // First method: fetchWithTimeout
  async fetchWithTimeout(url, timeout) {
    // TODO:
    // 1. Create a fetch promise
    // 2. Create a timeout promise that rejects after 'timeout' ms
    // 3. Race them against each other
    // 4. Return the parsed JSON data
    const fetchData = fetch(url);

    const fetchPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("Request Timed Out")), timeout);
    });

    try {
      const promise = await Promise.race([fetchData, fetchPromise]);
      const response = await promise.json();
      return response;
    } catch (error) {
      throw error;
    }
  }

  // Second method: fetchWithRetry
  async fetchWithRetry(url, maxRetries = 3, timeout = 5000) {
    // TODO:
    // 1. Use fetchWithTimeout
    // 2. If it fails, retry up to maxRetries times
    // 3. Keep track of retries
    // 4. Return data if successful
    let retryCount = 0;

    while (retryCount <= maxRetries) {
      console.log(retryCount);
      try {
        const fetchAgain = await this.fetchWithTimeout(url, timeout);
        return fetchAgain;
      } catch (error) {
        retryCount++;

        if (maxRetries < retryCount) {
          console.log("You are out of tries");
          throw error
        } else {
          console.log(`Trying again!!!. You are on your ${retryCount} try`);
        }
      }
    }
  }
}

let dataFetcher = new DataFetcher();
// dataFetcher.fetchWithTimeout('https://hacker-news.firebaseio.com/v0/item/8863.json', 500).then((data) => console.log(data))

dataFetcher
  .fetchWithRetry("https://hacker-news.firebaseio.com/v0/item/8863.json", 3, 50)
  .then((data) => console.log(data));
