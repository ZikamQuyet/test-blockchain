import { Box, Button, Center, color, Text } from "@chakra-ui/react";
import React from "react";
import ButtonComponent from "../../components/ButtonComponent";

function AccountWallet() {
  return (
    <>
      <Center
        maxW={"1200px"}
        w={"100%"}
        mx="auto"
        mt={"50px"}
        color="blackAlpha.800"
        flexDirection={"column"}
        gap="50px"
      >
        <Box>
          <Button
            bg="green.300"
            _hover={{
              background: "white",
            }}
          >
            Connect Wallet
          </Button>
        </Box>
        <Box color="whiteAlpha.800">
          Balance: <Text as={"span"}>1223 </Text>
        </Box>
      </Center>
    </>
  );
}

export default AccountWallet;
