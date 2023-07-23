import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
// drawer
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
// grid layout
import GridLayout, { Responsive as ResponsiveGridLayout, WidthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
// State
import useTradeStore from "~/store/tradeStore";

// Components
import Header from "~/components/header/header";
import SideBar from "~/components/trade/individual_assets/sidebar";
import DataTopBar from "~/components/trade/individual_assets/dataTopBar";
import ChartBox from "~/components/trade/individual_assets/chartBox";
import ActionBox from "~/components/trade/individual_assets/actionBox";
import DrawerContent from "~/components/trade/individual_assets/DrawerContent";

const ReactGridLayout = WidthProvider(GridLayout);

export default function IndividaulAssetsPerpetuals() {
  const { isDrawerOpen, toggleDrawer } = useTradeStore();

  const openSideBar = () => {
    console.log("hahaha");
  };

  const layout = [
    { i: "chartBox", x: 0, y: 0, w: 4, h: 6.5, minW: 4, maxW:6, maxH: 6.5, minH: 6.5, isBounded: true},
    { i: "collateralBox", x: 4, y: 0, w: 2, h: 6.5, maxH: 6.5, minH: 6.5, isResizable: false, isBounded: true },
    { i: "orderBook", x: 0, y: 0, w: 4, h: 4, minH: 4, maxH: 4, minW: 4, maxW:6, isBounded: true },
    { i: "newsBox", x: 4, y: 0, w: 2, h: 4, isResizable: false, isBounded: true },
  ];

  const phoneLayout = [
    { i: "a", x: 0, y: 0, w: 4, h: 6, minW: 4, maxW:6, maxH: 6 },
    { i: "b", x: 4, y: 0, w: 2, h: 6 },
    { i: "c", x: 0, y: 0, w: 1, h: 2 },
  ];

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
        <section className="mb-10 flex h-fit w-full flex-row items-start justify-between pl-2 pr-5 pt-5">
          <SideBar />
          <div className="ml-10 mr-6 h-fit w-full">
            <DataTopBar />
            <div
              className="mt-5 flex h-fit w-full flex-row items-start justify-between px-3"
              id="tradeContainer"
            >
              <ReactGridLayout
                className="tradeGrid"
                layout={layout}
                cols={6}
                rowHeight={75}
                isBounded={true}
                compactType={"vertical"}
              >
                <div className="h-fit" key="chartBox"><ChartBox /></div>
                <div className="h-fit" key="collateralBox"><ActionBox /></div>
                <div className="glassy rounded-xl p-2" key="orderBook"><p className="circularMedium text-sm text-white">Order Book</p></div>
                <div className="glassy rounded-xl p-2" key="newsBox"><p className="circularMedium text-sm text-white">News</p></div>
              </ReactGridLayout>
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
