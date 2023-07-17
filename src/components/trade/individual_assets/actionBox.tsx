//Essentials
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// State
import useTradeStore from "~/store/tradeStore";

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
    updateTradeShortPositionMarginAmount
  } = useTradeStore();

  return (
    <div className="glassy ml-2 flex h-full w-1/3 flex-col items-center justify-between rounded-2xl px-3 py-4">
      <div
        className="h-1/3 w-full rounded-xl border border-solid border-white px-2 pt-2 pb-5"
        id="tradingCollateralBox"
      >
        <Tabs>
          <TabList className="flex flex-row">
            <Tab className="flex w-1/2 flex-row items-center justify-center rounded-t-xl border border-solid border-white py-1 cursor-pointer">
              <span className="circularMedium text-lg text-white">Add</span>
            </Tab>
            <Tab className="flex w-1/2 flex-row items-center justify-center rounded-t-xl border border-solid border-white py-1 cursor-pointer">
              <span className="circularMedium text-lg text-white">Remove</span>
            </Tab>
          </TabList>

          <TabPanel className="p-2">
            <div className="flex h-fit w-full flex-row items-center justify-between py-3">
              <h5 className="circularMedium text-lg text-white">Collateral</h5>
              <div className="flex flex-row items-start justify-start rounded-xl border border-solid border-white">
                <button
                  type="button"
                  className={
                    addCollateralPercentage == 25
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-l-xl border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center rounded-l-xl border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeAddCollateralPercentage(25);
                  }}
                >
                  <p className="circularMedium text-xs text-white">25%</p>
                </button>
                <button
                  type="button"
                  className={
                    addCollateralPercentage == 50
                      ? "selectedDurationBtn flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeAddCollateralPercentage(50);
                  }}
                >
                  <p className="circularMedium text-xs text-white">50%</p>
                </button>
                <button
                  type="button"
                  className={
                    addCollateralPercentage == 75
                      ? "selectedDurationBtn flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeAddCollateralPercentage(75);
                  }}
                >
                  <p className="circularMedium text-xs text-white">75%</p>
                </button>
                <button
                  type="button"
                  className={
                    addCollateralPercentage == 100
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-r-xl  border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center rounded-r-xl border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeAddCollateralPercentage(100);
                  }}
                >
                  <p className="circularMedium text-xs text-white">100%</p>
                </button>
              </div>
            </div>
            <div className="flex h-fit w-full flex-row items-center justify-start rounded-xl border border-solid border-white mt-3">
              <input
                type="number"
                name="addcollateralAmount"
                value={addCollateralAmount}
                placeholder={addCollateralAmount.toString()}
                onChange={()=>{(e: React.FormEvent<HTMLInputElement>)=>{updateAddCollateralAmount(parseFloat(e.currentTarget.value))}}}
                className="circularMedium h-full w-1/2 bg-transparent pl-2 text-base text-white placeholder:text-gray-500"
              />
              <button className="flex h-full w-1/4 flex-row items-center justify-center bg-blue-400 py-3">
                <span className="circularMedium text-xs text-white">
                  Approve
                </span>
              </button>
              <button className="flex h-full w-1/4 flex-row items-center justify-center rounded-r-xl bg-red-500 py-3">
                <span className="circularMedium text-xs text-white">
                  Add Collateral
                </span>
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex h-fit w-full flex-row items-center justify-between py-3">
              <h5 className="circularMedium text-lg text-white">Collateral</h5>
              <div className="flex flex-row items-start justify-start rounded-xl border border-solid border-white">
                <button
                  type="button"
                  className={
                    addCollateralPercentage == 25
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-l-xl border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center rounded-l-xl border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeAddCollateralPercentage(25);
                  }}
                >
                  <p className="circularMedium text-xs text-white">25%</p>
                </button>
                <button
                  type="button"
                  className={
                    addCollateralPercentage == 50
                      ? "selectedDurationBtn flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeAddCollateralPercentage(50);
                  }}
                >
                  <p className="circularMedium text-xs text-white">50%</p>
                </button>
                <button
                  type="button"
                  className={
                    addCollateralPercentage == 75
                      ? "selectedDurationBtn flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeAddCollateralPercentage(75);
                  }}
                >
                  <p className="circularMedium text-xs text-white">75%</p>
                </button>
                <button
                  type="button"
                  className={
                    addCollateralPercentage == 100
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-r-xl  border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center rounded-r-xl border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeAddCollateralPercentage(100);
                  }}
                >
                  <p className="circularMedium text-xs text-white">100%</p>
                </button>
              </div>
            </div>
            <div className="flex h-fit w-full flex-row items-center justify-start rounded-xl border border-solid border-white">
              <input
                type="number"
                name="addcollateralAmount"
                value={addCollateralAmount}
                placeholder={addCollateralAmount.toString()}
                className="circularMedium h-full w-2/3 bg-transparent pl-2 text-base text-white placeholder:text-gray-500"
              />

              <button className="flex h-full w-1/3 flex-row items-center justify-center rounded-r-xl bg-red-500 py-3">
                <span className="circularMedium text-xs text-white">
                  Withdraw Collateral
                </span>
              </button>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div
        className="mt-3 h-1/3 w-full rounded-xl border border-solid border-white p-2"
        id="tradingPositionBox"
      >
        <Tabs>
          <TabList className="flex flex-row">
            <Tab className="flex w-1/2 flex-row items-center justify-center rounded-t-xl border border-solid border-white py-1 cursor-pointer">
              <span className="circularMedium text-lg text-white">Long</span>
            </Tab>
            <Tab className="flex w-1/2 flex-row items-center justify-center rounded-t-xl border border-solid border-white py-1 cursor-pointer">
              <span className="circularMedium text-lg text-white">Short</span>
            </Tab>
          </TabList>

          <TabPanel className="px-2 py-5">
            <div className="flex h-fit w-full flex-row items-start justify-start">
              <button
                type="button"
                className={
                  tradeLongPositionType == "market"
                  ? "selectedDurationBtn flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2 w-1/3 mx-1"
                  : "flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2  w-1/3 mx-1"
                }
                onClick={() => {
                  changeTradeLongPositionType("market");
                }}
              >
                <span className="circularMedium text-base text-white">Market</span>
              </button>
              <button
                type="button"
                className={
                    tradeLongPositionType == "limit"
                    ? "selectedDurationBtn flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2 w-1/3 mx-1"
                    : "flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2 w-1/3 mx-1"
                  }
                  onClick={() => {
                    changeTradeLongPositionType("limit");
                  }}
              >
                <span className="circularMedium text-base text-white">Limit</span>
              </button>
              <button
                type="button"
                className={
                  tradeLongPositionType == "trade"
                    ? "selectedDurationBtn flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2 w-1/3 mx-1"
                    : "flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2 w-1/3 mx-1"
                }
                onClick={() => {
                  changeTradeLongPositionType("trade");
                }}
              >
                <span className="circularMedium text-base text-white">Trade</span>
              </button>
            </div>
            <div className="flex h-fit w-full flex-row items-center justify-between py-3 mt-2">
              <h5 className="circularMedium text-lg text-white">Margin</h5>
              <div className="flex flex-row items-start justify-start rounded-xl border border-solid border-white">
                <button
                  type="button"
                  className={
                    tradeLongPositionMarginPercentage == 25
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-l-xl border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center rounded-l-xl border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeTradeLongPositionMarginPercentage(25);
                  }}
                >
                  <p className="circularMedium text-xs text-white">25%</p>
                </button>
                <button
                  type="button"
                  className={
                    tradeLongPositionMarginPercentage == 50
                      ? "selectedDurationBtn flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeTradeLongPositionMarginPercentage(50);
                  }}
                >
                  <p className="circularMedium text-xs text-white">50%</p>
                </button>
                <button
                  type="button"
                  className={
                    tradeLongPositionMarginPercentage == 75
                      ? "selectedDurationBtn flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeTradeLongPositionMarginPercentage(75);
                  }}
                >
                  <p className="circularMedium text-xs text-white">75%</p>
                </button>
                <button
                  type="button"
                  className={
                    tradeLongPositionMarginPercentage == 100
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-r-xl  border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center rounded-r-xl border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeTradeLongPositionMarginPercentage(100);
                  }}
                >
                  <p className="circularMedium text-xs text-white">100%</p>
                </button>
              </div>
            </div>
            <div className="flex h-fit w-full flex-row items-center justify-start rounded-xl border border-solid border-white mt-2">
              <input
                type="number"
                name="addcollateralAmount"
                value={tradeLongPositionMarginAmount}
                placeholder={tradeLongPositionMarginAmount.toString()}
                
                className="circularMedium h-full w-full bg-transparent pl-2 py-2 text-base text-white placeholder:text-gray-500"
              />
            </div>
          </TabPanel>
          <TabPanel className="p-2">
            <div className="flex h-fit w-full flex-row items-start justify-start">
              <button
                type="button"
                className={
                  tradeShortPositionType == "market"
                  ? "selectedDurationBtn flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2 w-1/3 mx-1"
                  : "flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2  w-1/3 mx-1"
                }
                onClick={() => {
                  changeTradeShortPositionType("market");
                }}
              >
                <span className="circularMedium text-base text-white">Market</span>
              </button>
              <button
                type="button"
                className={
                    tradeShortPositionType == "limit"
                    ? "selectedDurationBtn flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2 w-1/3 mx-1"
                    : "flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2 w-1/3 mx-1"
                  }
                  onClick={() => {
                    changeTradeShortPositionType("limit");
                  }}
              >
                <span className="circularMedium text-base text-white">Limit</span>
              </button>
              <button
                type="button"
                className={
                  tradeShortPositionType == "trade"
                    ? "selectedDurationBtn flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2 w-1/3 mx-1"
                    : "flex flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2 w-1/3 mx-1"
                }
                onClick={() => {
                  changeTradeShortPositionType("trade");
                }}
              >
                <span className="circularMedium text-base text-white">Trade</span>
              </button>
            </div>
            <div className="flex h-fit w-full flex-row items-center justify-between py-3">
              <h5 className="circularMedium text-lg text-white">Margin</h5>
              <div className="flex flex-row items-start justify-start rounded-xl border border-solid border-white">
                <button
                  type="button"
                  className={
                    tradeShortPositionMarginPercentage == 25
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-l-xl border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center rounded-l-xl border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeTradeShortPositionMarginPercentage(25);
                  }}
                >
                  <p className="circularMedium text-xs text-white">25%</p>
                </button>
                <button
                  type="button"
                  className={
                    tradeShortPositionMarginPercentage == 50
                      ? "selectedDurationBtn flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeTradeShortPositionMarginPercentage(50);
                  }}
                >
                  <p className="circularMedium text-xs text-white">50%</p>
                </button>
                <button
                  type="button"
                  className={
                    tradeShortPositionMarginPercentage == 75
                      ? "selectedDurationBtn flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeTradeShortPositionMarginPercentage(75);
                  }}
                >
                  <p className="circularMedium text-xs text-white">75%</p>
                </button>
                <button
                  type="button"
                  className={
                    tradeShortPositionMarginPercentage == 100
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-r-xl  border-solid border-r-white px-6 py-2"
                      : "flex flex-row items-center justify-center rounded-r-xl border-solid border-r-white px-6 py-2"
                  }
                  onClick={() => {
                    changeTradeShortPositionMarginPercentage(100);
                  }}
                >
                  <p className="circularMedium text-xs text-white">100%</p>
                </button>
              </div>
            </div>
            <div className="flex h-fit w-full flex-row items-center justify-start rounded-xl border border-solid border-white">
              <input
                type="number"
                name="addcollateralAmount"
                value={tradeShortPositionMarginAmount}
                placeholder={tradeShortPositionMarginAmount.toString()}
                
                className="circularMedium h-full w-full bg-transparent pl-2 py-2 text-base text-white placeholder:text-gray-500"
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ActionBox;
