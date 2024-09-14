import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React from 'react'

const Airdrop = () => {
    const wallet = useWallet();
    const {connection} = useConnection();
    async function sendAirdroptoUser(){
       await  connection.requestAirdrop(wallet.publicKey, 1000000000);
    }
    
  return (
    <div>
        <input type="text"  placeholder='Amount'/>
        <button onClick={sendAirdroptoUser}>send Air drop</button>
    </div>
  )
}

export default Airdrop