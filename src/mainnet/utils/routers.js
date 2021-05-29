const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const _ = require('lodash');
require('dotenv').config();
const bscConstants = require('./bscConstants');

const web3 = new Web3(
  new HDWalletProvider(process.env.PRIVATE_KEY, bscConstants.BSC_RPC)
);
const BN = web3.utils.BN;

const PANCAKESWAP_ABI = require('../abis/routers/PANCAKESWAP_ABI');
const APESWAP_ABI = require('../abis/routers/APESWAP_ABI');
const ICECREAM_ABI = require('../abis/routers/ICECREAM_ABI');
const SHASHIMI_ABI = require('../abis/routers/SHASHIMI_ABI');
const JULSWAP_ABI = require('../abis/routers/JULSWAP_ABI');
const BAKERYSWAP_ABI = require('../abis/routers/BAKERYSWAP_ABI');
const HYPERSWAP_ABI = require('../abis/routers/HYPERSWAP_ABI');
const CHEESESWAP_ABI = require('../abis/routers/CHEESESWAP_ABI');
const BURGERSWAP_ABI = require('../abis/routers/BURGERSWAP_ABI');

const routers = {
  PANCAKESWAP: {
    contract: new web3.eth.Contract(
      PANCAKESWAP_ABI,
      bscConstants.routers.PANCAKESWAP_ROUTER
    ),
    address: bscConstants.routers.PANCAKESWAP_ROUTER,
    name: 'PANCAKESWAP',
  },
  APESWAP: {
    contract: new web3.eth.Contract(
      APESWAP_ABI,
      bscConstants.routers.APESWAP_ROUTER
    ),
    address: bscConstants.routers.APESWAP_ROUTER,
    name: 'APESWAP',
  },
  ICECREAM: {
    contract: new web3.eth.Contract(
      ICECREAM_ABI,
      bscConstants.routers.ICECREAM_ROUTER
    ),
    address: bscConstants.routers.ICECREAM_ROUTER,
    name: 'ICECREAM',
  },
  // SHASHIMI: {
  //   contract: new web3.eth.Contract(
  //     SHASHIMI_ABI,
  //     bscConstants.routers.SHASHIMI_ROUTER
  //   ),
  //   address: bscConstants.routers.SHASHIMI_ROUTER,
  //   name: 'SHASHIMI',
  // },
  JULSWAP: {
    contract: new web3.eth.Contract(
      JULSWAP_ABI,
      bscConstants.routers.JULSWAP_ROUTER
    ),
    address: bscConstants.routers.JULSWAP_ROUTER,
    name: 'JULSWAP',
  },
  BAKERYSWAP: {
    contract: new web3.eth.Contract(
      BAKERYSWAP_ABI,
      bscConstants.routers.BAKERYSWAP_ROUTER
    ),
    address: bscConstants.routers.BAKERYSWAP_ROUTER,
    name: 'BAKERYSWAP',
  },
  HYPERSWAP: {
    contract: new web3.eth.Contract(
      HYPERSWAP_ABI,
      bscConstants.routers.HYPERSWAP_ROUTER
    ),
    address: bscConstants.routers.HYPERSWAP_ROUTER,
    name: 'HYPERSWAP',
  },
  CHEESESWAP: {
    contract: new web3.eth.Contract(
      CHEESESWAP_ABI,
      bscConstants.routers.CHEESESWAP_ROUTER
    ),
    address: bscConstants.routers.CHEESESWAP_ROUTER,
    name: 'CHEESESWAP',
  },
  BURGERSWAP: {
    contract: new web3.eth.Contract(
      BURGERSWAP_ABI,
      bscConstants.routers.BURGERSWAP_ROUTER
    ),
    address: bscConstants.routers.BURGERSWAP_ROUTER,
    name: 'BURGERSWAP',
  },
};

module.exports = routers;
