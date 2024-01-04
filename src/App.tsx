import React, { useState, useEffect } from 'react';
import { ConnectButton, useAccountInfo, useParticleConnect } from '@particle-network/connectkit';
import { isEVMProvider } from '@particle-network/connectors';
import { Avalanche } from '@particle-network/chains';
import { AAWrapProvider, SendTransactionMode, SmartAccount } from '@particle-network/aa';
import { ethers } from 'ethers';
import { notification } from 'antd';

import './App.css';

const App = () => {
  const { account, particleProvider } = useAccountInfo();
  const { disconnect } = useParticleConnect();
  const [address, setAddress] = useState();

  const smartAccount = new SmartAccount(particleProvider, {
    projectId: process.env.REACT_APP_PROJECT_ID,
    clientKey: process.env.REACT_APP_CLIENT_KEY,
    appId: process.env.REACT_APP_APP_ID,
    aaOptions: {
      simple: [{ chainId: Avalanche.id, version: '1.0.0' }]
    }
  });

  const customProvider = new ethers.providers.Web3Provider(new AAWrapProvider(smartAccount, SendTransactionMode.Gasless), "any");
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (account) {
      fetchBalance();
    }
  }, [account, smartAccount, customProvider]);

  const fetchBalance = async () => {
    const address = await smartAccount.getAddress();
    setAddress(address);
    const balanceResponse = await customProvider.getBalance(address);
    setBalance(ethers.utils.formatEther(balanceResponse));
  };

  const executeUserOp = async () => {
    const signer = customProvider.getSigner();
    const tx = {
      to: "0x000000000000000000000000000000000000dEaD",
      value: ethers.utils.parseEther("0.0001"),
    };
    const txResponse = await signer.sendTransaction(tx);
    const txReceipt = await txResponse.wait();
    notification.success({
      message: 'Transaction Successful',
      description: (
        <div>
          Transaction Hash: <a href={`https://snowtrace.io/tx/${txReceipt.transactionHash}`} target="_blank" rel="noopener noreferrer">{txReceipt.transactionHash}</a>
        </div>
      )
    });
  };

  const executeBatchUserOp = async () => {
    const tx = { tx: [{
      to: "0x000000000000000000000000000000000000dEaD",
      value: ethers.utils.parseEther("0.0001"),
    },
    {
      to: "0x000000000000000000000000000000000000dEaD",
      value: ethers.utils.parseEther("0.0001"),
    }]};
    const txResponse = await smartAccount.sendTransaction(tx);
    notification.success({
      message: 'Transaction Successful',
      description: (
        <div>
          Transaction Hash: <a href={`https://snowtrace.io/tx/${txResponse}`} target="_blank" rel="noopener noreferrer">{txResponse}</a>
        </div>
      )
    });
  };

return (
  <div className="App-container">
    <div className="App">
      <div className="logo-section">
        <img src="https://i.imgur.com/EerK7MS.png" alt="Logo 1" className="logo logo-big" />
        <img src="https://i.imgur.com/eBJAx0s.png" alt="Logo 2" className="logo logo-big" />
      </div>
      {!account ? (
        <div className="connect-button">
          <ConnectButton />
        </div>
      ) : (
        <div className="profile-card">
          <h6>{address}</h6>
          <div className="balance-section">
            <small>{balance} AVAX</small>
            <button className="sign-message-button" onClick={executeUserOp}>Execute User Operation</button>
            <button className="sign-message-button" onClick={executeBatchUserOp}>Execute Batch User Operation</button>
            <button className="disconnect-button" onClick={disconnect}>Disconnect</button>
          </div>
        </div>
      )}
    </div>
    <button className="switch-demo-button" onClick={() => window.location.href = 'https://particle-avalanche-auth-demo.replit.app/'}>
      Switch to Auth Core Demo
    </button>
  </div>
 );
};
export default App;
