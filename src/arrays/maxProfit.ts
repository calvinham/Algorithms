/*
Problem set: 
  You are given an array prices where prices[i] is the price of a given stock on the ith day.
  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Constraints:
  1 <= prices.length <= 105
  0 <= prices[i] <= 104

*/

export default function maxProfit(prices: number[]): number {
    let profit = 0,
        min = prices[0],
        i = 1,
        curr;

    while (i < prices.length) {
        curr = prices[i];
        if (curr < min) {
            min = curr;
        } else if (curr - min > profit) {
            profit = curr - min;
        }
        i++;
    }
    return profit;
}
