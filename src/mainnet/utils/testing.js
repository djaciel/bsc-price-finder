const PriceFinder = require('./PriceFinder');
const tokens = require('./tokensV2');

const routers = require('./routers');

//------------------------------
let priceMonitor;
let iterator = 0;

async function monitorPrice() {
  PriceFinder.comparePrices(tokens.WBNB, tokens.WAULTx, true, false);
  PriceFinder.comparePrices(tokens.WBNB, tokens.WEX, true, false);
  PriceFinder.comparePrices(tokens.WBNB, tokens.WIN, true, false);
  PriceFinder.comparePrices(tokens.WBNB, tokens.WOOP, true, false);
  PriceFinder.comparePrices(tokens.WBNB, tokens.WSB, true, false);
  PriceFinder.comparePrices(tokens.WBNB, tokens.XDOGE, true, false);
  PriceFinder.comparePrices(tokens.WBNB, tokens.XRP, true, false);
  PriceFinder.comparePrices(tokens.WBNB, tokens.XVS, true, false);
  PriceFinder.comparePrices(tokens.WBNB, tokens.YUMMY, true, false);
  PriceFinder.comparePrices(tokens.WBNB, tokens.ZIL, true, false);
}

priceMonitor = setInterval(async () => {
  console.log(
    `\nIterator: ${iterator}, Deadline: ${
      Math.floor(Date.now() / 1000) + 60 * 20
    } -------------------------------------------------\n`
  );
  await monitorPrice();
  iterator++;
}, 10000);

//------------------------------

//PriceFinder.comparePrices(tokens.wbnb, tokens.eth, true, true);
//PriceFinder.comparePrices(tokens.wbnb, tokens.eth, true, false);
/*
btc:
  btcb

eth:
  eth
  beth

usdt:
  usdt

ada:
  ada

doge:
  doge

xrp:
  xrp

dot:
  dot

uni:
  uni

link:
  link

ltc:
  ltc

busd:
  busd

*/
