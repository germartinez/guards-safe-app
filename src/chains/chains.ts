import Chain from 'src/models/chain'

export const rinkebyChain: Chain = {
  id: '0x4',
  token: 'rETH',
  label: 'Rinkeby',
  rpcUrl: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  blockExplorerUrl: 'https://rinkeby.etherscan.io',
  color: '#e8673c'
}

export const gnosisChain: Chain = {
  id: '0x64',
  token: 'xDai',
  label: 'Gnosis Chain',
  rpcUrl: 'https://rpc.gnosischain.com',
  blockExplorerUrl: 'https://gnosisscan.io/',
  color: '#3e6957'
}

export const goerliChain: Chain = {
  id: '0x5',
  token: 'gETH',
  label: 'Görli',
  rpcUrl: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  blockExplorerUrl: 'https://goerli.etherscan.io',
  color: '#fbc02d'
}

const chains: Chain[] = [rinkebyChain, gnosisChain, goerliChain]

export const initialChain = gnosisChain

export default chains
