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

PriceFinder.comparePrices(tokens.usdt, tokens.busd, true);
PriceFinder.comparePrices(tokens.usdt, tokens.eth, true);
PriceFinder.comparePrices(tokens.usdt, tokens.dai, true);
PriceFinder.comparePrices(tokens.usdt, tokens.usdt, true);

PriceFinder.comparePrices(tokens.usdt, tokens.btcb, true);
PriceFinder.comparePrices(tokens.usdt, tokens.beth, true);

// let priceMonitor;
// let iterator = 0;

// async function monitorPrice() {
//   PriceFinder.comparePrices(tokens.wbnb, tokens.eth, true);
// }

// priceMonitor = setInterval(async () => {
//   console.log(`Iterator ${iterator}`);
//   await monitorPrice();
//   iterator++;
// }, 10000);
