import { Button } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { BondAction, BondStatus } from "../../../configs/constants/type";
import { setScrollId } from "../../../redux/global/reducer";
import {
  getActionFromStatus,
  getBackgroundByAction,
} from "../../../utils/propertiesHelper";

interface IBondAction {
  statusName: BondStatus;
  bondName: string;
  id: any;
}

const BondActionColumn: React.FC<IBondAction> = ({
  statusName,
  bondName,
  id,
}) => {
  const { t } = useTranslation(["bonds"]);
  const actionName = getActionFromStatus(statusName);
  const bg = getBackgroundByAction(actionName);
  // const history = useHistory();
  const dispatch = useDispatch();
  const handleLinkToBondDetail = useCallback(() => {
    if (!id) {
      return (window.location.href = `/bonds`);
    }
    if (bondName === BondAction.CLAIM || bondName === BondAction.PURCHASE) {
      dispatch(setScrollId(`bond_detail_timeline}`));
    } else {
      dispatch(setScrollId(""));
    }
    // return history.push(`bonds/${id}`);
  }, [bondName]);
  return (
    <Button
      bg={bg}
      color="white"
      _hover={{}}
      _active={{}}
      fontWeight={500}
      h="32px"
      borderRadius={"8px"}
      fontSize={"14px"}
      onClick={handleLinkToBondDetail}
      w="100%"
    >
      {t(actionName)}
    </Button>
  );
};

export default BondActionColumn;
