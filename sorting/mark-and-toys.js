const filterRange = (prices, k) => {
  return prices.filter(price => price <= k);
};

const sortRemaining = prices => {
  return prices.sort((a, b) => a - b);
};

const maximumToys = (prices, k) => {
  const processedToys = sortRemaining(filterRange(prices, k));
  let maxToys = 0;
  processedToys.reduce((total, price) => {
    if (total + price <= k) {
      maxToys++;
    }
    total += price;
    return total;
  }, 0);
  return maxToys;
};

module.exports = { maximumToys, filterRange, sortRemaining };
