import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import cakeABI from '../../configs/abi/cake.json';
import contracts from '../../configs/constants/contracts';
import { getAddress } from '../../utils/addressHelpers';
import { getBalanceNumber } from '../../utils/formatBalance';
import multicall from '../../utils/multicall';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BONDS_URL}/v1/api`,
  timeout: 10000,
});

export const getListBond = (queryString: string) => {
  return instance({
    method: 'GET',
    url: `/bonds?${queryString}`,
    headers: {
      'X-Request-ID': uuidv4(),
    },
  }).then((response) => response.data.data);
};

export const getDataBondStaking = async (rewardTokenContractAddress:any) => {
  try {
    const callsNonBnbPool = [
      {
        address: rewardTokenContractAddress,
        name: 'balanceOf',
        params: [getAddress(contracts.bondStakingContractAddress)],
      },
    ];
    const totalStaking = await multicall(cakeABI, callsNonBnbPool);
    const formatTotalStaking = getBalanceNumber(totalStaking, 18);
    return formatTotalStaking;
  } catch (error) {}
};
