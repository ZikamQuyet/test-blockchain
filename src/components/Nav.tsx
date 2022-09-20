import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        gap={"20px"}
        p="30px"
        boxShadow={"2xl"}
      >
        <NavLink to={"/"}>Account Wallet</NavLink>
        <NavLink to={"/balance-wallet"}>Balance Wallet</NavLink>
        <NavLink to={"/create-bond"}>Create bond</NavLink>
        <NavLink to={"/list-bond"}>List bond</NavLink>
      </Flex>
      <Outlet />
    </>
  );
}

export default Nav;
