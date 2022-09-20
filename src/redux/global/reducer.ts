import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AddDetailToken, DetailRenderModalInfo } from "../types";
// import type { RootState } from './../store';

// Define a type for the slice state
interface GlobalState {
  value: number;
//   showDetail: DetailRenderModalInfo;
  activeTabs: any;
  scrollId?: string;
  activeMenuMobile: any;
  introModal: any;
//   hasNewBond: any;
//   addDetailToken: AddDetailToken;
  reloadBalance: boolean;
}

// Define the initial state using that type
const initialState: GlobalState = {
  value: 0,
//   showDetail: DetailRenderModalInfo.default,
  activeTabs: 0,
  activeMenuMobile: localStorage.getItem("active_menu_mobile") || "0",
  introModal: localStorage.getItem("intro_birthday") || "0",
//   hasNewBond: JSON.parse(localStorage.getItem("has_new_bond")) || {},
//   addDetailToken: AddDetailToken.default,
  reloadBalance: false,
};
export const globalSlice = createSlice({
  name: "global", // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // setDetailShowedModalInfo: (
    //   state,
    //   action: PayloadAction<DetailRenderModalInfo>
    // ) => {
    //   state.showDetail = action.payload;
    //   return state;
    // },
    // setActiveTabs: (state, action: PayloadAction<any>) => {
    //   state.activeTabs = action.payload;
    //   return state;
    // },
    setScrollId: (state, action: PayloadAction<string>) => {
      state.scrollId = action.payload;
      return state;
    },
    // setActiveMenuMobile: (state, action: PayloadAction<any>) => {
    //   const newData = action.payload;
    //   state.activeMenuMobile = newData;
    //   localStorage.setItem("active_menu_mobile", newData.toString());
    //   return state;
    // },
    // setIntroModal: (state, action: PayloadAction<any>) => {
    //   const newData = action.payload;
    //   state.introModal = newData;
    //   localStorage.setItem("intro_birthday", newData.toString());
    //   return state;
    // },
    // setHasNewBond: (state, action) => {
    //   const newData = action.payload;
    //   state.hasNewBond = newData;
    //   localStorage.setItem("has_new_bond", JSON.stringify(newData));
    //   return state;
    // },
    // setAddDetailToken: (state, action: PayloadAction<AddDetailToken>) => {
    //   state.addDetailToken = action.payload;
    //   return state;
    // },
    // setReloadBalance: (state) => {
    //   state.reloadBalance = !state.reloadBalance;
    //   return state;
    // },
    // setStateReloadBalance: (state, action: PayloadAction<boolean>) => {
    //   state.reloadBalance = action.payload;
    //   return state;
    // },
  },
});
export const {
//   setDetailShowedModalInfo,
  setScrollId,
//   setActiveTabs,
//   setActiveMenuMobile,
//   setStateReloadBalance,
//   setIntroModal,
//   setHasNewBond,
//   setAddDetailToken,
//   setReloadBalance,
} = globalSlice.actions;

// export const selectCount = (state: RootState) => state.global.value;
export default globalSlice.reducer;
