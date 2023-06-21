/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var m = 0;
    var buyPrice = prices[0]

    for(var i = 1; i < prices.length; i++) {
        var profit = prices[i] - buyPrice

        if(m < profit) {
            m = profit
        }

        if(buyPrice > prices[i]) {
            buyPrice = prices[i]
        }
    }

    return m
 };