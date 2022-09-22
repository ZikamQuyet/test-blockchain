import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { isArray } from "lodash";
import React, { useEffect, useState } from "react";

function CreateBond() {
  enum AssetType {
    Token = 0,
    NFT = 1,
    Ether = 2,
  }
  class BondInformation {
    constructor(
      public bondName: string,
      public bondSymbol: string,
      public description: string,
      public totalSupply: string,
      public startSale: number,
      public active: number,
      public duration: number,
      public issuePrice: string
    ) {}
  }

  class AssetInformation {
    constructor(
      public underlyingAsset: string,
      public collateralAmount: string,
      public faceAsset: string,
      public faceValue: string,
      public underlyingAssetType: AssetType,
      public faceAssetType: AssetType,
      public nftIds: number[],
      public priceFeedKeyUnderlyingAsset: string,
      public priceFeedKeyFaceAsset: string
    ) {}
  }
  interface IBondInformation {
    bondName: string;
    bondSymbol: string;
    description: string;
    totalSupply: number;
    startSale: number;
    active: number;
    duration: number;
    issuePrice: number;
  }
  interface IAssetInformation {
    underlyingAsset: string;
    collateralAmount: number;
    faceAsset: string;
    faceValue: number;
    underlyingAssetType: number;
    faceAssetType: number;
    nftIds: number[];
    priceFeedKeyUnderlyingAsset: string;
    priceFeedKeyFaceAsset: string;
  }
  const [bondInformation, setBondInformation] = useState<IBondInformation>({
    bondName: "",
    bondSymbol: "",
    description: "",
    totalSupply: 0,
    startSale: 0,
    active: 0,
    duration: 0,
    issuePrice: 0,
  });
  const [assetInformation, setAssetInformation] = useState<IAssetInformation>({
    underlyingAsset: "",
    collateralAmount: 0,
    faceAsset: "",
    faceValue: 0,
    underlyingAssetType: 0,
    faceAssetType: 0,
    nftIds: [],
    priceFeedKeyUnderlyingAsset: "",
    priceFeedKeyFaceAsset: "",
  });

  const updateData = (e: any) => {
    setBondInformation({ ...bondInformation, bondName: e.target.value });
  };

  const onSubmit = () => {
    console.log("qiuety");
  };
  useEffect(() => {
    console.log(bondInformation);
  }, [bondInformation]);
  return (
    <>
      <FormControl maxW={"1200px"} w={"100%"} mx="auto" >
        <Box>
          <FormLabel>Bond name</FormLabel>
          <Input
            placeholder=" Please enter less than 30 characters"
            onChange={updateData}
          />
        </Box>
        <Box>
          <FormLabel>Bond symbol</FormLabel>
          <Input placeholder="Please enter your Bond token name less than 6 characters" />
        </Box>
        <Box>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Please enter less than 30 characters" />
        </Box>
        <Box>
          <FormLabel>Collateral amount</FormLabel>
          {/* <Select>
            <option>POSI</option>
            <option>NFT</option>
          </Select> */}
          <Input placeholder="Enter your value for colleteral with 10k POSI minimum" />
        </Box>
        <Box>
          <FormLabel>Actual Collateral Amount</FormLabel>
          <Input value={0} />
        </Box>
        <Box>
          <FormLabel>Value to borrow</FormLabel>
          <Input placeholder="Enter amount you want to borrow" />
        </Box>
        <Box>
          <FormLabel>Units</FormLabel>
          <Input placeholder="Enter your number of bond to issue by an integer" />
        </Box>
        <Box>
          <FormLabel>Issue Price</FormLabel>
          <Input placeholder="Enter the price you want to sell" />
        </Box>
        <Box>
          <FormLabel>Face value</FormLabel>
          <Input placeholder="Enter the price you will pay for each bond at maturity date" />
        </Box>
        <Box>
          <FormLabel>YTM</FormLabel>
          <Input placeholder="Enter YTM of the bond" />
        </Box>
        <Box>
          <Button type="submit" mt={50} w="100%" onClick={onSubmit}>
            submit
          </Button>
        </Box>
      </FormControl>
    </>
  );
}

export default CreateBond;
