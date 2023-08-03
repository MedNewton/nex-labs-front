/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//Essentials
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import HoverMenuWithTransition from "./popper";
import Switch from "react-switch";

// Assets
import headerLogo from "../../assets/images/logo/logo@1x1.png";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import search from "../../assets/icons/search.svg";
import lock_open from "../../assets/icons/lock_open.svg";
import lock_closed from "../../assets/icons/lock_closed.svg";
import layout from "../../assets/icons/layout.svg";

// Data sources
import headerMenu from "~/menus";

// State
import useTradeStore from "~/store/tradeStore";

//Assets
import { BsSearch, BsFillGrid1X2Fill, BsGrid } from "react-icons/bs";

const TradeHeader: React.FC = () => {
  const { lockTrade, isTradeLocked } = useTradeStore();

  return (
    <header className="left-0 z-50 flex w-full flex-row items-start justify-between px-2 pt-6">
      <div className="left-0 flex w-1/2 items-start justify-between">
        <div className="flex items-center">
          <div className="flex items-start justify-evenly pr-10">
            {headerMenu.map((item, index) => {
              console.log(item);
              return <HoverMenuWithTransition key={index} menuItem={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="right-0 flex w-1/2 justify-end px-10 align-middle">
        <BsSearch size={19} color="#CFCFCF" className="mr-7" style={{marginTop: "10px"}} />
        <Menu
          menuButton={
            <MenuButton>
              <BsGrid size={20} color="#CFCFCF" className="mr-7" />
            </MenuButton>
          }
          transition
          direction="bottom"
          align="end"
        >
          <div className="h-fit w-64 p-3">
            <div className="flex flex-row items-center justify-between">
              <Switch
                onChange={() => {
                  lockTrade(!isTradeLocked);
                }}
                checked={!isTradeLocked}
                height={15}
                width={35}
                handleDiameter={10}
              />
              <p className="circularMedium ml-5 mr-2 text-sm text-white">
                Lock layout
              </p>
            </div>
            <hr className="mb-3 mt-3" />
            <p className="circularMedium text-sm text-white">Preset layouts</p>
          </div>
        </Menu>
        <div className="h-10 w-10 rounded-full bg-[url('https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=')] bg-cover bg-center bg-no-repeat "></div>
        <Image
          src={sun}
          alt="sun"
          width={23}
          height={23}
          className="ml-5"
          hidden
        />
      </div>
    </header>
  );
};

export default TradeHeader;
