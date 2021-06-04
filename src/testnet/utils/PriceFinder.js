const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const _ = require('lodash');
require('dotenv').config();
const bscConstants = require('./bscConstants');
const routers = require('./routers');
const web3 = new Web3(
  new HDWalletProvider(process.env.PRIVATE_KEY, bscConstants.BSC_RPC)
);
const BN = web3.utils.BN;

class PriceFinder {
  static async getPrices(tokenA, tokenB) {
    return Promise.all(
      Object.keys(routers).map(async (routerName) => {
        try {
          return await PriceFinder.getPrice(
            routers[routerName],
            tokenA,
            tokenB
          );
        } catch (error) {
          return;
        }
      })
    );
  }

  static comparePrices(tokenA, tokenB, showDetail) {
    this.getPrices(tokenA, tokenB).then((prices) => {
      if (showDetail) {
        console.log(prices);
      }

      console.log('------------------------------------------------------');
    });
  }

  static async getPrice(router, tokenA, tokenB) {
    return new Promise((resolve, reject) => {
      router.contract.methods
        .getAmountsOut('1000000000000000000', [
          tokenA.address.mainnet,
          tokenB.address.mainnet,
        ])
        .call()
        .then((res) => {
          const price = new BN(web3.utils.fromWei(res[1], 'Ether'));
          const price_str = web3.utils.fromWei(res[1], 'Ether');
          const price_float = this.getFloat(price_str.toString(), 4);

          // console.log(
          //   `${router.name}       - ${tokenA.symbol} Price: ${price_str} ${tokenB.symbol} ${res}`
          // );

          resolve({
            router_name: router.name,
            router_address: router.address,
            price: price,
            price_str: price_str,
            price_float: price_float,
            tokenA_name: tokenA.symbol,
            tokenA_address: tokenA.address.mainnet,
            tokenB_name: tokenB.symbol,
            tokenB_address: tokenB.address.mainnet,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getFloat(str, val) {
    str = str.toString();
    str = str.slice(0, str.indexOf('.') + val + 1);
    return Number(str);
  }
}

module.exports = PriceFinder;
