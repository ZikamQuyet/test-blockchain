import { Flex, Skeleton, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { IBondDetail } from '../../../configs/constants/type';
import { calculateYtm, formatNumberWithNumeral } from '../../../utils/common';

const BondYtm: React.FC<{ detail: IBondDetail }> = ({ detail }) => {
  // const apy =
  //   totalStake &&
  //   posiPerBlock &&
  //   getPoolApy(stakingTokenPrice, Number(rewardTokenPrice), totalStake, parseFloat(posiPerBlock));
  const apr = Number(detail?.est_apr || 0);

  const ytm =
    apr &&
    calculateYtm(
      apr,
      Number(detail?.face_value),
      Number(detail?.last_price),
      Number(detail.maturity_date),
      detail?.active_date,
    );
  const [isSmallerThan768] = useMediaQuery('(max-width:768px) and (min-width: 360px )');
  return (
    <Flex
      justify="center"
      px={'0px'}
      width="100%"
      fontWeight="500"
      py={['4px', '8px', '12px', '18px', '24px']}
      color="teal.150"
      display={isSmallerThan768 ? 'none' : 'flex'}
    >
      {ytm ? (
        `${ytm > 0 ? '+' : ''}${formatNumberWithNumeral(ytm || 0, 2)}%`
      ) : (
        <Skeleton height={'20px'} width="90px" />
      )}
    </Flex>
  );
};

export default BondYtm;
