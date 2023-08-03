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
    <div className="flex h-full w-full flex-col items-center justify-between rounded-2xl px-3 py-4 pb-8">
      <Accordion className="h-full w-full">
        <AccordionItem
          initialEntered
          className="w-full"
          header={
            <div
              className="flex w-full items-center justify-between rounded-lg px-3 py-3"
              style={{ backgroundColor: "#2C2D33" }}
            >
              <p className="circularMedium text-base text-white">Collateral</p>
              <BiChevronDown size={20} color="#939395" />
            </div>
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>
        <AccordionItem
          header={
            <div
              className="flex w-full items-center justify-between rounded-lg px-3 py-3"
              style={{ backgroundColor: "#2C2D33" }}
            >
              <p className="circularMedium text-base text-white">Position</p>
              <BiChevronDown size={20} color="#939395" />
            </div>
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ActionBox;
