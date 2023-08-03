import Head from "next/head";
// drawer
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
// grid layout
import GridLayout, {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
// State
import useTradeStore from "~/store/tradeStore";

// Components
import TradeHeader from "~/components/header/tradeHeader";
import MobileTradeHeader from "~/components/header/moileTradeHeader";
import SideBar from "~/components/trade/individual_assets/sidebar";
import DataTopBar from "~/components/trade/individual_assets/dataTopBar";
import ChartBox from "~/components/trade/individual_assets/chartBox";
import ActionBox from "~/components/trade/individual_assets/actionBox";
import DrawerContent from "~/components/trade/individual_assets/DrawerContent";

const ReactGridLayout = WidthProvider(GridLayout);

export default function IndividaulAssetsPerpetuals() {
  const { isDrawerOpen, toggleDrawer, chartWidth, isTradeLocked } =
    useTradeStore();

  const openSideBar = () => {
    console.log("hahaha");
  };

  const layout = [
    {
      i: "chartBox",
      x: 0,
      y: 0,
      w: chartWidth,
      h: 6.5,
      minW: 9,
      maxW: 12,
      maxH: 6.5,
      minH: 6.5,
      isBounded: true,
    },
    {
      i: "collateralBox",
      x: 9,
      y: 0,
      w: 3,
      h: 6.5,
      maxH: 6.5,
      minH: 6.5,
      isResizable: false,
      isBounded: true,
    },
    {
      i: "orderBook",
      x: 0,
      y: 0,
      w: 9,
      h: 4,
      minH: 4,
      maxH: 4,
      minW: 9,
      maxW: 12,
      isBounded: true,
    },
    {
      i: "newsBox",
      x: 9,
      y: 0,
      w: 3,
      h: 4,
      isResizable: false,
      isBounded: true,
    },
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
      <main className="gradientBackground darkBackground z-50 flex h-screen flex-col items-center justify-start overflow-hidden">
        <section className="flex h-screen w-full flex-row items-start justify-between">
          <SideBar />
          <div className="flex h-screen w-full flex-col items-center justify-start overflow-y-scroll pb-40">
            <TradeHeader />
            <MobileTradeHeader />
            <div className="hidden lg:flex xl:flex 2xl:flex h-fit w-full flex-row items-start justify-start pl-7 pr-11 pt-4">
              <DataTopBar />
            </div>
            {
              <div className="hidden lg:flex xl:flex 2xl:flex mt-5 h-screen w-full pl-5 pr-8" id="tradeContainer">
                <ReactGridLayout
                  className="tradeGrid"
                  layout={layout}
                  cols={12}
                  rowHeight={75}
                  isBounded={true}
                  isResizable={isTradeLocked}
                  isDraggable={isTradeLocked}
                >
                  <div className="h-fit" key="chartBox">
                    <ChartBox />
                  </div>
                  <div className="h-fit" key="collateralBox">
                    <ActionBox />
                  </div>
                  <div className="rounded-xl p-3" style={{backgroundColor: "#1C2732"}} key="orderBook">
                    <p className="circularMedium text-sm text-darkModeTextWhite">
                      Order Book
                    </p>
                  </div>
                  <div className="rounded-xl p-3" style={{backgroundColor: "#1C2732"}} key="newsBox">
                    <p className="circularMedium text-sm text-darkModeTextWhite">News</p>
                  </div>
                </ReactGridLayout>
              </div>
            }
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
