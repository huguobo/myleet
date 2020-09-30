// 输入：prices = [8,4,6,2,3]
// 输出：[4,2,4,2,3]
// 解释：
// 商品 0 的价格为 price[0]=8 ，你将得到 prices[1]=4 的折扣，所以最终价格为 8 - 4 = 4 。
// 商品 1 的价格为 price[1]=4 ，你将得到 prices[3]=2 的折扣，所以最终价格为 4 - 2 = 2 。
// 商品 2 的价格为 price[2]=6 ，你将得到 prices[3]=2 的折扣，所以最终价格为 6 - 2 = 4 。
// 商品 3 和 4 都没有折扣。

// 单调栈思想，next genetator https://mp.weixin.qq.com/s/poOH6CbXKtdGf1raBBI-0g

var finalPrices = prices => {
  const stack = [];
  for(let i = 0; i < prices.length; i++) {
    while(stack.length && prices[i] <= prices[stack.slice(-1)[0]]) {
      const top = stack.pop();
      prices[top] = prices[top] - prices[i]
    }
    stack.push(i);
  }
  return prices;
}