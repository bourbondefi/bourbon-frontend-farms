import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
   {
     sousId: 23,
     tokenName: 'BUSD',
     stakingTokenName: QuoteToken.BRRL,
     stakingTokenAddress: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
     contractAddress: {
       97: '',
       56: '0x07A007303261d381150A88B91c30e5eE1340BAc1',
     },
     poolCategory: PoolCategory.CORE,
     projectLink: 'https://www.bourbondefi.com/',
     harvest: true,
     tokenPerBlock: '0.001',
     sortOrder: 1,
     isFinished: true,
     tokenDecimals: 18,
   },
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
