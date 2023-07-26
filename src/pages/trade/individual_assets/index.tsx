import Head from "next/head";
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
  const { isDrawerOpen, toggleDrawer, chartWidth, isTradeLocked } = useTradeStore();

  const openSideBar = () => {
    console.log("hahaha");
  };

  const layout = [
    { i: "chartBox", x: 0, y: 0, w: chartWidth, h: 6.5, minW: 4, maxW:6, maxH: 6.5, minH: 6.5, isBounded: true},
    { i: "collateralBox", x: 4, y: 0, w: 2, h: 6.5, maxH: 6.5, minH: 6.5, isResizable: false, isBounded: true },
    { i: "orderBook", x: 0, y: 0, w: 4, h: 4, minH: 4, maxH: 4, minW: 4, maxW:6, isBounded: true },
    { i: "newsBox", x: 4, y: 0, w: 2, h: 4, isResizable: false, isBounded: true },
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
      <main className="gradientBackground darkBackground z-50 flex h-screen flex-col items-center justify-start overflow-auto">
        <Header />
        <section className="mb-10 flex h-fit w-full flex-row items-start justify-between pl-3 pr-5 pt-5">
          <SideBar />
          <div className="ml-10 mr-6 h-fit w-full">
            <DataTopBar />
            <div
              className="mt-5 h-screen w-full"
              id="tradeContainer"
            >
              <ReactGridLayout
                className="tradeGrid"
                layout={layout}
                cols={6}
                rowHeight={75}
                isBounded={true}
                isResizable={isTradeLocked}
                isDraggable={isTradeLocked}
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
