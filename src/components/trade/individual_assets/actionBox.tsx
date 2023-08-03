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
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

// State
import useTradeStore from "~/store/tradeStore";

// Assets
import chevron2 from "../../../assets/icons/chevron2.svg";
import { BiChevronDown } from "react-icons/bi";

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
    <div className="flex h-full w-full flex-col items-center justify-between rounded-2xl bg-darkModeBoxBackground px-3 pb-3 pt-3">
      <Accordion className="h-full w-full">
        <AccordionItem
          initialEntered
          className="w-full"
          header={
            <div className="flex w-full items-center justify-between rounded-lg bg-darkModeAccordionBackground px-3 py-3">
              <p className="circularMedium text-base text-darkModeTextWhite">
                Collateral
              </p>
              <BiChevronDown size={20} color="#939395" />
            </div>
          }
        >
          <div
            className="h-2/5 w-full rounded-xl px-1 pt-3"
            id="tradingCollateralBox"
          >
            <Tabs>
              <TabList className="flex flex-row rounded-xl bg-darkerBlue">
                <Tab className="flex w-1/2 cursor-pointer flex-row items-center justify-center rounded-t-xl py-2">
                  <span className="circularMedium text-lg text-darkModeTextWhite">
                    Add
                  </span>
                </Tab>
                <Tab className="flex w-1/2 cursor-pointer flex-row items-center justify-center py-2">
                  <span className="circularMedium text-lg text-darkModeTextWhite">
                    Remove
                  </span>
                </Tab>
              </TabList>

              <TabPanel className="p-1">
                <div className="flex h-fit w-full flex-row items-center justify-between pb-5 pt-2">
                  <h5 className="circularMedium text-lg text-darkModeTextWhite">
                    Collateral
                  </h5>
                  <div className="flex flex-row items-start justify-start rounded-xl">
                    <Select
                      options={percentageOptions}
                      values={[]}
                      searchable={false}
                      onChange={(values) => {
                        if (values[0]) {
                          changeAddCollateralPercentage(values[0].value);
                        } else {
                          changeAddCollateralPercentage(25);
                        }
                      }}
                      placeholder="25%"
                      className="percentageSelector"
                    />
                  </div>
                </div>
                <div className="mt-16 flex h-fit w-full flex-col items-center justify-start">
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
                    className="circularMedium mb-5 h-full w-full rounded-xl border border-white bg-transparent py-2 pl-2 text-base text-darkModeTextWhite placeholder:text-gray-500"
                  />
                  <button className="mx-3 mb-1 flex h-fit w-full flex-row items-center justify-center rounded-xl bg-nexGreen py-3">
                    <span className="circularMedium text-sm text-nexTextDarklue">
                      Approve
                    </span>
                  </button>
                  <button className="mb-1 flex h-fit w-full flex-row items-center justify-center rounded-xl bg-nexGreen py-3">
                    <span className="circularMedium text-sm text-nexTextDarklue">
                      Add Collateral
                    </span>
                  </button>
                  <hr className="m-3 mt-2 h-[1px] w-2/12 bg-blue-100" />
                  <button className="flex h-fit w-full flex-row items-center justify-center rounded-xl bg-nexGreen py-3">
                    <span className="circularMedium text-sm text-nexTextDarklue">
                      Add Test Tokens
                    </span>
                  </button>
                </div>
              </TabPanel>
              <TabPanel className="p-1">
                <div className="flex h-fit w-full flex-row items-center justify-between pb-8 pt-2">
                  <h5 className="circularMedium text-lg text-darkModeTextWhite">
                    Collateral
                  </h5>
                  <div className="flex flex-row items-start justify-start rounded-xl">
                    <Select
                      options={percentageOptions}
                      values={[]}
                      searchable={false}
                      onChange={(values) => {
                        if (values[0]) {
                          changeAddCollateralPercentage(values[0].value);
                        } else {
                          changeAddCollateralPercentage(25);
                        }
                      }}
                      placeholder="25%"
                      className="percentageSelector"
                    />
                  </div>
                </div>
                <div className=" mt-44 flex h-fit w-full flex-col items-center justify-start">
                  <input
                    type="number"
                    name="addcollateralAmount"
                    value={addCollateralAmount}
                    placeholder={addCollateralAmount.toString()}
                    className="circularMedium mb-3 h-full w-full rounded-xl border border-white bg-transparent py-2 pl-2 text-base text-darkModeTextWhite placeholder:text-gray-500"
                  />

                  <button className="flex h-fit w-full flex-row items-center justify-center rounded-xl bg-nexRed py-3">
                    <span className="circularMedium text-sm text-darkModeTextBlack">
                      Withdraw Collateral
                    </span>
                  </button>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </AccordionItem>
        <AccordionItem
          header={
            <div className="mt-2 flex w-full items-center justify-between rounded-lg bg-darkModeAccordionBackground px-3 py-3">
              <p className="circularMedium text-base text-darkModeTextWhite">
                Position
              </p>
              <BiChevronDown size={20} color="#939395" />
            </div>
          }
        >
          <div
            className="h-full w-full rounded-xl px-1 pt-3"
            id="tradingPositionBox"
          >
            <Tabs>
              <TabList className="flex flex-row rounded-xl bg-darkerBlue">
                <Tab className="flex w-1/2 cursor-pointer flex-row items-center justify-center rounded-t-xl py-2">
                  <span className="circularMedium text-lg text-darkModeTextWhite">
                    Long
                  </span>
                </Tab>
                <Tab className="flex w-1/2 cursor-pointer flex-row items-center justify-center py-2">
                  <span className="circularMedium text-lg text-darkModeTextWhite">
                    Short
                  </span>
                </Tab>
              </TabList>

              <TabPanel className="px-1 py-5">
                <div className="flex h-fit w-full flex-row items-center justify-between">
                  <button
                    type="button"
                    className={
                      tradeLongPositionType == "market"
                        ? "selectedDurationBtn mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                        : "mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white  px-6 py-2"
                    }
                    onClick={() => {
                      changeTradeLongPositionType("market");
                    }}
                  >
                    <span className="circularMedium text-sm text-darkModeTextWhite">
                      Market
                    </span>
                  </button>
                  <button
                    type="button"
                    className={
                      tradeLongPositionType == "limit"
                        ? "selectedDurationBtn mx-1 flex w-3/12 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                        : "mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                    }
                    onClick={() => {
                      changeTradeLongPositionType("limit");
                    }}
                  >
                    <span className="circularMedium text-sm text-darkModeTextWhite">
                      Limit
                    </span>
                  </button>
                  <button
                    type="button"
                    className={
                      tradeLongPositionType == "trade"
                        ? "selectedDurationBtn mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                        : "mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                    }
                    onClick={() => {
                      changeTradeLongPositionType("trade");
                    }}
                  >
                    <span className="circularMedium text-sm text-darkModeTextWhite">
                      Trade
                    </span>
                  </button>
                </div>
                <div className="mt-3 flex h-fit w-full flex-row items-center justify-between py-3">
                  <h5 className="circularMedium text-lg text-darkModeTextWhite">Margin</h5>
                  <div className="flex flex-row items-start justify-start rounded-xl">
                    <Select
                      options={percentageOptions}
                      values={[]}
                      searchable={false}
                      onChange={(values) => {
                        if (values[0]) {
                          updateTradeLongPositionMarginAmount(values[0].value);
                        } else {
                          updateTradeLongPositionMarginAmount(25);
                        }
                      }}
                      placeholder="25%"
                      className="percentageSelector"
                    />
                  </div>
                </div>
                <p className="circularMedium text-xs font-thin text-darkModeTextWhite">
                  add margin manually:
                </p>
                <div className="mt-2 flex h-fit w-full flex-row items-center justify-start rounded-xl border border-solid border-white">
                  <input
                    type="number"
                    name="addcollateralAmount"
                    value={tradeLongPositionMarginAmount}
                    placeholder={tradeLongPositionMarginAmount.toString()}
                    className="circularMedium h-full w-full bg-transparent py-2 pl-2 text-base text-darkModeTextWhite placeholder:text-gray-500"
                  />
                </div>
                <button className="mb-2 mt-3 flex h-fit w-full flex-row items-center justify-center rounded-xl bg-nexGreen py-3">
                  <span className="circularMedium text-sm text-nexTextDarklue">
                    Open
                  </span>
                </button>
                <button className="mb-2 flex h-fit w-full flex-row items-center justify-center rounded-xl bg-nexRed py-3">
                  <span className="circularMedium text-sm text-nexTextDarklue">
                    Close
                  </span>
                </button>
              </TabPanel>
              <TabPanel className="px-1 py-5" id="zefedzfe">
                <div className="flex h-fit w-full flex-row items-start justify-start">
                  <button
                    type="button"
                    className={
                      tradeLongPositionType == "market"
                        ? "selectedDurationBtn mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                        : "mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white  px-6 py-2"
                    }
                    onClick={() => {
                      changeTradeLongPositionType("market");
                    }}
                  >
                    <span className="circularMedium text-sm text-darkModeTextWhite">
                      Market
                    </span>
                  </button>
                  <button
                    type="button"
                    className={
                      tradeLongPositionType == "limit"
                        ? "selectedDurationBtn mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                        : "mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                    }
                    onClick={() => {
                      changeTradeLongPositionType("limit");
                    }}
                  >
                    <span className="circularMedium text-sm text-darkModeTextWhite">
                      Limit
                    </span>
                  </button>
                  <button
                    type="button"
                    className={
                      tradeLongPositionType == "trade"
                        ? "selectedDurationBtn mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                        : "mx-1 flex w-4/12 flex-row items-center justify-center rounded-xl border border-solid border-white px-6 py-2"
                    }
                    onClick={() => {
                      changeTradeLongPositionType("trade");
                    }}
                  >
                    <span className="circularMedium text-sm text-darkModeTextWhite">
                      Trade
                    </span>
                  </button>
                </div>
                <div className="mt-3 flex h-fit w-full flex-row items-center justify-between py-3">
                  <h5 className="circularMedium text-lg text-darkModeTextWhite">Margin</h5>
                  <div className="flex flex-row items-start justify-start rounded-xl">
                    <Select
                      options={percentageOptions}
                      values={[]}
                      searchable={false}
                      onChange={(values) => {
                        if (values[0]) {
                          updateTradeShortPositionMarginAmount(values[0].value);
                        } else {
                          updateTradeShortPositionMarginAmount(25);
                        }
                      }}
                      placeholder="25%"
                      className="percentageSelector"
                    />
                  </div>
                </div>
                <p className="circularMedium text-xs font-thin text-darkModeTextWhite">
                  add margin manually:
                </p>
                <div className="mt-2 flex h-fit w-full flex-row items-center justify-start rounded-xl border border-solid border-white">
                  <input
                    type="number"
                    name="addcollateralAmount"
                    value={tradeLongPositionMarginAmount}
                    placeholder={tradeLongPositionMarginAmount.toString()}
                    className="circularMedium h-full w-full bg-transparent py-2 pl-2 text-base text-darkModeTextWhite placeholder:text-gray-500"
                  />
                </div>
                <button className="mb-2 mt-3 flex h-fit w-full flex-row items-center justify-center rounded-xl bg-nexGreen py-3">
                  <span className="circularMedium text-sm text-nexTextDarklue">
                    Open
                  </span>
                </button>
                <button className="mb-2 flex h-fit w-full flex-row items-center justify-center rounded-xl bg-nexRed py-3">
                  <span className="circularMedium text-sm text-nexTextDarklue">
                    Close
                  </span>
                </button>
              </TabPanel>
            </Tabs>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ActionBox;
