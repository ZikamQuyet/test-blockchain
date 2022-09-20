import { BondAction, BondStatus } from "../configs/constants/type";
export const getActionFromStatus = (status: BondStatus) => {
  switch (status) {
    case BondStatus.PENDING: {
      return BondAction.DETAIL;
    }
    case BondStatus.ACTIVE: {
      return BondAction.DETAIL;
    }
    case BondStatus.ON_SALE: {
      return BondAction.PURCHASE;
    }
    case BondStatus.COMMIT: {
      return BondAction.COMMIT;
    }
    case BondStatus.DISTRIBUTION: {
      return BondAction.CLAIM;
    }
    default: {
      return BondAction.CLAIM;
    }
  }
};
export const getBackgroundByAction = (actionName: BondAction) => {
  switch (actionName) {
    case BondAction.CLAIM: {
      return "teal.150";
    }
    case BondAction.PURCHASE: {
      return "teal.150";
    }
    default: {
      return "blue.400";
    }
  }
};
export const getColorByBondStatus = (status: BondStatus) => {
  switch (status) {
    case BondStatus.ACTIVE: {
      return 'teal.150';
    }
    case BondStatus.ON_SALE: {
      return 'red.400';
    }
    case BondStatus.COMMIT: {
      return 'red.400';
    }
    case BondStatus.DISTRIBUTION: {
      return 'red.400';
    }
    case BondStatus.PENDING: {
      return 'purple.400';
    }
    case BondStatus.CALCULATION: {
      return 'cyan.400';
    }
    default: {
      return 'white';
    }
  }
};