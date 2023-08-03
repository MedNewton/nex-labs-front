import { create } from "zustand";

type tradeStore = {
  //Drawer of the trade page
  isDrawerOpen: boolean;
  toggleDrawer: () => void;

  //Duration buttons on the trade page
  selectedDuration: string;
  selectDuration: (duration: string) => void;

  //Add collateral percentage
  addCollateralPercentage: number;
  changeAddCollateralPercentage: (percentage: number) => void;

  //Add collateral Amount
  addCollateralAmount: number;
  updateAddCollateralAmount: (amount: number) => void;

  //Long position type (MARKET, LIMIT, TRADE)
  tradeLongPositionType: string;
  changeTradeLongPositionType: (type: string) => void;

  //Long position margin percentage
  tradeLongPositionMarginPercentage: number;
  changeTradeLongPositionMarginPercentage: (margin: number) => void;

  //Long position margin amount
  tradeLongPositionMarginAmount: number;
  updateTradeLongPositionMarginAmount: (margin: number) => void;

  //Short position type (MARKET, LIMIT, TRADE)
  tradeShortPositionType: string;
  changeTradeShortPositionType: (type: string) => void;

  //Short position margin percentage
  tradeShortPositionMarginPercentage: number;
  changeTradeShortPositionMarginPercentage: (margin: number) => void;

  //Short position margin amount
  tradeShortPositionMarginAmount: number;
  updateTradeShortPositionMarginAmount: (margin: number) => void;

  isTradeLocked : boolean;
  lockTrade: (lock: boolean) => void;

  chartWidth: number;
  changeChartWidth: (width: number) => void;

  orderbookWidth: number;
  changeOrderbookWidth: (width: number) => void;

};

const useTradeStore = create<tradeStore>()((set) => ({
  //Drawer of the trade page
  isDrawerOpen: false,
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

  //Duration buttons on the trade page
  selectedDuration: "d",
  selectDuration: (duration: string) =>
    set((state) => ({ selectedDuration: duration })),

  //Add collateral percentage
  addCollateralPercentage: 25,
  changeAddCollateralPercentage: (percentage: number) =>
    set((state) => ({ addCollateralPercentage: percentage })),

  //Add collateral Amount
  addCollateralAmount: 0.0,
  updateAddCollateralAmount: (amount: number) =>
    set((state) => ({ addCollateralAmount: amount })),

  //Long position type (MARKET, LIMIT, TRADE)
  tradeLongPositionType: "market",
  changeTradeLongPositionType: (type: string) =>
    set((state) => ({ tradeLongPositionType: type })),

  //Long position margin percentage
  tradeLongPositionMarginPercentage: 25,
  changeTradeLongPositionMarginPercentage: (margin: number) =>
    set((state) => ({ tradeLongPositionMarginPercentage: margin })),

  //Long position margin amount
  tradeLongPositionMarginAmount: 0.0,
  updateTradeLongPositionMarginAmount: (amount: number) =>
    set((state) => ({ tradeLongPositionMarginAmount: amount })),

  //Short position type (MARKET, LIMIT, TRADE)
  tradeShortPositionType: "market",
  changeTradeShortPositionType: (type: string) =>
    set((state) => ({ tradeShortPositionType: type })),

  //Short position margin percentage
  tradeShortPositionMarginPercentage: 25,
  changeTradeShortPositionMarginPercentage: (margin: number) =>
    set((state) => ({ tradeShortPositionMarginPercentage: margin })),

  //Short position margin amount
  tradeShortPositionMarginAmount: 0.0,
  updateTradeShortPositionMarginAmount: (amount: number) =>
    set((state) => ({ tradeShortPositionMarginAmount: amount })),

  isTradeLocked: false,
  lockTrade: (lock: boolean) => set((state)=>({isTradeLocked: lock})),

  chartWidth: 9,
  changeChartWidth: (width: number) => set((state)=>({chartWidth: width})),

  orderbookWidth: 4,
  changeOrderbookWidth: (width: number) =>  set((state)=>({orderbookWidth: width})),

}));

export default useTradeStore;
