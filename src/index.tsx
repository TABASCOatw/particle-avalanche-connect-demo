import React from 'react'
import ReactDOM from 'react-dom/client'
import { Avalanche } from '@particle-network/chains';
import { ModalProvider } from '@particle-network/connectkit';
import '@particle-network/connectkit/dist/index.css';
import { evmWallets, solanaWallets } from '@particle-network/connectors';
import App from './App'

import('buffer').then(({ Buffer }) => {
  window.Buffer = Buffer;
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider
        options={{
            projectId: process.env.REACT_APP_PROJECT_ID as string,
            clientKey: process.env.REACT_APP_CLIENT_KEY as string,
            appId: process.env.REACT_APP_APP_ID as string,
            chains: [Avalanche],
            connectors: [
                ...evmWallets({ projectId: '21d2a01621c47fb5f34b06c6390ac0bb', showQrModal: true })
            ],
            erc4337: {
              name: "SIMPLE",
              version: "1.0.0"
            },
            wallet: {
                customStyle: {
                    supportChains: [Avalanche],
                },
            },
        }}
    >
        <App />
    </ModalProvider>
  </React.StrictMode>
)
