/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var m = 0;
  var buyPrice = prices[0];

  for (var i = 1; i < prices.length; i++) {
    var profit = prices[i] - buyPrice;

    if (m < profit) {
      m = profit;
    }

    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    }
  }

  return m;
};


// optimize
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else {
      const profit = currentPrice - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};
