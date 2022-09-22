import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  // supportedChainIds: [56],
  supportedChainIds: [1, 3, 4, 5, 42, 56],
});

const walletconnect = new WalletConnectConnector({
  rpc: {
    1: "https://mainnet.infura.io/v3/00ca1859789d4b40bce01f4104844224",
    56: "https://bsc-dataseed.binance.org/",
  },
});

const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/1c3acca035dd41dfbf400abac71e59a7`,
  appName: "web3-react-demo",
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink,
};
