import { useMemo } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../../redux/store";
export const useGetListBond = () => {
  const listBond = useSelector((state: AppState) => state?.bonds?.listBond);
  return useMemo(() => {
    return listBond;
  }, [listBond]);
};

export const useGetTotalBondPage = () => {
  const totalPage = useSelector((state: AppState) => state?.bonds?.totalPage);
  return useMemo(() => {
    return totalPage;
  }, [totalPage]);
};
