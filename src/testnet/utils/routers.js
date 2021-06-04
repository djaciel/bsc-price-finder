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
const PANCAKESWAP2_ABI = require('../abis/routers/PANCAKESWAP2_ABI');
const HYPERSWAP_ABI = require('../abis/routers/HYPERSWAP_ABI');

const routers = {
  PANCAKESWAP: {
    contract: new web3.eth.Contract(
      PANCAKESWAP_ABI,
      bscConstants.routers.PANCAKESWAP_ROUTER
    ),
    address: bscConstants.routers.PANCAKESWAP_ROUTER,
    name: 'PANCAKESWAP',
  },
  PANCAKESWAP2: {
    contract: new web3.eth.Contract(
      PANCAKESWAP2_ABI,
      bscConstants.routers.PANCAKESWAP2_ROUTER
    ),
    address: bscConstants.routers.PANCAKESWAP2_ROUTER,
    name: 'PANCAKESWAP2',
  },
  HYPERSWAP: {
    contract: new web3.eth.Contract(HYPERSWAP_ABI, bscConstants.routers.HYPERSWAP_ROUTER),
    address: bscConstants.routers.HYPERSWAP_ROUTER,
    name: 'HYPERSWAP',
  },
};

module.exports = routers;
