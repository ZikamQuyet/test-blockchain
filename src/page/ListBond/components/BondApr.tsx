import { Flex, Skeleton } from "@chakra-ui/react";
import React from "react";
import { IBondDetail } from "../../../configs/constants/type";
import { formatNumberWithNumeral } from "../../../utils/common";

const BondApr: React.FC<{ detail: IBondDetail }> = ({ detail }) => {
  // const apy =
  //   totalStake &&
  //   posiPerBlock &&
  //   getPoolApy(stakingTokenPrice, Number(rewardTokenPrice), totalStake, parseFloat(posiPerBlock));
  const apr = detail?.est_apr;

  return (
    <Flex
      justify="center"
      width="100%"
      px={"0px"}
      fontWeight="500"
      py={["4px", "8px", "12px", "18px", "24px"]}
      color="teal.150"
    >
      {Number(apr) > 0 ? (
        `${formatNumberWithNumeral(apr, 2)}%`
      ) : (
        <Skeleton height={"20px"} width="100px" />
      )}
    </Flex>
  );
};

export default BondApr;
