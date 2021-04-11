import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Bourbon Stats',
    icon: 'HomeIcon',
    href: 'https://www.bourbondefi.com/'
  },
  {
    label: 'Rare Bourbon Stats',
    icon: 'HomeIcon',
    href: 'https://farms.bourbondefi.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.bourbondefi.com/#/swap'
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.bourbondefi.com/#/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.bourbondefi.com/farms'
  },
  {
    label: 'Rare Farms',
    icon: 'FarmIcon',
    href: 'https://farms.bourbondefi.com/farms'
  },
  {
    label: 'Distillery',
    icon: 'PoolIcon',
    href: 'https://www.bourbondefi.com/nests'
  },
  {
    label: 'Rare Distillery',
    icon: 'PoolIcon',
    href: 'https://farms.bourbondefi.com/nests'
  },
   {
     label: 'Bourbon Derby',
     icon: 'TicketIcon',
     href: 'https://www.bourbondefi.com/lottery'
   },
  {
    label: 'Bourbon Barrel Token',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dex Guru',
        href: 'https://dex.guru/token/0xcbe73dd7e8fc74011136b837a59205801c45e6a1-bsc',
      },
      {
        label: 'Contract',
        href: 'https://bscscan.com/token/0xcbe73dd7E8FC74011136b837a59205801c45e6A1#readContract',
      },
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
    label: 'Rare Bourbon Token',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dex Guru',
        href: 'https://dex.guru/token/0x7595bb34bf391c3de0a6878a36d06223b2bfd404-bsc',
      },
     {
        label: 'Contract',
        href: 'https://bscscan.com/token/0x7595bb34Bf391C3de0a6878A36D06223b2BFd404#readContract',
      },
    //  {
    //    label: 'CoinMarketCap',
    //    href: '',
    //  },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x3F8F14Dd4Ef2a2DBD3C1B87f96EdD028663c76b1',
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
      {
        label: 'Docs',
        href: 'https://bourbondefi.medium.com/',
      },
      {
        label: 'Roadmap',
        href: 'https://app.gitbook.com/@bourbondefi/s/bourbon-finance/',
      },
    ],
  },
 // {
  //  label: 'Partnerships/IFO',
 //   icon: '',
 //   href: '',
//  },
  {
    label: 'Audit by Techrate',
    icon: 'AuditIcon',
    href: 'https://www.bourbondefi.com/files/TechrateAudit.pdf',
  },
 // {
 //   label: 'Audit by CertiK',
 //   icon: 'AuditIcon',
 //   href: '',
 // },
]

export default config
