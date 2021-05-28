const bscConstants = require('../utils/bscConstanst');
const PANCAKESWAP_ABI = require('../abis/routers/PANCAKESWAP_ABI');
const APESWAP_ABI = require('../abis/routers/APESWAP_ABI');
const ICECREAM_ABI = require('../abis/routers/ICECREAM_ABI');
const SHASHIMI_ABI = require('../abis/routers/SHASHIMI_ABI');
const JULSWAP_ABI = require('../abis/routers/JULSWAP_ABI');
const BAKERYSWAP_ABI = require('../abis/routers/BAKERYSWAP_ABI');
const HYPERSWAP_ABI = require('../abis/routers/HYPERSWAP_ABI');
const CHEESESWAP_ABI = require('../abis/routers/CHEESESWAP_ABI');
const BURGERSWAP_ABI = require('../abis/routers/BURGERSWAP_ABI');

const PANCAKESWAP_Contract = new web3.eth.Contract(
  PANCAKESWAP_ABI,
  bscConstants.routers.PANCAKESWAP_ROUTER
);

const APESWAP_Contract = new web3.eth.Contract(
  APESWAP_ABI,
  bscConstants.routers.APESWAP_ROUTER
);

const ICECREAM_Contract = new web3.eth.Contract(
  ICECREAM_ABI,
  bscConstants.routers.ICECREAM_ROUTER
);

const SHASHIMI_Contract = new web3.eth.Contract(
  SHASHIMI_ABI,
  bscConstants.routers.SHASHIMI_ROUTER
);

const JULSWAP_Contract = new web3.eth.Contract(
  JULSWAP_ABI,
  bscConstants.routers.JULSWAP_ROUTER
);

const BAKERYSWAP_Contract = new web3.eth.Contract(
  BAKERYSWAP_ABI,
  bscConstants.routers.BAKERYSWAP_ROUTER
);

const HYPERSWAP_Contract = new web3.eth.Contract(
  HYPERSWAP_ABI,
  bscConstants.routers.HYPERSWAP_ROUTER
);

const CHEESESWAP_Contract = new web3.eth.Contract(
  CHEESESWAP_ABI,
  bscConstants.routers.CHEESESWAP_ROUTER
);

const BURGERSWAP_Contract = new web3.eth.Contract(
  BURGERSWAP_ABI,
  bscConstants.routers.BURGERSWAP_ROUTER
);

module.exports = {
  PANCAKESWAP_Contract,
  APESWAP_Contract,
  ICECREAM_Contract,
  SHASHIMI_Contract,
  JULSWAP_Contract,
  BAKERYSWAP_Contract,
  HYPERSWAP_Contract,
  CHEESESWAP_Contract,
  BURGERSWAP_Contract,
};
