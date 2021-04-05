import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.bourbondefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.bourbondefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Rare Farms',
    icon: 'FarmIcon',
    href: 'https://farms.bourbondefi.com/farms',
  },
  {
    label: 'Distillery',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Rare Distillery',
    icon: 'PoolIcon',
    href: 'https://farms.bourbondefi.com/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x1b30e60130b364DDfC0267525d7D8039d795FB33',
      },
    //  {
    //    label: 'CoinGecko',
    //    href: '',
    //  },
    //  {
    //    label: 'CoinMarketCap',
    //    href: '',
    //  },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x1b30e60130b364DDfC0267525d7D8039d795FB33',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/bourbondefi/',
      },
     // {
     //   label: 'Docs',
     //   href: '',
     // },
     // {
     //   label: 'Blog',
     //   href: '',
     // },
    ],
  },
 // {
  //  label: 'Partnerships/IFO',
//    icon: '',
 //   href: '',
//  },
 // {
 //   label: 'Audit by Hacken',
 //   icon: 'AuditIcon',
 //   href: '',
 // },
 // {
 //   label: 'Audit by CertiK',
 //   icon: 'AuditIcon',
  //  href: '',
//  },
]

export default config
