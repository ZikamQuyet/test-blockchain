import random from "lodash/random";

// Array of available nodes to connect to
export const nodes = [
  // 'https://nodes.pancakeswap.com/',
  process.env.REACT_APP_NODE_3,
  process.env.REACT_APP_NODE_1,
  process.env.REACT_APP_NODE_2,
];

export const nodesCastNFT = [
  // process.env.REACT_APP_NETWORK_URL_CAST_NFT,
  process.env.REACT_APP_NODE_1,
  process.env.REACT_APP_NODE_2,
  process.env.REACT_APP_NODE_3,
];

// const getNodeUrl = () => {
//   if (window.nodeValid) {
//     return window.nodeValid;
//   } else {
//     const randomIndex = random(0, nodes.length - 1);
//     return nodes[randomIndex];
//   }
// };

const getNodeUrlCastNft = () => {
  const randomIndex = random(0, nodesCastNFT.length - 1);
  return nodesCastNFT[randomIndex];
};

export const getNodeUrlByChain = (listRpc = nodes) => {
  const randomIndex = random(0, listRpc.length - 1);
  return listRpc[randomIndex];
};

export { getNodeUrlCastNft };
// export default getNodeUrl;
