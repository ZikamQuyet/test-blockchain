import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";
import { truncateAddress } from "./utils";
import SelectWalletModal from "./components/Modal";
import { formatEther } from "@ethersproject/units";

function AccountWallet() {
  const [ethBalance, setEthBalance] = React.useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React();

  const disconnect = () => {
    deactivate();
  };
  useEffect(() => {
    console.log("running");
    console.log("account: ", useWeb3React);
    if (library && account) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setEthBalance(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setEthBalance(null);
          }
        });

      return () => {
        stale = true;
        setEthBalance(undefined);
      };
    }
  }, [library, account, chainId]);
  // useEffect(() => {
  //   const provider = window.localStorage.getItem("provider");
  //   if (provider) activate(connectors[provider]);
  // }, []);

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
        <HStack>
          {!active ? (
            <Button onClick={onOpen}>Connect Wallet</Button>
          ) : (
            <Button onClick={disconnect}>Disconnect</Button>
          )}
        </HStack>
        <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
        <Box color="whiteAlpha.800">
          <Tooltip label={account} placement="right">
            <Text>{`Account: ${truncateAddress(account)}`}</Text>
          </Tooltip>
        </Box>
        <Box color="whiteAlpha.800">
          Balance:{" "}
          <Text as={"span"}>
            {ethBalance === undefined
              ? "..."
              : ethBalance === null
              ? "Error"
              : `${parseFloat(formatEther(ethBalance)).toPrecision(4)}`}{" "}
          </Text>
        </Box>
      </Center>
    </>
  );
}

export default AccountWallet;
