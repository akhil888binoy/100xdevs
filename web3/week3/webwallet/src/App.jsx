import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39";
import { EthWallet } from './EthWallet';
import { SolanaWallet } from './SolanaWallet';

function App() {
  const [count, setCount] = useState(0)
  const [mnemonic, setMnemonic] = useState("");

  async function genMnemonic(){
    const mn = await generateMnemonic();
    setMnemonic(mn);
  }

  return (
    <>
    <button onClick={genMnemonic}>create seed phrase</button>
     <input type="text" value={mnemonic} />
     <EthWallet mnemonic={mnemonic}></EthWallet>
     <SolanaWallet mnemonic={mnemonic}></SolanaWallet>
    </>
  )
}

export default App
