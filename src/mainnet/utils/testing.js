const PriceFinder = require('./PriceFinder');
const tokens = require('./tokens');

const routers = require('./routers');

// const priceReader = async () => {
//   const price = await PriceFinder.getPrice(
//     routers['APESWAP'],
//     tokens.wbnb,
//     tokens.busd
//   );

//   console.log(price);
// };

// priceReader();
// console.log('asd');

//---------------------
// PriceFinder.getPrice(routers['PANCAKESWAP'], tokens.wbnb, tokens.busd).then(
//   (res) => console.log(res)
// );

//---------------------

// const priceReader = async () => {
//   const result = await PriceFinder.getPrices(tokens.wbnb, tokens.busd);
//   console.log(result);
// };

// priceReader();

Object.keys(tokens).forEach((token) => {
  PriceFinder.comparePrices(tokens[token], tokens.busd, true);
});
