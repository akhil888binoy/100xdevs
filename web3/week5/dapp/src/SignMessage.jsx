import React from 'react'
import { useConnection , useWallet } from '@solana/wallet-adapter-react'
import { ed25519 } from '@noble/curves/ed25519';
import bs58 from 'bs58';

const SignMessage = () => {
    const {publicKey , signMessage} = useWallet();
    
    async function onClick(){
        if(!publicKey) throw new  Error ('Wallet not supported');
        if(!signMessage) throw new Error('Signing not supported');

        const message = document.getElementById('message').value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);
        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert('success', `Message signature: ${bs58.encode(signature)}`);

    }
  return (
    <div>
            <input id="message" type="text" placeholder="Message" />
            <button onClick={onClick}>
                Sign Message
            </button>
        </div>
  )
}

export default SignMessage