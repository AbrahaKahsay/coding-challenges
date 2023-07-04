// You are given an integer array prices representing the prices of various chocolates in a store. 
// You are also given a single integer money, which represents your initial amount of money.
// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money.
// You would like to minimize the sum of the prices of the two chocolates you buy.
// Return the amount of money you will have leftover after buying the two chocolates. 
// If there is no way for you to buy two chocolates without ending up in debt, return money. 
// Note that the leftover must be non-negative.

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
   let sorted = prices.sort((a,b) => a-b);
   for(i=0; i<sorted.length; i++){
       if (sorted[i]+sorted[i+1] <= money){
           return money - (sorted[i]+sorted[i+1])
       } else {
           return money
       }
   }  
};
