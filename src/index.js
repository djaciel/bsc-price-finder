require('dotenv').config();
const express = require('express');
const http = require('http');
const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const _ = require('lodash');

//TESTNET
// const { bscConstantsTest: bscConstants } = require('./bscConstanst');
// const PCWR_ABI = require('./abis/pancakeswapRouterTestAbi');

//MAINNET
const { bscConstants: bscConstants } = require('./bscConstanst');
const PCWR_ABI = require('./abis/pancakeswapRouterAbi');
const APESWAP_ROUTER = require('./abis/APESWAP_ROUTER');
const ICECREAM_ROUTER = require('./abis/ICECREAM_ROUTER');
const SHASHIMI_ROUTER = require('./abis/SHASHIMI_ROUTER');
const JULSWAP_ROUTER = require('./abis/JULSWAP_ROUTER');
const BAKERYSWAP_ROUTER = require('./abis/BAKERYSWAP_ROUTER');
const HYPERSWAP_ROUTER = require('./abis/HYPERSWAP_ROUTER');
const CHEESESWAP_ROUTER = require('./abis/CHEESESWAP_ROUTER');
const BURGERSWAP_ROUTER = require('./abis/BURGERSWAP_ROUTER');

// SERVER CONFIG
const PORT = process.env.PORT || 5000;
const app = express();
const server = http
  .createServer(app)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

// WEB3 CONFIG
const web3 = new Web3(
  new HDWalletProvider(process.env.PRIVATE_KEY, bscConstants.BSC_RPC)
);
const BN = web3.utils.BN;

// BSC PancakeSwap Router Contract
const pcsrContract = new web3.eth.Contract(
  PCWR_ABI,
  bscConstants.PANCAKESWAP_ROUTER
);

const APESWAP_Contract = new web3.eth.Contract(
  APESWAP_ROUTER,
  bscConstants.APESWAP_ROUTER
);

const ICECREAM_Contract = new web3.eth.Contract(
  ICECREAM_ROUTER,
  bscConstants.ICECREAM_ROUTER
);

const SHASHIMI_Contract = new web3.eth.Contract(
  SHASHIMI_ROUTER,
  bscConstants.SHASHIMI_ROUTER
);

const JULSWAP_Contract = new web3.eth.Contract(
  JULSWAP_ROUTER,
  bscConstants.JULSWAP_ROUTER
);

const BAKERYSWAP_Contract = new web3.eth.Contract(
  BAKERYSWAP_ROUTER,
  bscConstants.BAKERYSWAP_ROUTER
);

const HYPERSWAP_Contract = new web3.eth.Contract(
  HYPERSWAP_ROUTER,
  bscConstants.HYPERSWAP_ROUTER
);

const CHEESESWAP_Contract = new web3.eth.Contract(
  CHEESESWAP_ROUTER,
  bscConstants.CHEESESWAP_ROUTER
);

const BURGERSWAP_Contract = new web3.eth.Contract(
  BURGERSWAP_ROUTER,
  bscConstants.BURGERSWAP_ROUTER
);

let priceMonitor;
let monitoringPrice = false;

