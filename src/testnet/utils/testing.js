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

//PriceFinder.comparePrices(tokens.wbnb, tokens.busd, true);

let priceMonitor;
let iterator = 0;

async function monitorPrice() {
  PriceFinder.comparePrices(tokens.wbnb, tokens.busd, true);
}

priceMonitor = setInterval(async () => {
  console.log(`Iterator ${iterator}`);
  await monitorPrice();
  iterator++;
}, 10000);