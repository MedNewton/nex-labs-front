/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//Essentials
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Select from "react-dropdown-select";

// State
import useTradeStore from "~/store/tradeStore";

// Assets
import chevron2 from "../../../assets/icons/chevron2.svg";

const ActionBox: React.FC = () => {
  const {
    addCollateralPercentage,
    changeAddCollateralPercentage,
    addCollateralAmount,
    updateAddCollateralAmount,
    tradeLongPositionType,
    changeTradeLongPositionType,
    tradeLongPositionMarginPercentage,
    changeTradeLongPositionMarginPercentage,
    tradeLongPositionMarginAmount,
    updateTradeLongPositionMarginAmount,
    tradeShortPositionType,
    changeTradeShortPositionType,
    tradeShortPositionMarginPercentage,
    changeTradeShortPositionMarginPercentage,
    tradeShortPositionMarginAmount,
    updateTradeShortPositionMarginAmount,
  } = useTradeStore();

  const percentageOptions = [
    { value: 25, label: "25%" },
    { value: 50, label: "50%" },
    { value: 75, label: "75%" },
    { value: 100, label: "100%" },
  ];

  return (
    <div className="glassy flex h-full w-full flex-col items-center justify-between rounded-2xl px-3 py-4 pb-8">
      
      <div
        className="h-2/5 w-full rounded-xl border border-solid border-white px-2 pb-5 pt-2"
        id="tradingCollateralBox"
      >
        <Tabs>
          <TabList className="flex flex-row">
            <Tab className="flex w-1/2 cursor-pointer flex-row items-center justify-center rounded-t-xl border border-solid border-white py-1">
              <span className="circularMedium text-lg text-white">Add</span>
            </Tab>
            <Tab className="flex w-1/2 cursor-pointer flex-row items-center justify-center rounded-t-xl border border-solid border-white py-1">
              <span className="circularMedium text-lg text-white">Remove</span>
            </Tab>
          </TabList>

          <TabPanel className="p-2">
            <div className="flex h-fit w-full flex-row items-center justify-between py-3">
              <h5 className="circularMedium text-lg text-white">Collateral</h5>
              <div className="flex flex-row items-start justify-start rounded-xl">
                <Select
                  options={percentageOptions}
                  values={[]}
                  searchable={false}
                  onChange={(values) => {
                    if(values[0]){
                      changeAddCollateralPercentage(values[0].value)
                    }
                    else{
                      changeAddCollateralPercentage(25)
                    }
                  }}
                  placeholder="25%"
                  className="percentageSelector"
                />
              </div>
            </div>
            <div className="mt-3 flex h-fit w-full flex-row items-center justify-start rounded-xl border border-solid border-white">
              <input
                type="number"
                name="addcollateralAmount"
                value={addCollateralAmount}
                placeholder={addCollateralAmount.toString()}
                onChange={() => {
                  (e: React.FormEvent<HTMLInputElement>) => {
                    updateAddCollateralAmount(
                      parseFloat(e.currentTarget.value)
                    );
                  };
                }}
                className="circularMedium h-full w-1/2 bg-transparent pl-2 text-base text-white placeholder:text-gray-500"
              />
              <button className="flex h-10 w-1/4 flex-row items-center justify-center bg-blue-400 py-1">
                <span className="circularMedium text-xs text-white">
                  Approve
                </span>
              </button>
              <button className="flex h-10 w-1/4 flex-row items-center justify-center rounded-r-xl bg-red-500 py-1">
                <span className="circularMedium text-xs text-white">
                  Add Collateral
                </span>
              </button>
            </div>
          </TabPanel>
          <TabPanel className="p-2">
            <div className="flex h-fit w-full flex-row items-center justify-between py-3">
              <h5 className="circularMedium text-lg text-white">Collateral</h5>
              <div className="flex flex-row items-start justify-start rounded-xl">
                <Select
                  options={percentageOptions}
                  values={[]}
                  searchable={false}
                  onChange={(values) => {
                    if(values[0]){
                      changeAddCollateralPercentage(values[0].value)
                    }
                    else{
                      changeAddCollateralPercentage(25)
                    }
                  }}
                  placeholder="25%"
                  className="percentageSelector"
                />
              </div>
            </div>
            <div className="mt-3 flex h-fit w-full flex-row items-center justify-start rounded-xl border border-solid border-white">
              <input
                type="number"
                name="addcollateralAmount"
                value={addCollateralAmount}
                placeholder={addCollateralAmount.toString()}
                className="circularMedium h-full w-2/3 bg-transparent pl-2 text-base text-white placeholder:text-gray-500"
              />

              <button className="flex h-full w-1/3 flex-row items-center justify-center rounded-r-xl bg-red-500 py-1">
                <span className="circularMedium text-xs text-white">
                  Withdraw Collateral
                </span>
              </button>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div
        className="mt-3 h-fit w-full rounded-xl border border-solid border-white p-2"
        id="tradingPositionBox"
      >
        <Tabs>
          <TabList className="flex flex-row">
            <Tab className="flex w-1/2 cursor-pointer flex-row items-center justify-center rounded-t-xl border border-solid border-white py-1">
              <span className="circularMedium text-lg text-white">Long</span>
            </Tab>
            <Tab className="flex w-1/2 cursor-pointer flex-row items-center justify-center rounded-t-xl border border-solid border-white py-1">
              <span className="circularMedium text-lg text-white">Short</span>
            </Tab>
          </TabList>

          <TabPanel className="px-2 py-5">
            <div className="flex h-fit w-full flex-row items-start justify-start">
              <button
                type="button"
                className={
                  tradeLongPositionType == "market"
                    ? "selectedDurationBtn mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                    : "mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white  px-6 py-2"
                }
                onClick={() => {
                  changeTradeLongPositionType("market");
                }}
              >
                <span className="circularMedium text-base text-white">
                  Market
                </span>
              </button>
              <button
                type="button"
                className={
                  tradeLongPositionType == "limit"
                    ? "selectedDurationBtn mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                    : "mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                }
                onClick={() => {
                  changeTradeLongPositionType("limit");
                }}
              >
                <span className="circularMedium text-base text-white">
                  Limit
                </span>
              </button>
              <button
                type="button"
                className={
                  tradeLongPositionType == "trade"
                    ? "selectedDurationBtn mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                    : "mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                }
                onClick={() => {
                  changeTradeLongPositionType("trade");
                }}
              >
                <span className="circularMedium text-base text-white">
                  Trade
                </span>
              </button>
            </div>
            <div className="mt-3 flex h-fit w-full flex-row items-center justify-between py-3">
              <h5 className="circularMedium text-lg text-white">Margin</h5>
              <div className="flex flex-row items-start justify-start rounded-xl">
                <Select
                  options={percentageOptions}
                  values={[]}
                  searchable={false}
                  onChange={(values) => {
                    if(values[0]){
                      updateTradeLongPositionMarginAmount(values[0].value)
                    }
                    else{
                      updateTradeLongPositionMarginAmount(25)
                    }
                  }}
                  placeholder="25%"
                  className="percentageSelector"
                />
              </div>
            </div>
            <div className="mt-2 flex h-fit w-full flex-row items-center justify-start rounded-xl border border-solid border-white">
              <input
                type="number"
                name="addcollateralAmount"
                value={tradeLongPositionMarginAmount}
                placeholder={tradeLongPositionMarginAmount.toString()}
                className="circularMedium h-full w-full bg-transparent py-2 pl-2 text-base text-white placeholder:text-gray-500"
              />
            </div>
          </TabPanel>
          <TabPanel className="px-2 py-5" id="zefedzfe">
            <div className="flex h-fit w-full flex-row items-start justify-start">
              <button
                type="button"
                className={
                  tradeLongPositionType == "market"
                    ? "selectedDurationBtn mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                    : "mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white  px-6 py-2"
                }
                onClick={() => {
                  changeTradeLongPositionType("market");
                }}
              >
                <span className="circularMedium text-base text-white">
                  Market
                </span>
              </button>
              <button
                type="button"
                className={
                  tradeLongPositionType == "limit"
                    ? "selectedDurationBtn mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                    : "mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                }
                onClick={() => {
                  changeTradeLongPositionType("limit");
                }}
              >
                <span className="circularMedium text-base text-white">
                  Limit
                </span>
              </button>
              <button
                type="button"
                className={
                  tradeLongPositionType == "trade"
                    ? "selectedDurationBtn mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                    : "mx-1 flex w-1/3 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                }
                onClick={() => {
                  changeTradeLongPositionType("trade");
                }}
              >
                <span className="circularMedium text-base text-white">
                  Trade
                </span>
              </button>
            </div>
            <div className="mt-2 flex h-fit w-full flex-row items-center justify-between py-3">
              <h5 className="circularMedium text-lg text-white">Margin</h5>
              <div className="flex flex-row items-start justify-start rounded-xl">
                <Select
                  options={percentageOptions}
                  values={[]}
                  searchable={false}
                  onChange={(values) => {
                    if(values[0]){
                      updateTradeShortPositionMarginAmount(values[0].value)
                    }
                    else{
                      updateTradeShortPositionMarginAmount(25)
                    }
                  }}
                  placeholder="25%"
                  className="percentageSelector"
                />
              </div>
            </div>
            <div className="mt-2 flex h-fit w-full flex-row items-center justify-start rounded-xl border border-solid border-white">
              <input
                type="number"
                name="addcollateralAmount"
                value={tradeLongPositionMarginAmount}
                placeholder={tradeLongPositionMarginAmount.toString()}
                className="circularMedium h-full w-full bg-transparent py-2 pl-2 text-base text-white placeholder:text-gray-500"
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ActionBox;
