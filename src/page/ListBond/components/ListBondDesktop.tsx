// import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
// import moment from "moment";
// import React, { useEffect, useMemo, useState } from "react";
// import { useTranslation } from "react-i18next";
// import Lottie from "react-lottie";
// import { useHistory } from "react-router-dom";
// import { useWindowSize } from "react-use";
// import { AutoSizer, Column, InfiniteLoader, Table } from "react-virtualized";
// import NoRecord from "../../../components/NoRecord/NoRecord";
// import Loader from "../../../constants/loader.json";
// import {
//   useGetTotalBondPage,
//   useIsLoadingBond,
// } from "../../../hooks/useBondState";
// import {
//   formatNumberWithNumeral,
//   formatTime,
//   getBondLastPrice,
//   getNextBondStatus,
//   getRangeTimeOfStatus,
//   getStatusFromTimeOfBond,
// } from "../../utils/common";
// import TooltipCustom from "../Components/Tooltip";
// import BondActionColumn from "./BondAction";
// import BondApr from "./BondApr";
// import BondStatusColumn from "./BondStatus";
// import BondYtm from "./BondYtm";
// export interface BondDetailItem {
//   listBond: any;
//   fetchMoreData: () => any;
//   detail?: any;
// }

// const BondItemDesktop: React.FC<BondDetailItem> = ({
//   listBond,
//   fetchMoreData,
// }) => {
//   const { t } = useTranslation(["bonds"]);
//   const isLoading = useIsLoadingBond();

//   // const currencyPurchase = detail?.face_asset?.symbol || 'BUSD';
//   const [isLargerThan360AndSmallerThan480] = useMediaQuery(
//     "(max-width:480px) and (min-width: 360px )"
//   );
//   const [isSmallerThan768] = useMediaQuery(
//     "(max-width:768px) and (min-width: 360px )"
//   );
//   const [isLargerThan480AndSmallerThan768] = useMediaQuery(
//     "(max-width:768px) and (min-width: 480px )"
//   );
//   const totalPage = useGetTotalBondPage();

