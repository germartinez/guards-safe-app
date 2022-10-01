import WalletProvider from './walletContext'

const StoreProvider = ({ children }: { children: JSX.Element }) => {
  return <WalletProvider>{children}</WalletProvider>
}

export { useWallet } from './walletContext'

export default StoreProvider
