/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//Essentials
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Assets
import headerLogo from "../../../assets/images/logo/logo@1x1.png";
import individual_assets_icon from "../../../assets/icons/individual_assets.svg";
import indices_icon from "../../../assets/icons/indices.svg";
import prediction_markets_icon from "../../../assets/icons/prediction_markets.svg";
import settings_icon from "../../../assets/icons/settings.svg";

import { BsDatabase, BsBarChartSteps, BsActivity, BsGear } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";

const SideBar: React.FC = () => {
  return (
    <div
      className="flex h-full w-fit flex-col items-start justify-normal px-3 pt-5"
      id="sideBar"
    >
      <Image
        src={headerLogo}
        height={37}
        width={37}
        alt="logo"
        className="mb-14"
      ></Image>
      <div className="selectedSidebarElement mb-8">
        <BsDatabase size={20} color="#F7F7F7"/>
      </div>
      <div className="sidebarElement mb-8">
        <BsBarChartSteps size={20} color="#939395" />
      </div>
      <div className="sidebarElement mb-8">
        <BsActivity size={25} color="#939395" />
      </div>
      <div className="sidebarElement mb-8">
        <BsGear size={22} color="#939395" />
      </div>
    </div>
  );
};

export default SideBar;
