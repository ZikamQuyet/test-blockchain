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
import { useFormik, Form } from "formik";
import { isArray } from "lodash";
import React, { useEffect, useState } from "react";
import { isParameter } from "typescript";
import * as Yup from "yup";

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
  interface IBond {
    bondName: string;
    bondSymbol: string;
    description: string;
    totalSupply: number;
    startSale: number;
    active: number;
    duration: number;
    issuePrice: number;
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
  const formik = useFormik({
    initialValues: {
      bondName: "",
      bondSymbol: "",
      description: "",
      totalSupply: 0,
      startSale: 0,
      active: 0,
      duration: 0,
      issuePrice: 0,
      underlyingAsset: "",
      collateralAmount: 0,
      faceAsset: "",
      faceValue: 0,
      underlyingAssetType: 0,
      faceAssetType: 0,
      nftIds: [],
      priceFeedKeyUnderlyingAsset: "",
      priceFeedKeyFaceAsset: "",
    },
    validationSchema: Yup.object({
      bondName: Yup.string().max(20, "k dc qua 20 ky tu").required("Required"),
      bondSymbol: Yup.string().max(6, "k dc qua 6 ky tu").required("Required"),
      totalSupply: Yup.string().required("Required"),
      startSale: Yup.string().required("Required"),
      active: Yup.string().required("Required"),
      duration: Yup.string().required("Required"),
      issuePrice: Yup.string().required("Required"),
      underlyingAsset: Yup.string().required("Required"),
      collateralAmount: Yup.string().required("Required"),
      faceAsset: Yup.string().required("Required"),
      faceValue: Yup.string().required("Required"),
      underlyingAssetType: Yup.string().required("Required"),
      faceAssetType: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form>
        <Box>
          <FormLabel>Bond name</FormLabel>
          <Input
            placeholder=" Please enter less than 30 characters"
            {...formik.getFieldProps("bondName")}
          />
          {formik.touched.bondName && formik.errors ? (
            <Box>{formik.errors.bondName}</Box>
          ) : null}
        </Box>
        {/* <Box>
          <FormLabel>Bond symbol</FormLabel>
          <Input
            placeholder="Please enter your Bond token name less than 6 characters"
            name="bondSymbol"
            onChange={(e) =>
              setBondInformation({
                ...bondInformation,
                bondSymbol: e.target.value.trim(),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Please enter less than 30 characters"
            name="description"
            onChange={(e) =>
              setBondInformation({
                ...bondInformation,
                description: e.target.value.trim(),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Total Supply</FormLabel>
          <Input
            value={0}
            name="totalSupply"
            onChange={(e) =>
              setBondInformation({
                ...bondInformation,
                totalSupply: Number(e.target.value.trim()),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Start Sale</FormLabel>
          <Input
            value={0}
            name="startSale"
            onChange={(e) =>
              setBondInformation({
                ...bondInformation,
                startSale: Number(e.target.value.trim()),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Active</FormLabel>
          <Input
            value={0}
            name="active"
            onChange={(e) =>
              setBondInformation({
                ...bondInformation,
                active: Number(e.target.value.trim()),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Duration</FormLabel>
          <Input
            value={0}
            name="duration"
            onChange={(e) =>
              setBondInformation({
                ...bondInformation,
                duration: Number(e.target.value.trim()),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Issue Price</FormLabel>
          <Input
            value={0}
            name="issuePrice"
            onChange={(e) =>
              setBondInformation({
                ...bondInformation,
                issuePrice: Number(e.target.value.trim()),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Underlying Asset</FormLabel>
          <Input
            placeholder="Enter your Underlying Asset"
            name="underlyingAsset"
            onChange={(e) =>
              setAssetInformation({
                ...assetInformation,
                underlyingAsset: e.target.value.trim(),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Collateral Amount</FormLabel>
          <Input
            value={0}
            name="collateralAmount"
            onChange={(e) =>
              setAssetInformation({
                ...assetInformation,
                collateralAmount: +e.target.value.trim(),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Face Asset</FormLabel>
          <Input
            value={0}
            name="faceAsset"
            onChange={(e) =>
              setAssetInformation({
                ...assetInformation,
                faceAsset: e.target.value.trim(),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Face value</FormLabel>
          <Input
            placeholder="Enter the price you will pay for each bond at maturity date"
            name="faceValue"
            onChange={(e) =>
              setAssetInformation({
                ...assetInformation,
                faceValue: +e.target.value.trim(),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Underlying Asset Type</FormLabel>
          <Input
            value={0}
            name="underlyingAssetType"
            onChange={(e) =>
              setAssetInformation({
                ...assetInformation,
                underlyingAssetType: +e.target.value.trim(),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Face Asset Type</FormLabel>
          <Input
            value={0}
            name="faceAssetType"
            onChange={(e) =>
              setAssetInformation({
                ...assetInformation,
                faceAssetType: +e.target.value.trim(),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Price Feed Key Underlying Asset</FormLabel>
          <Input
            placeholder="enter the ...."
            name="priceFeedKeyUnderlyingAsset"
            onChange={(e) =>
              setAssetInformation({
                ...assetInformation,
                priceFeedKeyUnderlyingAsset: e.target.value.trim(),
              })
            }
          />
        </Box>
        <Box>
          <FormLabel>Price Feed Key FaceAsset</FormLabel>
          <Input
            placeholder="enter the ...."
            name="priceFeedKeyFaceAsset"
            onChange={(e) =>
              setAssetInformation({
                ...assetInformation,
                priceFeedKeyFaceAsset: e.target.value.trim(),
              })
            }
          />
        </Box> */}
        <Box>
          <Button type="submit" mt={50} w="100%">
            submit
          </Button>
        </Box>
      </form>
    </>
  );
}

export default CreateBond;
