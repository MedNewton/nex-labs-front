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

const ChartBox: React.FC = () => {
  const { isDrawerOpen, toggleDrawer, selectedDuration, selectDuration } =
    useTradeStore();

  return (
    <div className="glassy flex h-full w-full flex-col items-start justify-between rounded-2xl p-3">
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
        </div>

        <div className="flex flex-row items-start justify-between pt-3">
          <Image
            src={setting_icon}
            height={15}
            width={15}
            alt="settings"
          ></Image>
        </div>
      </div>
      <div className="flex h-fit w-full flex-row items-start justify-between py-1">
        <div className=" ml-2 flex hidden flex-row items-start justify-start rounded-xl border border-solid border-white">
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
              <p className="circularBold mb-2 text-sm text-white">Most used</p>
              <div className="flex flex-row items-start justify-start">
                <button
                  type="button"
                  className={
                    selectedDuration == "h"
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? " ml-1 selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : " ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
                  }
                  onClick={() => {
                    selectDuration("y");
                  }}
                >
                  <p className="circularMedium text-sm text-white">1Y</p>
                </button>
              </div>
              
              <p className="mt-2 circularBold mb-2 text-sm text-white">All</p>
              <div className="flex flex-row items-start justify-start my-1">
                <button
                  type="button"
                  className={
                    selectedDuration == "s"
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "ml-1 selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
                  }
                  onClick={() => {
                    selectDuration("30m");
                  }}
                >
                  <p className="circularMedium text-sm text-white">30m</p>
                </button>
              </div>
              <div className="flex flex-row items-start justify-start mt-1">
                <button
                  type="button"
                  className={
                    selectedDuration == "h"
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "ml-1 selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "ml-1 selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
                  }
                  onClick={() => {
                    selectDuration("d");
                  }}
                >
                  <p className="circularMedium text-sm text-white">1d</p>
                </button>
              </div>
              <div className="flex flex-row items-start justify-start mt-1">
                <button
                  type="button"
                  className={
                    selectedDuration == "2d"
                      ? "selectedDurationBtn flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
                      ? "selectedDurationBtn ml-1 flex flex-row items-center justify-center rounded-lg border border-solid border-white px-4 py-1 w-16"
                      : "ml-1 flex flex-row items-center justify-center rounded-lg bg-gray-500 px-4 py-1 w-16"
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
      <div className="h-100 mt-2 w-full rounded-2xl bg-gray-400 py-52"></div>
    </div>
  );
};

export default ChartBox;
