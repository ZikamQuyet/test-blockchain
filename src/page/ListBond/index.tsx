import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Center,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { keys } from "lodash";

function ListBonds1() {
  const [listBond, setListBond] = useState([]);
  const instance = axios.create({
    baseURL: "https://apex-qc.nonprodposi.com/bond/v1/api",
    timeout: 10000,
  });
  const getListBond: any = async () => {
    try {
      const response = await instance({
        method: "GET",
        url: "/bonds?page=1&limit=10",
        headers: {
          "X-Request-ID": uuidv4(),
        },
      });
      setListBond(response.data.data.items);
    } catch (error) {}
  };

  useEffect(() => {
    getListBond();
  }, []);

  return (
    <div>
      <TableContainer maxW={"1200px"} w={"100%"} mx="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Issue price</Th>
              <Th>Last price</Th>
              <Th>Face value</Th>
              <Th>Supply</Th>
            </Tr>
          </Thead>

          <Tbody>
            {listBond.length !== 0 &&
              listBond.map(
                (item: {
                  id: number;
                  name: string;
                  issue_price: string;
                  last_price: string;
                  face_value: string;
                  supply: string;
                }) => (
                  <Tr key={item.id} gap={"50px"}>
                    <Td>{item.name}</Td>
                    <Td>{item.issue_price}</Td>
                    <Td>{item.last_price}</Td>
                    <Td>{item.face_value}</Td>
                    <Td>{item.supply}</Td>
                  </Tr>
                )
              )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListBonds1;
