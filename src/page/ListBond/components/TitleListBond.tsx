import {  Flex, Td, Tr, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const TitleListBond: React.FC = () => {
  const [isLargerThan360AndSmallerThan480] = useMediaQuery(
    "(max-width:480px) and (min-width: 360px )"
  );
  return (
    <Tr>
      <Td
        color="gray.500"
        fontSize={["12px", "14px", "14px", "14px", "14px"]}
        fontWeight="medium"
        pr="0px"
        pl={"24px"}
        py={["4px", "8px", "12px", "18px", "24px"]}
        borderBottomColor="gray.700"
        w={["30%", "18%", "18%", "13%"]}
      >
        <Flex color="gray.500" justify="flex-start">
          Asset /
        </Flex>
      </Td>
      <Td
        color="gray.500"
        fontSize={["12px", "14px", "14px", "14px", "14px"]}
        fontWeight="medium"
        px="0px"
        py={["4px", "8px", "12px", "18px", "24px"]}
        borderBottomColor="gray.700"
        w={["33%", "36%", "25%", "14%"]}
      >
        <Flex color="gray.500" justify="center">
          Fixed Stake APR
        </Flex>
      </Td>
      <Td
        color="gray.500"
        fontSize={["12px", "14px", "14px", "14px", "14px"]}
        fontWeight="medium"
        px="0px"
        py={["4px", "8px", "12px", "18px", "24px"]}
        borderBottomColor="gray.700"
        w={["", "5%", "", "5%"]}
        display={["none", "none", "none", "table-cell"]}
      >
        <Flex color="gray.500" justify="center">
          YTM
        </Flex>
      </Td>
      <Td
        color="gray.500"
        fontSize={["12px", "14px", "14px", "14px", "14px"]}
        fontWeight="medium"
        px="0px"
        py={["4px", "8px", "12px", "18px", "24px"]}
        borderBottomColor="gray.700"
        w={["", "12%", "", "12%"]}
        display={["none", "none", "none", "table-cell"]}
      >
        <Flex color="gray.500" justify="center">
          Maturity Date
        </Flex>
      </Td>
      <Td
        color="gray.500"
        fontSize={["12px", "14px", "14px", "14px", "14px"]}
        fontWeight="medium"
        px="0px"
        py={["4px", "8px", "12px", "18px", "24px"]}
        borderBottomColor="gray.700"
        w={["", "20%", "20%", "11%"]}
        display={!isLargerThan360AndSmallerThan480 ? "table-cell" : "none"}
      >
        <Flex color="gray.500" justify="center">
          Last price
        </Flex>
      </Td>
      <Td
        color="gray.500"
        fontSize={["12px", "14px", "14px", "14px", "14px"]}
        fontWeight="medium"
        px="0px"
        py={["4px", "8px", "12px", "18px", "24px"]}
        borderBottomColor="gray.700"
        w={["", "11%", "", "11%"]}
        display={["none", "none", "none", "table-cell"]}
      >
        <Flex color="gray.500" justify="center">
          Face Value
        </Flex>
      </Td>
      <Td
        color="gray.500"
        fontSize={["12px", "14px", "14px", "14px", "14px"]}
        fontWeight="medium"
        px="0px"
        py={["4px", "8px", "12px", "18px", "24px"]}
        borderBottomColor="gray.700"
        w={["", "14%", "", "14%"]}
        display={["none", "none", "none", "table-cell"]}
      >
        <Flex color="gray.500" justify="center">
          Supply
        </Flex>
      </Td>
      <Td
        color="gray.500"
        fontSize={["12px", "14px", "14px", "14px", "14px"]}
        fontWeight="medium"
        px="0px"
        py={["4px", "8px", "12px", "18px", "24px"]}
        borderBottomColor="gray.700"
        w={["", "26%", "26%", "12%"]}
      >
        <Flex color="gray.500" justify="center">
          Status
        </Flex>
      </Td>
      <Td
        color="gray.500"
        fontSize={["12px", "14px", "14px", "14px", "14px"]}
        fontWeight="medium"
        pl="0px"
        pr={"24px"}
        py={["4px", "8px", "12px", "18px", "24px"]}
        borderBottomColor="gray.700"
        w={["", "8%", "", "8%"]}
        display={["none", "none", "none", "table-cell"]}
      >
        <Flex color="gray.500" justify="flex-end">
          Action
        </Flex>
      </Td>
    </Tr>
  );
};

export default TitleListBond;
