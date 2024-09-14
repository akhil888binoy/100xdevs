import React from 'react'
import { useConnection , useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';


const Userbalance = () => {
    const {connection} = useConnection();
    const wallet = useWallet();

    async function getBalance (){
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById('balance').innerHTML = balance / LAMPORTS_PER_SOL;
     }
    getBalance()
  return (
    <div>Userbalance
        <div id='balance'></div>
    </div>
  )
}

export default Userbalance