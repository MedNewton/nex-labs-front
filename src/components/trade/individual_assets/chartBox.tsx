/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//Essentials
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// State
import useTradeStore from "~/store/tradeStore";

// Assets
import nft_line from "../../../assets/icons/nft_line.svg";
import chevron1 from "../../../assets/icons/chevron1.svg";
import expand_icon from "../../../assets/icons/expand.svg";
import setting_icon from "../../../assets/icons/settings.svg";
import exp from "constants";

const ChartBox: React.FC = () => {
  const { isDrawerOpen, toggleDrawer, selectedDuration, selectDuration } =
    useTradeStore();

  return (
    <div className="glassy flex h-fit w-3/4 flex-col items-start justify-between rounded-2xl p-3">
      <div className="flex h-fit w-full flex-row items-start justify-between px-2 py-1">
        <div className="flex h-fit w-fit flex-row items-center justify-between">
          <div
            className="flex cursor-pointer flex-row items-center justify-between rounded-xl border border-solid border-white px-2 py-2"
            onClick={toggleDrawer}
          >
            <Image
              src={nft_line}
              height={20}
              width={20}
              alt="nft line icon"
              className="mr-2"
            ></Image>
            <p className="circularMedium mr-4 text-sm text-white">BAYC</p>
            <Image
              src={chevron1}
              height={10}
              width={10}
              alt="nft line icon"
            ></Image>
          </div>
          <div className="ml-2 flex flex-row items-start justify-start rounded-xl border border-solid border-white">
            <button
              type="button"
              className={
                selectedDuration == "d"
                  ? "selectedDurationBtn flex flex-row items-center justify-center rounded-l-xl border-r-2 border-solid border-r-white px-6 py-2"
                  : "flex flex-row items-center justify-center rounded-l-xl border-r-2 border-solid border-r-white px-6 py-2"
              }
              onClick={() => {
                selectDuration("d");
              }}
            >
              <p className="circularMedium text-sm text-white">24H</p>
            </button>
            <button
              type="button"
              className={
                selectedDuration == "w"
                  ? "selectedDurationBtn flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                  : "flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
              }
              onClick={() => {
                selectDuration("w");
              }}
            >
              <p className="circularMedium text-sm text-white">1W</p>
            </button>
            <button
              type="button"
              className={
                selectedDuration == "m"
                  ? "selectedDurationBtn flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
                  : "flex flex-row items-center justify-center border-r-2 border-solid border-r-white px-6 py-2"
              }
              onClick={() => {
                selectDuration("m");
              }}
            >
              <p className="circularMedium text-sm text-white">1M</p>
            </button>
            <button
              type="button"
              className={
                selectedDuration == "y"
                  ? "selectedDurationBtn flex flex-row items-center justify-center rounded-r-xl  border-solid border-r-white px-6 py-2"
                  : "flex flex-row items-center justify-center rounded-r-xl border-solid border-r-white px-6 py-2"
              }
              onClick={() => {
                selectDuration("y");
              }}
            >
              <p className="circularMedium text-sm text-white">1Y</p>
            </button>
          </div>
        </div>

        <div className="flex flex-row items-start justify-between pt-3">
          <Image
            src={expand_icon}
            height={15}
            width={15}
            alt="expand"
            className="mr-4"
          ></Image>
          <Image
            src={setting_icon}
            height={15}
            width={15}
            alt="settings"
          ></Image>
        </div>
      </div>
      <div className="h-100 mt-4 w-full rounded-2xl bg-white py-52"></div>
    </div>
  );
};

export default ChartBox;
