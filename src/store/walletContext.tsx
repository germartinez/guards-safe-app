import { SafeAppProvider } from '@gnosis.pm/safe-apps-provider'
import SafeAppsSDK, { SafeBalances, SafeInfo } from '@gnosis.pm/safe-apps-sdk'
import { ethers } from 'ethers'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import chains, { initialChain } from 'src/chains/chains'
import Chain from 'src/models/chain'

const appsSdk = new SafeAppsSDK()

type Wallet = SafeInfo & { label: string }

type walletContextValue = {
  userAddress?: string
  userBalance?: SafeBalances
  wallet?: Wallet
  isWalletConnected: boolean
  isValidChain?: boolean
  chain: Chain
  provider?: ethers.providers.Web3Provider
}

const initialState = {
  isWalletConnected: false,
  chain: initialChain
}

const WalletContext = createContext<walletContextValue>(initialState)

export const useWallet = () => {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error('useWallet should be used within a WalletContext Provider')
  }
  return context
}

const WalletProvider = ({ children }: { children: JSX.Element }) => {
  const [wallet, setWallet] = useState<Wallet>()

  const [chain, setChain] = useState<Chain>(initialChain)
  const [isValidChain, setIsValidChain] = useState<boolean>()

  const [provider, setProvider] = useState<ethers.providers.Web3Provider>()

  const getSafeInfo = useCallback(async () => {
    const safeWallet = await appsSdk.safe.getInfo()
    setWallet({
      ...safeWallet,
      label: 'Gnosis Safe'
    })
  }, [])

  useEffect(() => {
    getSafeInfo()
  }, [getSafeInfo])

  const getChainInfo = useCallback(async () => {
    const chainInfo = await appsSdk.safe.getChainInfo()
    const chain = chains.find(({ id }) => Number(id) === Number(chainInfo.chainId))
    const isValidChain = !!chain
    setIsValidChain(isValidChain)
    setChain(isValidChain ? chain : initialChain)
  }, [])

  useEffect(() => {
    getChainInfo()
  }, [getChainInfo])

  useEffect(() => {
    if (wallet) {
      setProvider(new ethers.providers.Web3Provider(new SafeAppProvider(wallet, appsSdk)))
    }
  }, [wallet])

  const userAddress = wallet?.safeAddress
  const isWalletConnected = !!userAddress

  const state = {
    wallet,
    provider,
    chain,
    isValidChain,
    isWalletConnected,
    userAddress
  }

  return <WalletContext.Provider value={state}>{children}</WalletContext.Provider>
}

export default WalletProvider
