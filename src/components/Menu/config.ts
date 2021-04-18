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
    label: 'Top Shelf Stats',
    icon: 'HomeIcon',
    href: 'https://topshelf.bourbondefi.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: false,
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
    items: [
      {
        label: 'Bourbon Barrel Farms',
        href: 'https://www.bourbondefi.com/farms'
      },
      {
        label: 'Rare Bourbon Farms',
        href: 'https://farms.bourbondefi.com/farms'
      },
      {
        label: 'Top Shelf Bourbon Farms',
        href: 'https://topshelf.bourbondefi.com/farms'
      },
    ]
  },
  {
    label: 'Distillery',
    icon: 'PoolIcon',
    items: [
      {
        label: 'Bourbon Barrel Distillery',
        href: 'https://www.bourbondefi.com/nests'
      },
      {
        label: 'Rare Bourbon Distillery',
        href: 'https://farms.bourbondefi.com/nests'
      },
      {
        label: 'Top Shelf Distillery',
        href: 'https://topshelf.bourbondefi.com/nests'
      },
    ]
  },
   {
     label: 'Bourbon Derby',
     icon: 'TicketIcon',
     href: 'https://www.bourbondefi.com/lottery'
   },
   {
    label: 'The Bar',
    icon: 'IfoIcon',
    href: 'https://www.bourbondefi.com/pools',
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
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x3F8F14Dd4Ef2a2DBD3C1B87f96EdD028663c76b1',
      },
    ],
  },
  {
    label: 'Top Shelf Bourbon Token',
    icon: 'InfoIcon',
    items: [
     {
        label: 'Contract',
        href: 'https://bscscan.com/address/0xa37f71f092f891757d23dd350f57c78e8469c026#code',
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
  {
    label: 'Audit by Techrate',
    icon: 'AuditIcon',
    href: 'https://www.bourbondefi.com/files/TechrateAudit.pdf',
  },
]

export default config
