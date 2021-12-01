import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'HeroeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn HERO through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by HeroeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('HeroeSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('HeroeSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('HeroeSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('HeroeSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('HeroeSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('HeroeSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('HeroeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('HeroeSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('HeroeSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('HeroeSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('HeroeSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('HeroeSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('HeroeSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('HeroeSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('HeroeSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('HeroeSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('HeroeSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('HeroeSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('HeroeSwap Info & Analytics')}`,
        description: 'View statistics for HeroeSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('HeroeSwap Info & Analytics')}`,
        description: 'View statistics for HeroeSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('HeroeSwap Info & Analytics')}`,
        description: 'View statistics for HeroeSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('HeroeSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('HeroeSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('HeroeSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('heroes Squad')} | ${t('HeroeSwap')}`,
      }
    default:
      return null
  }
}
