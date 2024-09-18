import base58 from 'bs58'

export function getExplorerUrl(
    endpoint: string,
    viewTypeOrItemAddress: 'inspector' |  string,
    itemType = 'address' // | 'tx' | 'block'
  ) {
    const getClusterUrlParam = () => {
      let cluster = ''
      if (endpoint === 'localnet') {
        cluster = `custom&customUrl=${encodeURIComponent(
          'http://127.0.0.1:8899'
        )}`
      }

      return cluster ? `?cluster=${cluster}` : ''
    }
    // return eth explorer url
  }
