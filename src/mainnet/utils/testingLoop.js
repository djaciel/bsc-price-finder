const PriceFinder = require('./PriceFinder');
const tokens = require('./tokensV2');

console.log(`Deadline: ${Math.floor(Date.now() / 1000) + 60 * 20}`);

const tokensKey = Object.keys(tokens);

tokensKey.forEach((key) => {
  setTimeout(() => {
    PriceFinder.comparePrices(tokens.WBNB, tokens[key], true, false);
  }, 3000);
});
