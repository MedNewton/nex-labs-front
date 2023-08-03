/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//Essentials
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import HoverMenuWithTransition from "./popper";
import { Menu, SubMenu, Item } from "burger-menu";
import "burger-menu/lib/index.css";

// Assets
import headerLogo from "../../assets/images/logo/logo@1x1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import {IoMdClose} from 'react-icons/io';

// Data sources
import headerMenu from "~/menus";

// State
import useTradeStore from "~/store/tradeStore";

//Assets
import { BsSearch } from "react-icons/bs";

const MobileTradeHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 flex w-full flex-row items-start justify-between pt-3 lg:hidden xl:hidden 2xl:hidden">
      <div className="left-0 flex w-1/2 items-start justify-between">
        <Image
          src={headerLogo}
          alt="nex logo"
          width={30}
          height={30}
          className="ml-5"
        />
        <div className="flex items-center">
          <div className="hidden items-start justify-evenly pr-10">
            {headerMenu.map((item, index) => {
              return <HoverMenuWithTransition key={index} menuItem={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex h-fit w-fit items-center justify-between pr-5">
        <BsSearch size={16} color="#CFCFCF" className="mr-4" />
        <div className="h-8 w-8 rounded-full bg-[url('https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=')] bg-cover bg-center bg-no-repeat "></div>
        <RxHamburgerMenu
          size={20}
          color="#CFCFCF"
          className="ml-4"
          onClick={() => {
            setMobileMenuOpen(true);
          }}
        />
      </div>
      <Menu
        className="burger-menu"
        isOpen={mobileMenuOpen}
        selectedKey={"entry"}
        onClose={() => setMobileMenuOpen(false)}
        animate="slide"
        customCrossIcon={ <IoMdClose size={25} color="#DBDBDB"></IoMdClose> }
      >
        {headerMenu.map((item, index) => {
          if(item.namesub.length == 0){
            return (
              <Item key={index} itemKey={item.name} text={item.name} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}></Item>
            );
          }else{
            return (
              <SubMenu level={1} key={index} title={item.name}>
                {
                  item.namesub.map((submenuItem, subIndex)=>{
                    return(
                      <Item key={subIndex} itemKey={submenuItem.sub} text={submenuItem.sub} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}></Item>
                    )
                  })
                }
              </SubMenu>
            );
          }
        })}
      </Menu>
    </header>
  );
};

export default MobileTradeHeader;
