import addresses from "../configs/constants/contracts";

export const getAddress = (address: any): string => {
  const mainNetChainId = 56;
  const chainId = process.env.REACT_APP_CHAIN_ID;
  return address[chainId === "56" ? mainNetChainId : 97];
};

export const getMulticallAddress = () => {
  return getAddress(addresses.mulltiCall);
};
