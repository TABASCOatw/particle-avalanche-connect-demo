<div align="center">
  <a href="https://particle.network/">
    <img src="https://i.imgur.com/xmdzXU4.png" />
  </a>
  <h3>
    Particle Connect Avalanche Demo
  </h3>
</div>

⚡️ Boilerplate application for leveraging Particle Connect alongside Particle's AA SDK within Avalanche applications. This demo onboards a user either through social login with Particle Auth Core, or through (one of many) supported external wallets, then assigns a smart account and facilitates either a single or batched sample transaction (a burn of 0.0001 AVAX).

Built using **Particle Auth Core**, **Particle Connect**, **TypeScript**, **Particle AA SDK**

## 🔑 Particle Auth Core
Particle Auth Core, a component of Particle Network's Wallet-as-a-Service, enables seamless onboarding to an application-embedded MPC-TSS/AA wallet facilitated by social login, such as Google, GitHub, email, phone number, etc. - as an alternative to Particle Auth, the Auth Core SDK comes with more control over the modal itself, application-embedded popups rather than redirects, and so on.

## 🔌 Particle Connect
Particle Connect is a collection of wallet adapters and components capable of facilitating connection with Particle Auth (Web2 logins), and various third-party wallet providers (Web3 logins), resulting in a dynamic RainbowKit-like connection cmechanism.

##

![Demo screenshot](https://i.imgur.com/1YY24h7.png)

##

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/TABASCOatw/particle-bsquared-demo&env=REACT_APP_PROJECT_ID&env=REACT_APP_CLIENT_KEY&env=REACT_APP_APP_ID&envDescription=Head%20over%20to%20the%20Particle%20dashboard%20to%20retrieve%20the%20above%20keys.&envLink=https%3A%2F%2Fdashboard.particle.network">
    <img src="https://vercel.com/button" alt="Deploy with Vercel"/>
  </a>
</p>

##

👉 Try the demo: https://particle-avalanche-connect-demo.replit.app/

👉 Learn more about Particle Network: https://particle.network

## 🛠️ Quickstart

### Clone this repository
```
git clone https://github.com/TABASCOatw/particle-avalanche-connect-demo.git
```

### Install dependencies
```
yarn install
```
OR
```
npm install
```

### Set environment variables
This project requires a number of keys from Particle Network and WalletConnect to be defined in `.env`. The following should be defined:
- `REACT_APP_APP_ID`, the ID of the corresponding application in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
- `REACT_APP_PROJECT_ID`, the ID of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_CLIENT_KEY`, the client key of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).

### Start the project
```
npm run dev
```
OR
```
yarn dev
```
