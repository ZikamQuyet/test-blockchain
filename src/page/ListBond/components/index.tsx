import { Button, Center, Flex, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "react-virtualized/styles.css";
import { useGetListBond, useGetTotalBondPage } from ".././hook/useGetListBond";
import { fetchMoreListBond } from "../../../redux/bonds";
// import BondItemDesktop from "./ListBondDesktop";

const ListBond: React.FC = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });
  const listBond = useGetListBond();
  const totalPage = useGetTotalBondPage();
  const [isSmallerThan550] = useMediaQuery(
    "(max-width: 550px ) and (min-width: 0px )"
  );
  const fetchMoreData = async (limit: number) => {
    // if (Number(totalPage) > params.page) {
    //   dispatch(
    //     fetchMoreListBond({
    //       page: params.page + 1,
    //       limit: limit,
    //     })
    //   );
    //   setParams({ ...params, page: params.page + 1 });
    // }
  };
  // const handleLinkToIssuePage = () => {
  //   history.push("/bonds/new");
  // };

  return (
    <>
      {!isSmallerThan550 ? (
        <Flex
          flexDirection="column"
          bg="gray.800"
          mt={["24px"]}
          borderRadius={"24px"}
          w="100%"
          maxWidth="1200px"
        >
          <Flex
            w="100%"
            maxWidth="1200px"
            overflowX="auto"
            className="css-scroll"
          >
            {/* <BondItemDesktop
              listBond={listBond}
              fetchMoreData={async () => fetchMoreData(params.limit)}
            /> */}
          </Flex>
          <Center w="100%" my={["24px"]}>
            <Button
              bg="teal.150"
              _active={{
                bg: "green.500",
              }}
              _hover={{
                bg: "green.500",
              }}
              color="white"
              cursor="pointer"
              borderRadius="8px"
              fontWeight={500}
              h={["36px", "40px", "48px", "48px"]}
              w={["159px", "183px", "183px", "183px"]}
              // onClick={handleLinkToIssuePage}
            >
              issue_new_bond
            </Button>
          </Center>
        </Flex>
      ) : (
        <>
          <Flex w="100%" overflow="auto">
          </Flex>
        </>
      )}
    </>
  );
};

export default ListBond;
