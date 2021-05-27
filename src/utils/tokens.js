const tokens = [
  {
    name: 'WBNB Token',
    symbol: 'WBNB',
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
  },
  {
    name: 'Bakery Token',
    symbol: 'BAKE',
    address: '0xe02df9e3e622debdd69fb838bb799e3f168902c5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png',
  },
  {
    name: 'BUSD Token',
    symbol: 'BUSD',
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png',
  },
  {
    name: 'Ethereum Token',
    symbol: 'ETH',
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png',
  },
  {
    name: 'BTCB Token',
    symbol: 'BTCB',
    address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png',
  },
  {
    name: 'BAND Protocol Token',
    symbol: 'BAND',
    address: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18.png',
  },
  {
    name: 'EOS Token',
    symbol: 'EOS',
    address: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png',
  },
  {
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0x55d398326f99059ff775485246999027b3197955',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x55d398326f99059ff775485246999027b3197955.png',
  },
  {
    name: 'XRP Token',
    symbol: 'XRP',
    address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png',
  },
  {
    name: 'Bitcoin Cash Token',
    symbol: 'BCH',
    address: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png',
  },
  {
    name: 'Litecoin Token',
    symbol: 'LTC',
    address: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png',
  },
  {
    name: 'Cardano Token',
    symbol: 'ADA',
    address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png',
  },
  {
    name: 'Cosmos Token',
    symbol: 'ATOM',
    address: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x0eb3a705fc54725037cc9e008bdede697f62f335.png',
  },
  {
    name: 'Tezos Token',
    symbol: 'XTZ',
    address: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x16939ef78684453bfdfb47825f8a5f714f12623a.png',
  },
  {
    name: 'Ontology Token',
    symbol: 'ONT',
    address: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xfd7b3a77848f1c2d67e05e54d78d174a0c850335.png',
  },
  {
    name: 'Zcash Token',
    symbol: 'ZEC',
    address: '0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb.png',
  },
  {
    name: 'Dai Token',
    symbol: 'DAI',
    address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3.png',
  },
  {
    name: 'YFII.finance Token',
    symbol: 'YFII',
    address: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x7f70642d88cf1c4a3a7abb072b53b929b653eda5.png',
  },
  {
    name: 'Cream',
    symbol: 'CREAM',
    address: '0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888.png',
  },
  {
    name: 'Prometeus',
    symbol: 'PROM',
    address: '0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5.png',
  },
  {
    name: 'CanYaCoin',
    symbol: 'CAN',
    address: '0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56.png',
  },
  {
    name: 'Polkadot Token',
    symbol: 'DOT',
    address: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png',
  },
  {
    name: 'PancakeSwap Token',
    symbol: 'CAKE',
    address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png',
  },
  {
    name: 'Ankr',
    symbol: 'ANKR',
    address: '0xf307910a4c7bbc79691fd374889b36d8531b08e3',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xf307910a4c7bbc79691fd374889b36d8531b08e3.png',
  },
  {
    name: 'ChainLink Token',
    symbol: 'LINK',
    address: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd.png',
  },
  {
    name: 'Burger Swap',
    symbol: 'BURGER',
    address: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xae9269f27437f0fcbc232d39ec814844a51d6b8f.png',
  },
  {
    name: 'SPARTAN PROTOCOL TOKEN',
    symbol: 'SPART',
    address: '0xe4ae305ebe1abe663f261bc00534067c80ad677c',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xe4ae305ebe1abe663f261bc00534067c80ad677c.png',
  },
  {
    name: 'Trust Wallet',
    symbol: 'TWT',
    address: '0x4b0f1812e5df2a09796481ff14017e6005508003',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x4b0f1812e5df2a09796481ff14017e6005508003.png',
  },
  {
    name: 'Venus',
    symbol: 'XVS',
    address: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png',
  },
  {
    name: 'AlphaToken',
    symbol: 'ALPHA',
    address: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xa1faa113cbe53436df28ff0aee54275c13b40975.png',
  },
  {
    name: 'Beefy.finance',
    symbol: 'BIFI',
    address: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xCa3F508B8e4Dd382eE878A314789373D80A5190A.png',
  },
  {
    name: 'yearn.finance',
    symbol: 'YFI',
    address: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e.png',
  },
  {
    name: 'Uniswap',
    symbol: 'UNI',
    address: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xbf5140a22578168fd562dccf235e5d43a02ce9b1.png',
  },
  {
    name: 'fry.world',
    symbol: 'FRIES',
    address: '0x393B312C01048b3ed2720bF1B090084C09e408A1',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x393B312C01048b3ed2720bF1B090084C09e408A1.png',
  },
  {
    name: 'StableXSwap',
    symbol: 'STAX',
    address: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4.png',
  },
  {
    name: 'Filecoin',
    symbol: 'FIL',
    address: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png',
  },
  {
    name: 'KAVA',
    symbol: 'KAVA',
    address: '0x5F88AB06e8dfe89DF127B2430Bba4Af600866035',
    chainId: 56,
    decimals: 6,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x5F88AB06e8dfe89DF127B2430Bba4Af600866035.png',
  },
  {
    name: 'USDX',
    symbol: 'USDX',
    address: '0x1203355742e76875154c0d13eb81dcd7711dc7d9',
    chainId: 56,
    decimals: 6,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x1203355742e76875154c0d13eb81dcd7711dc7d9.png',
  },
  {
    name: 'Injective Protocol',
    symbol: 'INJ',
    address: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xa2B726B1145A4773F68593CF171187d8EBe4d495.png',
  },
  {
    name: 'Swipe',
    symbol: 'SXP',
    address: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x47bead2563dcbf3bf2c9407fea4dc236faba485a.png',
  },
  {
    name: 'Binance-Peg USD Coin',
    symbol: 'USDC',
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.png',
  },
  {
    name: 'CertiK Token',
    symbol: 'CTK',
    address: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
    chainId: 56,
    decimals: 6,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929.png',
  },
  {
    name: 'NAR Token',
    symbol: 'NAR',
    address: '0xa1303e6199b319a891b79685f0537d289af1fc83',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xa1303e6199b319a891b79685f0537d289af1fc83.png',
  },
  {
    name: 'Nyanswop Token',
    symbol: 'NYA',
    address: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xbfa0841f7a90c4ce6643f651756ee340991f99d5.png',
  },
  {
    name: 'HARD',
    symbol: 'HARD',
    address: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
    chainId: 56,
    decimals: 6,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xf79037f6f6be66832de4e7516be52826bc3cbcc4.png',
  },
  {
    name: 'ROOBEE',
    symbol: 'bROOBEE',
    address: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe.png',
  },
  {
    name: 'Unifi Token',
    symbol: 'UNFI',
    address: '0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B.png',
  },
  {
    name: 'BLINk',
    symbol: 'BLK',
    address: '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
    chainId: 56,
    decimals: 6,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F.png',
  },
  {
    name: 'QUSD Stablecoin',
    symbol: 'QUSD',
    address: '0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E.png',
  },
  {
    name: 'Qian Governance Token',
    symbol: 'KUN',
    address: '0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584.png',
  },
  {
    name: 'VAI Stablecoin',
    symbol: 'VAI',
    address: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png',
  },
  {
    name: 'Juventus',
    symbol: 'JUV',
    address: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
    chainId: 56,
    decimals: 2,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xc40c9a843e1c6d01b7578284a9028854f6683b1b.png',
  },
  {
    name: 'Paris Saint-Germain',
    symbol: 'PSG',
    address: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
    chainId: 56,
    decimals: 2,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xbc5609612b7c44bef426de600b5fd1379db2ecf1.png',
  },
  {
    name: 'Ditto',
    symbol: 'DITTO',
    address: '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
    chainId: 56,
    decimals: 9,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x233d91A0713155003fc4DcE0AFa871b508B3B715.png',
  },
  {
    name: 'Math',
    symbol: 'MATH',
    address: '0xf218184af829cf2b0019f8e6f0b2423498a36983',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xf218184af829cf2b0019f8e6f0b2423498a36983.png',
  },
  {
    name: 'Fuel',
    symbol: 'FUEL',
    address: '0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A.png',
  },
  {
    name: 'Nuls',
    symbol: 'NULS',
    address: '0x8cd6e29d3686d24d3c2018cee54621ea0f89313b',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x8cd6e29d3686d24d3c2018cee54621ea0f89313b.png',
  },
  {
    name: 'NerveNetwork',
    symbol: 'NVT',
    address: '0xf0e406c49c63abf358030a299c0e00118c4c6ba5',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xf0e406c49c63abf358030a299c0e00118c4c6ba5.png',
  },
  {
    name: 'Reef',
    symbol: 'REEF',
    address: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e.png',
  },
  {
    name: 'OG',
    symbol: 'OG',
    address: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
    chainId: 56,
    decimals: 2,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xf05e45ad22150677a017fbd94b84fbb63dc9b44c.png',
  },
  {
    name: 'Atletico de Madrid',
    symbol: 'ATM',
    address: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
    chainId: 56,
    decimals: 2,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x25e9d05365c867e59c1904e7463af9f312296f9e.png',
  },
  {
    name: 'AS Roma',
    symbol: 'ASR',
    address: '0x80d5f92c2c8c682070c95495313ddb680b267320',
    chainId: 56,
    decimals: 2,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x80d5f92c2c8c682070c95495313ddb680b267320.png',
  },
  {
    name: 'AllianceBlock',
    symbol: 'bALBT',
    address: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x72faa679e1008ad8382959ff48e392042a8b06f7.png',
  },
  {
    name: 'Tenet',
    symbol: 'TEN',
    address: '0xdff8cb622790b7f92686c722b02cab55592f152c',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xdff8cb622790b7f92686c722b02cab55592f152c.png',
  },
  {
    name: 'Helmet.insure',
    symbol: 'Helmet',
    address: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png',
  },
  {
    name: 'BSCEX',
    symbol: 'BSCX',
    address: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png',
  },
  {
    name: 'Standard BTC Hashrate Token',
    symbol: 'BTCST',
    address: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
    chainId: 56,
    decimals: 17,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x78650b139471520656b9e7aa7a5e9276814a38e9.png',
  },
  {
    name: 'Frontier Token',
    symbol: 'FRONT',
    address: '0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b.png',
  },
  {
    name: 'Soteria',
    symbol: 'wSOTE',
    address: '0x541e619858737031a1244a5d0cd47e5ef480342c',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x541e619858737031a1244a5d0cd47e5ef480342c.png',
  },
  {
    name: 'Mirror TSLA Token',
    symbol: 'mTSLA',
    address: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xF215A127A196e3988C09d052e16BcFD365Cd7AA3.png',
  },
  {
    name: 'Mirror AMZN Token',
    symbol: 'mAMZN',
    address: '0x3947B992DC0147D2D89dF0392213781b04B25075',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x3947B992DC0147D2D89dF0392213781b04B25075.png',
  },
  {
    name: 'Mirror NFLX Token',
    symbol: 'mNFLX',
    address: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc.png',
  },
  {
    name: 'Mirror GOOGL Token',
    symbol: 'mGOOGL',
    address: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f.png',
  },
  {
    name: 'UST Token',
    symbol: 'UST',
    address: '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x23396cF899Ca06c4472205fC903bDB4de249D6fC.png',
  },
  {
    name: 'b.earnfi',
    symbol: 'BFI',
    address: '0x81859801b01764D4f0Fa5E64729f5a6C3b91435b',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x81859801b01764D4f0Fa5E64729f5a6C3b91435b.png',
  },
  {
    name: 'bDollar',
    symbol: 'BDO',
    address: '0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454.png',
  },
  {
    name: 'bDollar Share',
    symbol: 'sBDO',
    address: '0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740.png',
  },
  {
    name: 'Elrond',
    symbol: 'EGLD',
    address: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe.png',
  },
  {
    name: 'AUTOv2',
    symbol: 'AUTO',
    address: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xa184088a740c695e156f91f5cc086a06bb78b827.png',
  },
  {
    name: 'Hedget',
    symbol: 'HGET',
    address: '0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731',
    chainId: 56,
    decimals: 6,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731.png',
  },
  {
    name: 'Litentry',
    symbol: 'LIT',
    address: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png',
  },
  {
    name: 'Linear Finance',
    symbol: 'LINA',
    address: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x762539b45a1dcce3d36d080f74d1aed37844b878.png',
  },
  {
    name: 'Beacon ETH',
    symbol: 'BETH',
    address: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png',
  },
  {
    name: 'lUSD',
    symbol: 'lUSD',
    address: '0x23e8a70534308a4AAF76fb8C32ec13d17a3BD89e',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x23e8a70534308a4AAF76fb8C32ec13d17a3BD89e.png',
  },
  {
    name: 'SafePal Token',
    symbol: 'SFP',
    address: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png',
  },
  {
    name: 'Compound Finance',
    symbol: 'COMP',
    address: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x52ce071bd9b1c4b00a0b92d298c512478cad67e8.png',
  },
  {
    name: 'Swirge Pay',
    symbol: 'SWGb',
    address: '0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb.png',
  },
  {
    name: 'renBTC',
    symbol: 'renBTC',
    address: '0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c.png',
  },
  {
    name: 'renDOGE',
    symbol: 'renDOGE',
    address: '0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3.png',
  },
  {
    name: 'anyMTLX',
    symbol: 'anyMTLX',
    address: '0x5921dee8556c4593eefcfad3ca5e2f618606483b',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x5921dee8556c4593eefcfad3ca5e2f618606483b.png',
  },
  {
    name: 'ZeroSwapToken',
    symbol: 'ZEE',
    address: '0x44754455564474a89358b2c2265883df993b12f0',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x44754455564474a89358b2c2265883df993b12f0.png',
  },
  {
    name: 'Berry',
    symbol: 'BRY',
    address: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830.png',
  },
  {
    name: 'Swingby',
    symbol: 'SWINGBY',
    address: '0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739.png',
  },
  {
    name: 'Dodo',
    symbol: 'DODO',
    address: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2.png',
  },
  {
    name: 'Sushi',
    symbol: 'SUSHI',
    address: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x947950bcc74888a40ffa2593c5798f11fc9124c4.png',
  },
  {
    name: 'OPEN Governance Token',
    symbol: 'bOPEN',
    address: '0xF35262a9d427F96d2437379eF090db986eaE5d42',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xF35262a9d427F96d2437379eF090db986eaE5d42.png',
  },
  {
    name: 'BoringDAO',
    symbol: 'BOR',
    address: '0x92d7756c60dcfd4c689290e8a9f4d263b3b32241',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x92d7756c60dcfd4c689290e8a9f4d263b3b32241.png',
  },
  {
    name: 'renZEC',
    symbol: 'renZEC',
    address: '0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7.png',
  },
  {
    name: 'Multiplier',
    symbol: 'bMXX',
    address: '0x4131b87f74415190425ccd873048c708f8005823',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x4131b87f74415190425ccd873048c708f8005823.png',
  },
  {
    name: 'IoTeX',
    symbol: 'IOTX',
    address: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x9678e42cebeb63f23197d726b29b1cb20d0064e5.png',
  },
  {
    name: 'xMARK',
    symbol: 'xMARK',
    address: '0x26a5dfab467d4f58fb266648cae769503cec9580',
    chainId: 56,
    decimals: 9,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x26a5dfab467d4f58fb266648cae769503cec9580.png',
  },
  {
    name: 'TokenPocket',
    symbol: 'TPT',
    address: '0xeca41281c24451168a37211f0bc2b8645af45092',
    chainId: 56,
    decimals: 4,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xeca41281c24451168a37211f0bc2b8645af45092.png',
  },
  {
    name: 'Yieldwatch',
    symbol: 'WATCH',
    address: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0.png',
  },
  {
    name: 'Bella Protocol',
    symbol: 'BEL',
    address: '0x8443f091997f06a61670b735ed92734f5628692f',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x8443f091997f06a61670b735ed92734f5628692f.png',
  },
  {
    name: 'DeXe',
    symbol: 'DEXE',
    address: '0x039cb485212f996a9dbb85a9a75d898f94d38da6',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x039cb485212f996a9dbb85a9a75d898f94d38da6.png',
  },
  {
    name: 'Ramp DEFI',
    symbol: 'RAMP',
    address: '0x8519ea49c997f50ceffa444d240fb655e89248aa',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x8519ea49c997f50ceffa444d240fb655e89248aa.png',
  },
  {
    name: 'Belt',
    symbol: 'BELT',
    address: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png',
  },
  {
    name: 'Basic Attention Token',
    symbol: 'BAT',
    address: '0x101d82428437127bf1608f699cd651e6abf9766e',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x101d82428437127bf1608f699cd651e6abf9766e.png',
  },
  {
    name: 'BUX',
    symbol: 'BUX',
    address: '0x211ffbe424b90e25a15531ca322adf1559779e45',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x211ffbe424b90e25a15531ca322adf1559779e45.png',
  },
  {
    name: 'ForTube',
    symbol: 'FOR',
    address: '0x658A109C5900BC6d2357c87549B651670E5b0539',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x658A109C5900BC6d2357c87549B651670E5b0539.png',
  },
  {
    name: 'My Neigbor Alice',
    symbol: 'ALICE',
    address: '0xac51066d7bec65dc4589368da368b212745d63e8',
    chainId: 56,
    decimals: 6,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xac51066d7bec65dc4589368da368b212745d63e8.png',
  },
  {
    name: 'Pancake Bunny',
    symbol: 'BUNNY',
    address: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png',
  },
  {
    name: 'Dego.Finance',
    symbol: 'DEGO',
    address: '0x3fda9383a84c05ec8f7630fe10adf1fac13241cc',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x3fda9383a84c05ec8f7630fe10adf1fac13241cc.png',
  },
  {
    name: 'LTO Network',
    symbol: 'LTO',
    address: '0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd.png',
  },
  {
    name: 'Contentos',
    symbol: 'COS',
    address: '0x96dd399f9c3afda1f194182f71600f1b65946501',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x96dd399f9c3afda1f194182f71600f1b65946501.png',
  },
  {
    name: 'Tixl',
    symbol: 'TXL',
    address: '0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5.png',
  },
  {
    name: 'Alpaca',
    symbol: 'ALPACA',
    address: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png',
  },
  {
    name: 'Dusk',
    symbol: 'DUSK',
    address: '0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c.png',
  },
  {
    name: 'bDIGG',
    symbol: 'bDIGG',
    address: '0x5986d5c77c65e5801a5caa4fae80089f870a71da',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x5986d5c77c65e5801a5caa4fae80089f870a71da.png',
  },
  {
    name: 'bBADGER',
    symbol: 'bBADGER',
    address: '0x1f7216fdb338247512ec99715587bb97bbf96eae',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x1f7216fdb338247512ec99715587bb97bbf96eae.png',
  },
  {
    name: 'Unitrade',
    symbol: 'TRADE',
    address: '0x7af173f350d916358af3e218bdf2178494beb748',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x7af173f350d916358af3e218bdf2178494beb748.png',
  },
  {
    name: 'PNT',
    symbol: 'PNT',
    address: '0xdaacb0ab6fb34d24e8a67bfa14bf4d95d4c7af92',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xdaacb0ab6fb34d24e8a67bfa14bf4d95d4c7af92.png',
  },
  {
    name: 'pBTC',
    symbol: 'pBTC',
    address: '0xed28a457a5a76596ac48d87c0f577020f6ea1c4c',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xed28a457a5a76596ac48d87c0f577020f6ea1c4c.png',
  },
  {
    name: 'Mirror Finance',
    symbol: 'MIR',
    address: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9.png',
  },
  {
    name: 'PolyCrowns',
    symbol: 'pCWS',
    address: '0xbcf39f0edda668c58371e519af37ca705f2bfcbd',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xbcf39f0edda668c58371e519af37ca705f2bfcbd.png',
  },
  {
    name: 'Zilliqa',
    symbol: 'ZIL',
    address: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
    chainId: 56,
    decimals: 12,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xb86abcb37c3a4b64f74f59301aff131a1becc787.png',
  },
  {
    name: 'Lien',
    symbol: 'LIEN',
    address: '0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3.png',
  },
  {
    name: 'Switcheo',
    symbol: 'SWTH',
    address: '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C.png',
  },
  {
    name: 'Ellipsis',
    symbol: 'EPS',
    address: '0xa7f552078dcc247c2684336020c03648500c6d9f',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xa7f552078dcc247c2684336020c03648500c6d9f.png',
  },
  {
    name: 'DFuture',
    symbol: 'DFT',
    address: '0x42712dF5009c20fee340B245b510c0395896cF6e',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x42712dF5009c20fee340B245b510c0395896cF6e.png',
  },
  {
    name: 'Gourmet Galaxy',
    symbol: 'GUM',
    address: '0xc53708664b99DF348dd27C3Ac0759d2DA9c40462',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xc53708664b99DF348dd27C3Ac0759d2DA9c40462.png',
  },
  {
    name: 'Harmony One',
    symbol: 'ONE',
    address: '0x03ff0ff224f904be3118461335064bb48df47938',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x03ff0ff224f904be3118461335064bb48df47938.png',
  },
  {
    name: 'Nerve Finance',
    symbol: 'NRV',
    address: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png',
  },
  {
    name: 'Easyfi Network',
    symbol: 'EASY',
    address: '0x7c17c8bed8d14bacce824d020f994f4880d6ab3b',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x7c17c8bed8d14bacce824d020f994f4880d6ab3b.png',
  },
  {
    name: 'Easy V2',
    symbol: 'EZ',
    address: '0x5512014efa6Cd57764Fa743756F7a6Ce3358cC83',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x5512014efa6Cd57764Fa743756F7a6Ce3358cC83.png',
  },
  {
    name: 'SafeMoon',
    symbol: 'SAFEMOON',
    address: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
    chainId: 56,
    decimals: 9,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3.png',
  },
  {
    name: 'Tau Bitcoin',
    symbol: '\ud835\udf0fBTC',
    address: '0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c',
    chainId: 56,
    decimals: 9,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c.png',
  },
  {
    name: 'Hoo',
    symbol: 'HOO',
    address: '0xe1d1f66215998786110ba0102ef558b22224c016',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xe1d1f66215998786110ba0102ef558b22224c016.png',
  },
  {
    name: 'Oddz',
    symbol: 'ODDZ',
    address: '0xcd40f2670cf58720b694968698a5514e924f742d',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xcd40f2670cf58720b694968698a5514e924f742d.png',
  },
  {
    name: 'APYSwap',
    symbol: 'APYS',
    address: '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7.png',
  },
  {
    name: 'Bondly',
    symbol: 'BONDLY',
    address: '0x96058f8c3e16576d9bd68766f3836d9a33158f89',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x96058f8c3e16576d9bd68766f3836d9a33158f89.png',
  },
  {
    name: 'TokoCrypto',
    symbol: 'TKO',
    address: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png',
  },
  {
    name: 'Itam',
    symbol: 'ITAM',
    address: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x04c747b40be4d535fc83d09939fb0f626f32800b.png',
  },
  {
    name: 'ARPA',
    symbol: 'ARPA',
    address: '0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e.png',
  },
  {
    name: 'Perlin X',
    symbol: 'PERL',
    address: '0x0f9e4d49f25de22c2202af916b681fbb3790497b',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x0f9e4d49f25de22c2202af916b681fbb3790497b.png',
  },
  {
    name: 'Juggernaut Finance',
    symbol: 'JGN',
    address: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75.png',
  },
  {
    name: 'Alien Worlds',
    symbol: 'TLM',
    address: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
    chainId: 56,
    decimals: 4,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x2222227e22102fe3322098e4cbfe18cfebd57c95.png',
  },
  {
    name: 'AlpaToken',
    symbol: 'ALPA',
    address: '0xc5e6689c9c8b02be7c49912ef19e79cf24977f03',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xc5e6689c9c8b02be7c49912ef19e79cf24977f03.png',
  },
  {
    name: 'Horizon Protocol',
    symbol: 'HZN',
    address: '0xC0eFf7749b125444953ef89682201Fb8c6A917CD',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xC0eFf7749b125444953ef89682201Fb8c6A917CD.png',
  },
  {
    name: 'Mix',
    symbol: 'MIX',
    address: '0xB67754f5b4C704A24d2db68e661b2875a4dDD197',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xB67754f5b4C704A24d2db68e661b2875a4dDD197.png',
  },
  {
    name: 'ChainGuardians',
    symbol: 'CGG',
    address: '0x1613957159e9b0ac6c80e824f7eea748a32a0ae2',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x1613957159e9b0ac6c80e824f7eea748a32a0ae2.png',
  },
  {
    name: 'Suterusu',
    symbol: 'SUTER',
    address: '0x4cfbbdfbd5bf0814472ff35c72717bd095ada055',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x4cfbbdfbd5bf0814472ff35c72717bd095ada055.png',
  },
  {
    name: 'Hakka Finance',
    symbol: 'HAKKA',
    address: '0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac.png',
  },
  {
    name: 'Exeedme',
    symbol: 'XED',
    address: '0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f.png',
  },
  {
    name: 'Swampy',
    symbol: 'SWAMP',
    address: '0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d.png',
  },
  {
    name: 'DefiDollar DAO',
    symbol: 'DFD',
    address: '0x9899a98b222fcb2f3dbee7df45d943093a4ff9ff',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x9899a98b222fcb2f3dbee7df45d943093a4ff9ff.png',
  },
  {
    name: 'Lympo Market Token',
    symbol: 'LMT',
    address: '0x9617857e191354dbea0b714d78bc59e57c411087',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x9617857e191354dbea0b714d78bc59e57c411087.png',
  },
  {
    name: 'Bittorrent',
    symbol: 'BTT',
    address: '0x8595f9da7b868b1822194faed312235e43007b49',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x8595f9da7b868b1822194faed312235e43007b49.png',
  },
  {
    name: 'Tron',
    symbol: 'TRX',
    address: '0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b.png',
  },
  {
    name: 'WINk',
    symbol: 'WIN',
    address: '0xaef0d72a118ce24fee3cd1d43d383897d05b4e99',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xaef0d72a118ce24fee3cd1d43d383897d05b4e99.png',
  },
  {
    name: 'Mirror COIN',
    symbol: 'mCOIN',
    address: '0x49022089e78a8d46ec87a3af86a1db6c189afa6f',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x49022089e78a8d46ec87a3af86a1db6c189afa6f.png',
  },
  {
    name: 'QIAN second generation dollar',
    symbol: 'QSD',
    address: '0x07aaa29e63ffeb2ebf59b33ee61437e1a91a3bb2',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x07aaa29e63ffeb2ebf59b33ee61437e1a91a3bb2.png',
  },
  {
    name: 'HYFI',
    symbol: 'HYFI',
    address: '0x9a319b959e33369C5eaA494a770117eE3e585318',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x9a319b959e33369C5eaA494a770117eE3e585318.png',
  },
  {
    name: 'DOGE',
    symbol: 'Doge',
    address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xbA2aE424d960c26247Dd6c32edC70B295c744C43.png',
  },
  {
    name: 'Oin Finance',
    symbol: 'OIN',
    address: '0x658E64FFcF40D240A43D52CA9342140316Ae44fA',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x658E64FFcF40D240A43D52CA9342140316Ae44fA.png',
  },
  {
    name: 'BigOne Token',
    symbol: 'ONE',
    address: '0x04BAf95Fd4C52fd09a56D840bAEe0AB8D7357bf0',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x04BAf95Fd4C52fd09a56D840bAEe0AB8D7357bf0.png',
  },
  {
    name: 'Polkamon',
    symbol: 'PMON',
    address: '0x1796ae0b0fa4862485106a0de9b654eFE301D0b2',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x1796ae0b0fa4862485106a0de9b654eFE301D0b2.png',
  },
  {
    name: '\u03c4DOGE',
    symbol: '\u03c4DOGE',
    address: '0xe550a593d09fbc8dcd557b5c88cea6946a8b404a',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xe550a593d09fbc8dcd557b5c88cea6946a8b404a.png',
  },
  {
    name: 'UpBots',
    symbol: 'UBXT',
    address: '0xbbeb90cfb6fafa1f69aa130b7341089abeef5811',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xbbeb90cfb6fafa1f69aa130b7341089abeef5811.png',
  },
  {
    name: 'Bittrue',
    symbol: 'BTR',
    address: '0x5a16E8cE8cA316407c6E6307095dc9540a8D62B3',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x5a16E8cE8cA316407c6E6307095dc9540a8D62B3.png',
  },
  {
    name: 'Wrapped MASS',
    symbol: 'WMASS',
    address: '0x7e396bfc8a2f84748701167c2d622f041a1d7a17',
    chainId: 56,
    decimals: 8,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x7e396bfc8a2f84748701167c2d622f041a1d7a17.png',
  },
  {
    name: 'RFOX',
    symbol: 'RFOX',
    address: '0x0a3a21356793b49154fd3bbe91cbc2a16c0457f5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x0a3a21356793b49154fd3bbe91cbc2a16c0457f5.png',
  },
  {
    name: 'Hot Cross Token',
    symbol: 'HOTCROSS',
    address: '0x4FA7163E153419E0E1064e418dd7A99314Ed27b6',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x4FA7163E153419E0E1064e418dd7A99314Ed27b6.png',
  },
  {
    name: 'Refinable',
    symbol: 'FINE',
    address: '0x4e6415a5727ea08aae4580057187923aec331227',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x4e6415a5727ea08aae4580057187923aec331227.png',
  },
  {
    name: 'XEND',
    symbol: 'XEND',
    address: '0x4a080377f83D669D7bB83B3184a8A5E61B500608',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x4a080377f83D669D7bB83B3184a8A5E61B500608.png',
  },
  {
    name: 'Chromia',
    symbol: 'CHR',
    address: '0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE',
    chainId: 56,
    decimals: 6,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE.png',
  },
  {
    name: 'Cyclone',
    symbol: 'CYC',
    address: '0x810ee35443639348adbbc467b33310d2ab43c168',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x810ee35443639348adbbc467b33310d2ab43c168.png',
  },
  {
    name: 'Deri',
    symbol: 'DERI',
    address: '0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5.png',
  },
  {
    name: 'BitWell Token',
    symbol: 'WELL',
    address: '0xf07a32Eb035b786898c00bB1C64d8c6F8E7a46D5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xf07a32Eb035b786898c00bB1C64d8c6F8E7a46D5.png',
  },
  {
    name: 'Kalmar',
    symbol: 'KALM',
    address: '0x4BA0057f784858a48fe351445C672FF2a3d43515',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0x4BA0057f784858a48fe351445C672FF2a3d43515.png',
  },
  {
    name: 'pTokens OPEN',
    symbol: 'pOPEN',
    address: '0xaBaE871B7E3b67aEeC6B46AE9FE1A91660AadAC5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xaBaE871B7E3b67aEeC6B46AE9FE1A91660AadAC5.png',
  },
];

module.exports = tokens;