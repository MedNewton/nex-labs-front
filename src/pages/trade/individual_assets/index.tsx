import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

// State
import useTradeStore from "~/store/tradeStore";


// Components
import Header from "~/components/header/header";
import SideBar from "~/components/trade/individual_assets/sidebar";
import DataTopBar from "~/components/trade/individual_assets/dataTopBar";
import ChartBox from "~/components/trade/individual_assets/chartBox";
import ActionBox from "~/components/trade/individual_assets/actionBox";
import DrawerContent from "~/components/trade/individual_assets/DrawerContent";


export default function IndividaulAssetsPerpetuals() {

  const {isDrawerOpen, toggleDrawer} = useTradeStore();

  const openSideBar = () => {
    console.log("hahaha");
  };
  return (
    <>
      <Head>
        <title>Nex Labs - The NEXT generation of investments</title>
        <meta
          name="description"
          content="NexLabs is a decentralized exchange that gives investors access to various digital assets, including cryptocurrencies, non-fungible tokens (NFTs), synthetic assets, and prediction markets, through indices powered by in-house built oracles. This allows investors to diversify their portfolios and reduce exposure to market volatility without needing to track market developments constantly."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="gradientBackground lightBackground z-50 flex h-fit flex-col items-center justify-center">
        <Header />
        <section className="mb-10 flex h-fit w-full flex-row items-start justify-between px-5 pt-20">
          <SideBar />
          <div className="ml-14 mr-6 h-fit w-full">
            <DataTopBar />
            <div className="mt-5 flex h-fit w-full flex-row items-start justify-between">
              <ChartBox />
              <ActionBox />
            </div>
          </div>
        </section>
      </main>
      <Drawer
        open={isDrawerOpen}
        onClose={() => toggleDrawer()}
        direction="left"
        duration={200}
        overlayOpacity={0.3}
        className="tradingDrawer"
      >
        
        <DrawerContent />
      </Drawer>
    </>
  );
}
