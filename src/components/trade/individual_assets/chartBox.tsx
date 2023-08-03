/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//Essentials
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

// State
import useTradeStore from "~/store/tradeStore";

// Assets
import nft_line from "../../../assets/icons/nft_line.svg";
import chevron1 from "../../../assets/icons/chevron1.svg";
import chevron2 from "../../../assets/icons/chevron2.svg";
import expand_icon from "../../../assets/icons/expand.svg";
import setting_icon from "../../../assets/icons/settings.svg";
import { BsGear } from "react-icons/bs";
import { BiCandles } from "react-icons/bi";

const ChartBox: React.FC = () => {
  const {
    isDrawerOpen,
    toggleDrawer,
    selectedDuration,
    selectDuration,
    changeChartWidth,
  } = useTradeStore();

  return (
    <div className="flex h-full w-full flex-col items-start justify-start rounded-2xl py-3">
      <div className="flex h-fit w-full flex-row items-start justify-between px-1 py-1">
        <div className="flex h-fit w-fit flex-row items-center justify-between">
          <div
            className="flex cursor-pointer flex-row items-center justify-between rounded-xl border border-solid border-white px-4 py-2"
            onClick={toggleDrawer}
          >
            <p className="circularMedium mr-4 text-sm text-white">BAYC</p>
            <Image
              src={chevron1}
              height={10}
              width={10}
              alt="nft line icon"
            ></Image>
          </div>
          <div className="flex flex-row items-start justify-start px-2">
            <button
              type="button"
              className={
                selectedDuration == "s"
                  ? "selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-2 py-1"
                  : "flex flex-row items-center justify-center rounded-lg px-2 py-1"
              }
              onClick={() => {
                selectDuration("s");
              }}
            >
              <p className="circularMedium text-sm text-white">1s</p>
            </button>
            <button
              type="button"
              className={
                selectedDuration == "m"
                  ? "selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-2 py-1"
                  : "flex flex-row items-center justify-center rounded-lg px-2 py-1"
              }
              onClick={() => {
                selectDuration("m");
              }}
            >
              <p className="circularMedium text-sm text-white">1m</p>
            </button>
            <button
              type="button"
              className={
                selectedDuration == "5m"
                  ? "selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-2 py-1"
                  : "flex flex-row items-center justify-center rounded-lg px-2 py-1"
              }
              onClick={() => {
                selectDuration("5m");
              }}
            >
              <p className="circularMedium text-sm text-white">5m</p>
            </button>
            <button
              type="button"
              className={
                selectedDuration == "15m"
                  ? "selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-2 py-1"
                  : "flex flex-row items-center justify-center rounded-lg px-2 py-1"
              }
              onClick={() => {
                selectDuration("15m");
              }}
            >
              <p className="circularMedium text-sm text-white">15m</p>
            </button>
            <button
              type="button"
              className={
                selectedDuration == "h"
                  ? "selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-2 py-1"
                  : "flex flex-row items-center justify-center rounded-lg px-2 py-1"
              }
              onClick={() => {
                selectDuration("h");
              }}
            >
              <p className="circularMedium text-sm text-white">1h</p>
            </button>
            <button
              type="button"
              className={
                selectedDuration == "d"
                  ? "selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-2 py-1"
                  : "flex flex-row items-center justify-center rounded-lg px-2 py-1"
              }
              onClick={() => {
                selectDuration("d");
              }}
            >
              <p className="circularMedium text-sm text-white">1d</p>
            </button>
            <Menu
              className="p-3"
              menuButton={
                <MenuButton>
                  <button className="ml-1 mt-2 flex flex-row items-start justify-center rounded-sm py-1">
                    <Image
                      src={chevron2}
                      width={10}
                      height={10}
                      alt="chevron down"
                    ></Image>
                  </button>
                </MenuButton>
              }
              transition
            >
              <div className="p-3">
                <p className="circularBold mb-2 text-sm text-white">
                  Most used
                </p>
                <div className="flex flex-row items-start justify-start">
                  <button
                    type="button"
                    className={
                      selectedDuration == "h"
                        ? "selectedDurationBtn flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("h");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1h</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "d"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("d");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1d</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "w"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("w");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1w</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "M"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("M");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1M</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "y"
                        ? " selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : " ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("y");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1Y</p>
                  </button>
                </div>

                <p className="circularBold mb-2 mt-2 text-sm text-white">All</p>
                <div className="my-1 flex flex-row items-start justify-start">
                  <button
                    type="button"
                    className={
                      selectedDuration == "s"
                        ? "selectedDurationBtn flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("s");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1s</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "m"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("m");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1m</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "5m"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("5m");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">5m</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "15m"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("15m");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">15m</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "30m"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("30m");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">30m</p>
                  </button>
                </div>
                <div className="mt-1 flex flex-row items-start justify-start">
                  <button
                    type="button"
                    className={
                      selectedDuration == "h"
                        ? "selectedDurationBtn flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("h");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1h</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "2h"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("2h");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">2h</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "6h"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("6h");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">6h</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "12h"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("12h");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">12h</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "d"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("d");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1d</p>
                  </button>
                </div>
                <div className="mt-1 flex flex-row items-start justify-start">
                  <button
                    type="button"
                    className={
                      selectedDuration == "2d"
                        ? "selectedDurationBtn flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("2d");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">2d</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "3d"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("3d");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">3d</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "w"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
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
                      selectedDuration == "M"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("M");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1M</p>
                  </button>
                  <button
                    type="button"
                    className={
                      selectedDuration == "y"
                        ? "selectedDurationBtn ml-1 flex w-16 flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1"
                        : "ml-1 flex w-16 flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1"
                    }
                    onClick={() => {
                      selectDuration("y");
                    }}
                  >
                    <p className="circularMedium text-sm text-white">1Y</p>
                  </button>
                </div>
              </div>
            </Menu>
          </div>
        </div>

        <div className="flex flex-row items-start justify-between pt-3">
          <BiCandles size={23} color="#AEAEAF" />
          <BsGear
            size={17}
            color="#AEAEAF"
            className="ml-4"
            style={{ marginTop: "3px" }}
          />
        </div>
      </div>
      <div className="h-100 mt-3 w-full rounded-xl py-6" style={{backgroundColor: "#2C2D33"}}></div>
      <div className="h-100 mt-2 w-full rounded-2xl border border-white opacity-10 py-52"></div>
    </div>
  );
};

export default ChartBox;