//   const history = useHistory();
//   // const timeRange = getRangeTimeOfStatus(status, detail);
//   const handleLinkToBondDetail = (detail: any) => {
//     if (!detail?.id) {
//       return (window.location.href = `/bonds`);
//     }
//     return history.push(`bonds/${detail?.id}`);
//   };
//   const windowSize = useWindowSize();
//   const widthOfCurrency: any =
//     document && document.getElementById("bond_currency")?.offsetWidth;
//   const isBreakLine = widthOfCurrency > 65;
//   const [widthOfVirtual, setWidthOfVirtual] = useState(0);
//   useEffect(() => {
//     if (document) {
//       const docsTable = document.getElementById("scrollableDiv");
//       if (docsTable) {
//         const widthTable = Number(docsTable.clientWidth);
//         if (widthOfVirtual !== widthTable) {
//           setWidthOfVirtual(widthTable);
//         }
//       }
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.addEventListener("resize", () => {
//         if (document) {
//           const docsTable = document.getElementById("scrollableDiv");
//           if (docsTable) {
//             const widthTable = Number(docsTable.clientWidth);
//             if (widthOfVirtual !== widthTable) {
//               setWidthOfVirtual(widthTable);
//             }
//           }
//         }
//       });
//     }
//   }, []);

//   const infiniteList = useMemo(() => {
//     return listBond && listBond.length > 0 ? (
//       <InfiniteLoader
//         isRowLoaded={({ index }) => !!listBond[index]}
//         loadMoreRows={fetchMoreData}
//         rowCount={1000000}
//       >
//         {({ onRowsRendered, registerChild }) => (
//           <AutoSizer>
//             {({ width }) => (
//               <Table
//                 ref={registerChild}
//                 onRowsRendered={onRowsRendered}
//                 headerHeight={60}
//                 width={width}
//                 height={350}
//                 borderTop={1}
//                 rowHeight={96}
//                 rowCount={listBond.length}
//                 rowGetter={({ index }) => listBond[index]}
//                 style={{
//                   display: "flex !important",
//                   paddingRight: "0px",
//                 }}
//                 onRowClick={(rowData) =>
//                   isSmallerThan768 && handleLinkToBondDetail(rowData.rowData)
//                 }
//                 // rowClassName={'styleTable'}
//               >
//                 <Column
//                   cellRenderer={({ rowData }) => {
//                     const currencyPurchase =
//                       rowData?.face_asset?.symbol || "BUSD";
//                     return (
//                       <Flex
//                         color="white"
//                         textAlign="left"
//                         width="100%"
//                         fontWeight="500"
//                         px={"0px"}
//                         py={["4px", "8px", "12px", "18px", "24px"]}
//                         ml={["14px", "8px", "14px"]}
//                         fontSize={["13px", "14px", "16px"]}
//                         flexDirection={"column"}
//                       >
//                         <Text>{rowData?.name || "--"}</Text>
//                         <Text
//                           color="gray.500"
//                           display={
//                             isLargerThan360AndSmallerThan480 ? "flex" : "none"
//                           }
//                         >
//                           {rowData?.face_value
//                             ? formatNumberWithNumeral(rowData?.face_value, 3)
//                             : "--"}{" "}
//                           {currencyPurchase}
//                         </Text>
//                         <Text
//                           // justify="center"
//                           px={"0px"}
//                           fontWeight="500"
//                           width="100%"
//                           color="gray.500"
//                           display={["none", "none", "block"]}
//                           fontSize="14px"
//                         >
//                           {rowData?.maturity_date
//                             ? formatTime(
//                                 Number(rowData.maturity_date),
//                                 "YYYY-MM-DD"
//                               )
//                             : moment().format("YYYY-MM-DD")}
//                         </Text>
//                       </Flex>
//                     );
//                   }}
//                   // style={{ textTransform: 'capitalize', display: 'flex !important', fontWeight: 500 }}
//                   headerClassName={"header-table-left"}
//                   headerRenderer={() => (
//                     <Flex
//                       color="gray.500"
//                       justifyContent={
//                         windowSize.width < 768
//                           ? "flex-end !important"
//                           : "center"
//                       }
//                       w="100%"
//                       pl={["14px", "8px", "14px"]}
//                       fontWeight="500 !important"
//                     >
//                       {t("asset")}
//                       <Text
//                         display={
//                           isLargerThan360AndSmallerThan480 ? "flex" : "none"
//                         }
//                       >
//                         /{t("last_price")}
//                       </Text>
//                       <Text
//                         color="gray.500"
//                         w="100%"
//                         display={["none", "none", "block"]}
//                       >
//                         /{t("maturity_date")}
//                       </Text>
//                     </Flex>
//                   )}
//                   // className={'text-left css-action'}
//                   dataKey="asset"
//                   width={
//                     isLargerThan360AndSmallerThan480
//                       ? windowSize.width * 0.2
//                       : isLargerThan480AndSmallerThan768
//                       ? windowSize.width * 0.28
//                       : 227
//                   }
//                 />
//                 <Column
//                   cellRenderer={({ rowData }) => {
//                     return <BondApr detail={rowData} />;
//                   }}
//                   headerRenderer={() => (
//                     <Flex
//                       color="gray.500"
//                       justifyContent={
//                         windowSize.width < 768
//                           ? "flex-end !important"
//                           : "center"
//                       }
//                       w="100%"
//                       width="100%"
//                     >
//                       {t("fixed_apr")}
//                       <Box as="span">
//                         <TooltipCustom
//                           iconUrl="/img/information_circle.svg"
//                           subtitle={t("sub_tooltip_fixed_apr")}
//                           content={t("tooltip_fixed_apr")}
//                         />
//                       </Box>
//                     </Flex>
//                   )}
//                   dataKey="fixed_apr"
//                   width={
//                     isLargerThan360AndSmallerThan480
//                       ? windowSize.width * 0.33
//                       : isLargerThan480AndSmallerThan768
//                       ? windowSize.width * 0.27
//                       : 162
//                   }
//                   headerClassName={"header-table-center"}
//                   headerStyle={{ textAlign: "center" }}
//                 />

//                 {!isSmallerThan768 && (
//                   <Column
//                     cellRenderer={({ rowData }) => {
//                       return <BondYtm detail={rowData} />;
//                     }}
//                     headerRenderer={() => (
//                       <Flex
//                         color="gray.500"
//                         w="100%"
//                         justifyContent={
//                           windowSize.width < 768
//                             ? "flex-end !important"
//                             : "center"
//                         }
//                         className="hidden-title-list-bond"
//                       >
//                         {t("ytm")}
//                         <Box as="span">
//                           <TooltipCustom
//                             iconUrl="/img/information_circle.svg"
//                             subtitle={t("sub_tooltip_ytm")}
//                             content={t("tooltip_ytm")}
//                           />
//                         </Box>
//                       </Flex>
//                     )}
//                     dataKey="ytm"
//                     headerClassName={"header-table-center"}
//                     width={windowSize.width > 768 ? 113 : 0}
//                   />
//                 )}
//                 {/* {!isSmallerThan768 && (
//                   <Column
//                     cellRenderer={({ rowData }) => {
//                       return (
//                         <Flex
//                           justify="center"
//                           px={'0px'}
//                           fontWeight="500"
//                           width="100%"
//                           py={['4px', '8px', '12px', '18px']}
//                           color="white"
//                           display={isSmallerThan768 ? 'none' : 'flex'}
//                         >
//                           {rowData?.maturity_date
//                             ? formatTime(Number(rowData.maturity_date), 'YYYY-MM-DD')
//                             : moment().format('YYYY-MM-DD')}
//                         </Flex>
//                       );
//                     }}
//                     label={
//                       <Flex color="gray.500" w="100%">
//                         {t('maturity_date')}
//                       </Flex>
//                     }
//                     dataKey="maturity_date"
//                     width={132}
//                     headerClassName={'header-table-center'}
//                   />
//                 )} */}
//                 <Column
//                   cellRenderer={({ rowData }) => {
//                     const currencyPurchase =
//                       rowData?.face_asset?.symbol || "BUSD";
//                     return (
//                       <Flex
//                         fontWeight="500"
//                         width="100%"
//                         align="center"
//                         justify="center"
//                         textAlign="center"
//                         px={"0px"}
//                         py={["4px", "8px", "12px", "18px"]}
//                         color="white"
//                         fontSize={isSmallerThan768 ? "14px" : "16px"}
//                         display={
//                           !isLargerThan360AndSmallerThan480 ? "flex" : "none"
//                         }
//                       >
//                         <Flex
//                           justify="center"
//                           flexDirection={isBreakLine ? "column" : "row"}
//                         >
//                           <Text mr={isBreakLine ? "0px" : "4px"}>
//                             {getBondLastPrice(rowData)
//                               ? formatNumberWithNumeral(
//                                   getBondLastPrice(rowData) || 0,
//                                   3
//                                 )
//                               : "--"}
//                           </Text>
//                           <Text id="bond_currency">{currencyPurchase}</Text>
//                         </Flex>
//                       </Flex>
//                     );
//                   }}
//                   headerRenderer={() => (
//                     <Flex
//                       color="gray.500"
//                       w="100%"
//                       justifyContent={
//                         windowSize.width < 768
//                           ? "flex-end !important"
//                           : "center"
//                       }
//                     >
//                       {t("last_price")}

//                       <Box as="span">
//                         <TooltipCustom
//                           iconUrl="/img/information_circle.svg"
//                           content={t("tooltip_last_price")}
//                         />
//                       </Box>
//                     </Flex>
//                   )}
//                   dataKey="last_price"
//                   width={
//                     isLargerThan360AndSmallerThan480
//                       ? 0
//                       : isLargerThan480AndSmallerThan768
//                       ? windowSize.width * 0.18
//                       : 128
//                   }
//                   headerClassName={"header-table-center"}
//                 />
//                 {!isSmallerThan768 && (
//                   <Column
//                     cellRenderer={({ rowData }) => {
//                       const currencyPurchase =
//                         rowData?.face_asset?.symbol || "BUSD";
//                       return (
//                         <Flex
//                           justify="center"
//                           width="100%"
//                           px={"0px"}
//                           fontWeight="500"
//                           py={["4px", "8px", "12px", "18px"]}
//                           color="white"
//                           display={isSmallerThan768 ? "none" : "flex"}
//                           textAlign="center"
//                         >
//                           <Flex
//                             flexDirection={isBreakLine ? "column" : "row"}
//                             justify="center"
//                           >
//                             <Text mr={isBreakLine ? "0px" : "4px"}>
//                               {Number(rowData?.face_value)
//                                 ? formatNumberWithNumeral(
//                                     rowData?.face_value,
//                                     3
//                                   )
//                                 : "--"}
//                             </Text>
//                             <Text> {currencyPurchase}</Text>
//                           </Flex>
//                         </Flex>
//                       );
//                     }}
//                     headerRenderer={() => (
//                       <Flex
//                         color="gray.500"
//                         w="100%"
//                         display={!isSmallerThan768 ? "flex" : "none"}
//                         justifyContent={
//                           windowSize.width < 768
//                             ? "flex-end !important"
//                             : "center"
//                         }
//                       >
//                         {t("face_value")}
//                         {
//                           <Box as="span">
//                             <TooltipCustom
//                               iconUrl="/img/information_circle.svg"
//                               content={t("tooltip_par_value")}
//                             />
//                           </Box>
//                         }
//                       </Flex>
//                     )}
//                     dataKey="par_value"
//                     width={128}
//                     headerClassName={"header-table-center"}
//                   />
//                 )}
//                 {!isSmallerThan768 && (
//                   <Column
//                     cellRenderer={({ rowData }) => {
//                       return (
//                         <Flex
//                           fontWeight="500"
//                           justify="center"
//                           width="100%"
//                           px={"0px"}
//                           py={["4px", "8px", "12px", "18px"]}
//                           color="white"
//                           display={isSmallerThan768 ? "none" : "flex"}
//                         >
//                           {rowData?.supply
//                             ? formatNumberWithNumeral(rowData?.supply || 0, 0)
//                             : "--"}{" "}
//                           {t("unit")}
//                         </Flex>
//                       );
//                     }}
//                     headerRenderer={() => (
//                       <Flex
//                         color="gray.500"
//                         w="100%"
//                         justifyContent={
//                           windowSize.width < 768
//                             ? "flex-end !important"
//                             : "center"
//                         }
//                       >
//                         {t("supply")}
//                       </Flex>
//                     )}
//                     dataKey="supply"
//                     width={157}
//                     headerClassName={"header-table-center"}
//                   />
//                 )}
//                 <Column
//                   cellRenderer={({ rowData }) => {
//                     const status = getStatusFromTimeOfBond(
//                       rowData?.pending_date,
//                       rowData?.on_sale_date,
//                       rowData?.active_date,
//                       rowData?.maturity_date,
//                       rowData?.type,
//                       rowData?.committed_time,
//                       rowData?.distributed_time,
//                       rowData?.calculated_date
//                     );
//                     const timeRange = getRangeTimeOfStatus(status, rowData);
//                     const nextStatus = getNextBondStatus(
//                       status,
//                       timeRange.statusEndTime,
//                       rowData?.active_date,
//                       rowData?.on_sale_date,
//                       rowData?.maturity_date,
//                       rowData?.type,
//                       rowData?.committed_time,
//                       rowData?.distributed_time,
//                       rowData?.calculated_date
//                     );
//                     return (
//                       <Flex
//                         justify={isSmallerThan768 ? "flex-end" : "center"}
//                         px={["4px", "8px"]}
//                         fontWeight="500"
//                         py={["4px", "8px"]}
//                         color="white"
//                         width="100%"
//                       >
//                         <BondStatusColumn
//                           status={status}
//                           statusEndTime={Number(timeRange?.statusEndTime)}
//                           statusStartTime={Number(timeRange?.statusStartTime)}
//                           nextStatus={nextStatus}
//                           id={rowData?.id}
//                         />
//                       </Flex>
//                     );
//                   }}
//                   headerRenderer={() => (
//                     <Flex
//                       color="gray.500"
//                       w="100%"
//                       justifyContent={
//                         windowSize.width < 768
//                           ? "flex-end !important"
//                           : "center"
//                       }
//                     >
//                       {t("status")}
//                     </Flex>
//                   )}
//                   dataKey="status"
//                   width={
//                     isLargerThan360AndSmallerThan480
//                       ? windowSize.width * 0.33
//                       : isLargerThan480AndSmallerThan768
//                       ? windowSize.width * 0.25
//                       : 158
//                   }
//                   headerClassName={
//                     windowSize.width < 768
//                       ? "header-table-right"
//                       : "header-table-center"
//                   }
//                 />
//                 {!isSmallerThan768 && (
//                   <Column
//                     cellRenderer={({ rowData }) => {
//                       const status = getStatusFromTimeOfBond(
//                         rowData?.pending_date,
//                         rowData?.on_sale_date,
//                         rowData?.active_date,
//                         rowData?.maturity_date,
//                         rowData?.type,
//                         rowData?.committed_time,
//                         rowData?.distributed_time,
//                         rowData?.calculated_date
//                       );
//                       return (
//                         <Flex
//                           width="100%"
//                           textAlign="right"
//                           fontWeight="500"
//                           pl="12px"
//                           pr="14px"
//                           py={["4px", "8px", "12px", "18px", "24px"]}
//                           color="white"
//                         >
//                           <BondActionColumn
//                             statusName={status}
//                             bondName={rowData?.name}
//                             id={rowData?.id}
//                           />
//                         </Flex>
//                       );
//                     }}
//                     headerRenderer={() => (
//                       <Flex
//                         pr="14px"
//                         color="gray.500"
//                         w="100%"
//                         justifyContent={
//                           windowSize.width < 768
//                             ? "flex-end !important"
//                             : "center"
//                         }
//                       >
//                         {t("action")}
//                       </Flex>
//                     )}
//                     dataKey="action"
//                     width={113}
//                     headerClassName={"header-table-right"}
//                   />
//                 )}
//               </Table>
//             )}
//           </AutoSizer>
//         )}
//       </InfiniteLoader>
//     ) : null;
//   }, [listBond, windowSize, totalPage]);
//   return (
//     <Flex
//       id="scrollableDiv"
//       minW={!isSmallerThan768 ? " 1150px" : "unset"}
//       h="350px"
//       width="100%"
//       position="relative"
//     >
//       <Flex
//         w="100%"
//         h="100%"
//         zIndex={100}
//         position="absolute"
//         justify="center"
//         alignItems="center"
//         opacity="0.9"
//         bg="gray.900"
//         display={isLoading ? "flex" : "none"}
//       >
//         <Lottie
//           options={{
//             loop: true,
//             autoplay: true,
//             animationData: Loader,
//             rendererSettings: {
//               preserveAspectRatio: "xMidYMid slice",
//             },
//           }}
//           speed={0.75}
//           isStopped={false}
//           height={"100px"}
//           width={"100px"}
//         />
//       </Flex>
//       <Flex
//         w="100%"
//         hidden={listBond.length > 0 || isLoading}
//         minH="300px"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <NoRecord
//           title={t("no_bonds_title")}
//           subTitle={t("no_bonds_sub_title")}
//         />
//       </Flex>
//       {infiniteList}
//     </Flex>
//   );
// };

// export default BondItemDesktop;