async function monitorPrice() {
  if (monitoringPrice) {
    return;
  }

  console.log('\nChecking price...');
  monitoringPrice = true;

  pcsrContract.methods
    .getAmountsOut('1000000000000000000', [
      bscConstants.WBNB_ADDRESS,
      bscConstants.BUSD_ADDRESS,
    ])
    .call()
    .then((res) => {
      const price = web3.utils.fromWei(res[1], 'Ether');
      console.log('PANCAKESWAP    - WBNB Price:', price, ' BUSD');
    })
    .catch((error) => {
      console.error(error);
      monitoringPrice = false;
      clearInterval(priceMonitor);
      return;
    });

  APESWAP_Contract.methods
    .getAmountsOut('1000000000000000000', [
      bscConstants.WBNB_ADDRESS,
      bscConstants.BUSD_ADDRESS,
    ])
    .call()
    .then((res) => {
      const price = web3.utils.fromWei(res[1], 'Ether');
      console.log('APESWAP        - WBNB Price:', price, ' BUSD');
    })
    .catch((error) => {
      console.error(error);
      monitoringPrice = false;
      clearInterval(priceMonitor);
      return;
    });

  ICECREAM_Contract.methods
    .getAmountsOut('1000000000000000000', [
      bscConstants.WBNB_ADDRESS,
      bscConstants.BUSD_ADDRESS,
    ])
    .call()
    .then((res) => {
      const price = web3.utils.fromWei(res[1], 'Ether');
      console.log('ICECREAM       - WBNB Price:', price, ' BUSD');
    })
    .catch((error) => {
      console.error(error);
      monitoringPrice = false;
      clearInterval(priceMonitor);
      return;
    });

  SHASHIMI_Contract.methods
    .getAmountsOut('1000000000000000000', [
      bscConstants.WBNB_ADDRESS,
      bscConstants.BUSD_ADDRESS,
    ])
    .call()
    .then((res) => {
      const price = web3.utils.fromWei(res[1], 'Ether');
      console.log('SHASHIMI       - WBNB Price:', price, ' BUSD');
    })
    .catch((error) => {
      console.error(error);
      monitoringPrice = false;
      clearInterval(priceMonitor);
      return;
    });

  JULSWAP_Contract.methods
    .getAmountsOut('1000000000000000000', [
      bscConstants.WBNB_ADDRESS,
      bscConstants.BUSD_ADDRESS,
    ])
    .call()
    .then((res) => {
      const price = web3.utils.fromWei(res[1], 'Ether');
      console.log('JULSWAP        - WBNB Price:', price, ' BUSD');
    })
    .catch((error) => {
      console.error(error);
      monitoringPrice = false;
      clearInterval(priceMonitor);
      return;
    });

  BAKERYSWAP_Contract.methods
    .getAmountsOut('1000000000000000000', [
      bscConstants.WBNB_ADDRESS,
      bscConstants.BUSD_ADDRESS,
    ])
    .call()
    .then((res) => {
      const price = web3.utils.fromWei(res[1], 'Ether');
      console.log('BAKERYSWAP     - WBNB Price:', price, ' BUSD');
    })
    .catch((error) => {
      console.error(error);
      monitoringPrice = false;
      clearInterval(priceMonitor);
      return;
    });

  HYPERSWAP_Contract.methods
    .getAmountsOut('1000000000000000000', [
      bscConstants.WBNB_ADDRESS,
      bscConstants.BUSD_ADDRESS,
    ])
    .call()
    .then((res) => {
      const price = web3.utils.fromWei(res[1], 'Ether');
      console.log('HYPERSWAP      - WBNB Price:', price, ' BUSD');
    })
    .catch((error) => {
      console.error(error);
      monitoringPrice = false;
      clearInterval(priceMonitor);
      return;
    });

  CHEESESWAP_Contract.methods
    .getAmountsOut('1000000000000000000', [
      bscConstants.WBNB_ADDRESS,
      bscConstants.BUSD_ADDRESS,
    ])
    .call()
    .then((res) => {
      const price = web3.utils.fromWei(res[1], 'Ether');
      console.log('CHEESESWAP     - WBNB Price:', price, ' BUSD');
    })
    .catch((error) => {
      console.error(error);
      monitoringPrice = false;
      clearInterval(priceMonitor);
      return;
    });

  BURGERSWAP_Contract.methods
    .getAmountsOut('1000000000000000000', [
      bscConstants.WBNB_ADDRESS,
      bscConstants.BUSD_ADDRESS,
    ])
    .call()
    .then((res) => {
      const price = web3.utils.fromWei(res[1], 'Ether');
      console.log('BURGERSWAP     - WBNB Price:', price, ' BUSD');
    })
    .catch((error) => {
      console.error(error);
      monitoringPrice = false;
      clearInterval(priceMonitor);
      return;
    });

  monitoringPrice = false;
}

// Check markets every n seconds
const POLLING_INTERVAL = process.env.POLLING_INTERVAL || 5000; // 1 Second
priceMonitor = setInterval(async () => {
  await monitorPrice();
}, POLLING_INTERVAL);
