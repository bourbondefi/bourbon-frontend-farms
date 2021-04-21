import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const aurumFarms: FarmConfig[] = [
  {
    pid: 23,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'TSB',
    lpAddresses: {
      97: '',
      56: '0xe336b16B7d26B94F3E86Fe124Be5207162C22d90',
    },
    tokenSymbol: 'TSB',
    tokenAddresses: {
      97: '',
      56: '0xA37F71f092F891757d23Dd350f57C78E8469c026',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 22,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'RBT',
    lpAddresses: {
      97: '',
      56: '0x6392aC63A851497Fc1F86946923a365162518E30',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34bf391c3de0a6878a36d06223b2bfd404',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    risk: 3,
    lpSymbol: 'TSB-BNB',
    lpAddresses: {
      97: '',
      56: '0x14f18e33c9e4551578cc4ce5243184288f13fe67', // TSB-BNB LP
    },
    tokenSymbol: 'TSB',
    tokenAddresses: {
      97: '',
      56: '0xA37F71f092F891757d23Dd350f57C78E8469c026',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'RBT-BRRL LP',
    lpAddresses: {
      97: '',
      56: '0x77a6024Ce12C94A326Ba87eA66E7f2dfDFC8bc1e',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34Bf391C3de0a6878A36D06223b2BFd404',
    },
    quoteTokenSymbol: QuoteToken.BRRL,
    quoteTokenAdresses: contracts.brrl,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BRRL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b30e60130b364DDfC0267525d7D8039d795FB33',
    },
    tokenSymbol: 'BRRL',
    tokenAddresses: {
      97: '',
      56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'RBT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3F8F14Dd4Ef2a2DBD3C1B87f96EdD028663c76b1',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34bf391c3de0a6878a36d06223b2bfd404',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'RBT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6392aC63A851497Fc1F86946923a365162518E30',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34bf391c3de0a6878a36d06223b2bfd404',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x6392aC63A851497Fc1F86946923a365162518E30', // RBT-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'SWAMP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa823C74dE2343E922ab24520f29D08390B4e894D', // SWAMP-BNB LP
    },
    tokenSymbol: 'SWAMP',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 3,
    lpSymbol: 'RBT-INJ LP',
    lpAddresses: {
      97: '',
      56: '0x3b87B536927d2E56430A2F1481cFfD5011B98C70', // RBT-INJ LP
    },
    tokenSymbol: 'INJ',
    tokenAddresses: {
      97: '',
      56: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
    },
    quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 10,
    risk: 3,
    lpSymbol: 'RBT-DOT LP',
    lpAddresses: {
      97: '',
      56: '0x225E127B3079a32147F51dcCA8a9b22f6A796448', // RBT-DOT LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 11,
    risk: 3,
    lpSymbol: 'RBT-LINK LP',
    lpAddresses: {
      97: '',
      56: '0x6a7f570946c25cbcc8d0fcd1f0c8db1ff6ff66bf', // RBT-LINK LP
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 12,
    risk: 3,
    lpSymbol: 'RBT-SQUIRE LP',
   lpAddresses: {
      97: '',
      56: '0xf61525267C93265d8573fB5a57B9f2CfEa817214', // RBT-SQUIRE LP
    },
    tokenSymbol: 'SQUIRE',
    tokenAddresses: {
      97: '',
      56: '0x2f0d21f1b84f03fb9d60004fc206c86be6902a32',
    },
    quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 13,
    risk: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
     97: '',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422', // ETH-BNB LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
     97: '',
     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
   },
   quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    risk: 3,
    lpSymbol: 'RBT-ADA LP',
    lpAddresses: {
     97: '',
      56: '0x2331beb6dc11de0d745a8cf6c53afc35167a8bf1', // RBT-ADA LP
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
     97: '',
     56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
   },
   quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 15,
    risk: 3,
    lpSymbol: 'RBT-CAKE LP',
    lpAddresses: {
     97: '',
      56: '0x5ac20128b14debed0abacf46a7e78b90bc99b0d8', // RBT-CAKE LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
     97: '',
     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
   },
   quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 16,
    risk: 3,
    lpSymbol: 'RBT-EGLD LP',
    lpAddresses: {
     97: '',
      56: '0x08a0960405dbb44b38d1b8f34fb802ec601af63b', // RBT-EGLD LP
    },
    tokenSymbol: 'EGLD',
    tokenAddresses: {
     97: '',
     56: '0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe',
   },
   quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 17,
    risk: 3,
    lpSymbol: 'RBT-FIL LP',
    lpAddresses: {
     97: '',
      56: '0xe508545ecdffa06f2fc38befe0a941effa44c20b', // RBT-FIL LP
    },
    tokenSymbol: 'FIL',
    tokenAddresses: {
     97: '',
     56: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
   },
   quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 18,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'CARDANO',
    lpAddresses: {
     97: '',
      56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf', // ADA-BNB
    },
    tokenSymbol: 'CARDANO',
    tokenAddresses: {
     97: '',
     56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
   },
   quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 19,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'XRP',
    lpAddresses: {
     97: '',
      56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2', // XRP-BNB
    },
    tokenSymbol: 'XRP',
    tokenAddresses: {
     97: '',
     56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
   },
   quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 20,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
     97: '',
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c', // DOT-BNB
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
     97: '',
     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
   },
   quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]
export default aurumFarms
