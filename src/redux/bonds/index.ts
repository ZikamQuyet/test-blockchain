import { createSlice } from "@reduxjs/toolkit";
import { IBondDetail } from "../../configs/constants/type";
import { serialize, uniqBy } from "../../utils/common";
// import { ListBond } from "../types";
import { getListBond } from "./fetchListBond";
interface ListBond {
  listBond: IBondDetail[];
  isModal: any;
  totalPage: number;
  isLoading: boolean;
  totalBond: number;
}
const initialState: ListBond = {
  listBond: [],
  isLoading: false,
  totalPage: 0,
  isModal: localStorage.getItem("is_modal") || "0",
  totalBond: 0,
};
export const bondSlice = createSlice({
  name: "bonds",
  initialState,
  reducers: {
    setListBond: (state, action) => {
      state.listBond = action.payload;
      return state;
    },
    addDataToListBond: (state, action) => {
      const data = state;
      const { payload } = action;
      const newList = data.listBond.concat(payload);
      const uniqueList = uniqBy(newList, "id");
      data.listBond = uniqueList;
      return data;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
      return state;
    },
    updateCurrentBond: (state, action) => {
      state.listBond.map((e) => {
        if (e?.id === action.payload.id) {
          e = {
            ...e,
            totalStake: action.payload.totalStake,
            posiPerBlock: action.payload.posiPerBlock,
          };
        }
        return e;
      });
      return state;
    },
    setOpenModal: (state, action) => {
      const newData = action.payload;
      state.isModal = newData;
      localStorage.setItem("is_modal", newData.toString());
      return state;
    },
    setIsLoading: (state, action) => {
      const newData = action.payload;
      state.isLoading = newData;
      return state;
    },
    setTotalBond: (state, action) => {
      const newData = action.payload;
      state.totalBond = newData;
      return state;
    },
  },
});

export const {
  setIsLoading,
  setListBond,
  addDataToListBond,
  setTotalPage,
  setOpenModal,
  updateCurrentBond,
  setTotalBond,
} = bondSlice.actions;

export const fetchListBond = (params: string) => async (dispatch: any) => {
  const queryString = serialize(params);
  dispatch(setIsLoading(true));
  const bonds = await getListBond(queryString);
  dispatch(setIsLoading(false));

  if (bonds && bonds.items && bonds.items.length > 0) {
    dispatch(setListBond(bonds.items));
    dispatch(setTotalPage(bonds.total_page));
    dispatch(setTotalBond(Number(bonds.total_bonds)));
    // const getRewardToken = bonds.address;
    // const customListBond = Promise.all(
    //   bonds.items.map(async (e) => {
    //     const totalStaking = await getDataBondStaking(getRewardToken);
    //     const posiPerBlock = await usePosiPerBlockForPool(bonds.sous_id);
    //     return {
    //       ...e,
    //       totalStake: totalStaking,
    //       posiPerBlock: posiPerBlock,
    //     };
    //   }),
    // );
    // customListBond.then((e) => dispatch(setListBond(e)));
  }
};

export const fetchMoreListBond = (params: string) => async (dispatch: any) => {
  const queryString = serialize(params);
  const bonds = await getListBond(queryString);
  if (bonds && bonds.items && bonds.items.length > 0) {
    dispatch(addDataToListBond(bonds.items));
  }
};

export default bondSlice.reducer;
