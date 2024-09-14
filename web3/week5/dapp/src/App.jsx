import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import Airdrop from './Airdrop';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Userbalance from './Userbalance';


function App() {
  return (
     <ConnectionProvider endpoint={'https://solana-devnet.g.alchemy.com/v2/Los6Y5dTZ_U8vesheqBPNACuGk9nGg_c'}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton>
                    <WalletDisconnectButton></WalletDisconnectButton>
                    <Airdrop></Airdrop>
                    <Userbalance></Userbalance>
                    </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
