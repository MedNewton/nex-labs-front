/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//Essentials
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ControlledMenu,
  MenuItem,
  useHover,
  useMenuState,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import HoverMenuWithTransition from "./popper";

// Assets
import headerLogo from "../../assets/images/logo/logo@1x1.png";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import search from "../../assets/icons/search.svg";

// Data sources
import headerMenu from "~/menus";

const Header: React.FC = () => {
  
  

  return (
    <header className="left-0 w-screen px-10 py-4 z-50">
      <div className="fixed left-0 flex w-5/12 items-start justify-between pl-2 pr-5">
        <div className="flex items-center">
          <Image src={headerLogo} alt="Logo" width={35} height={35} />
          <div className="flex items-start justify-evenly px-10">
            {
              headerMenu.map((item, index)=>{
                console.log(item);
                return(
                  <HoverMenuWithTransition key={index} menuItem={item} />
                )
              })
            }
            
          </div>
        </div>
      </div>
      <div className="fixed right-0 flex w-1/3 justify-end px-10 align-middle">
        <Image
          src={search}
          alt="search"
          width={19}
          height={19}
          className="mr-7"
        />
        <div className="h-10 w-10 rounded-full bg-[url('https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=')] bg-cover bg-center bg-no-repeat "></div>
        <Image src={sun} alt="sun" width={23} height={23} className="ml-5" />
      </div>
    </header>
  );
};

export default Header;
