//TESTNET
// const { bscConstantsTest: bscConstants } = require('./bscConstanst');
// const PCWR_ABI = require('./abis/pancakeswapRouterTestAbi');

//MAINNET
const { bscConstants: bscConstants } = require('./bscConstanst');
const PANCAKESWAP_ABI = require('./abis/PANCAKESWAP_ABI');
const APESWAP_ABI = require('./abis/APESWAP_ABI');
const ICECREAM_ABI = require('./abis/ICECREAM_ABI');
const SHASHIMI_ABI = require('./abis/SHASHIMI_ABI');
const JULSWAP_ABI = require('./abis/JULSWAP_ABI');
const BAKERYSWAP_ABI = require('./abis/BAKERYSWAP_ABI');
const HYPERSWAP_ABI = require('./abis/HYPERSWAP_ABI');
const CHEESESWAP_ABI = require('./abis/CHEESESWAP_ABI');
const BURGERSWAP_ABI = require('./abis/BURGERSWAP_ABI');

// BSC PancakeSwap Router Contract
const pcsrContract = new web3.eth.Contract(
  PANCAKESWAP_ABI,
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

module.exports = {};
