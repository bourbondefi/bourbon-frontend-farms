import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    isTokenOnly: true,
    risk: 5,
    lpSymbol: 'BRRL',
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
    lpSymbol: 'BRRL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xb9120b8881F577dB430966C6A8DdD0f993518295',
    },
    tokenSymbol: 'BRRL',
    tokenAddresses: {
      97: '',
      56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
   
]

export default farms
