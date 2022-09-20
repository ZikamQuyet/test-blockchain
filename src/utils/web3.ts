import Web3 from 'web3';
import { HttpProviderOptions } from 'web3-core-helpers';
// import getRpcUrl, { getNodeUrlCastNft } from './getRpcUrl';


let web3NoAccount:any = null;
export const getWeb3NoAccount = () => {
    if (!!web3NoAccount) {
      return web3NoAccount;
    } else {
      // const RPC_URL = getRpcUrl() as string;
      // const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 } as HttpProviderOptions);
      // web3NoAccount = new Web3(httpProvider);
      return web3NoAccount;
    }
  };