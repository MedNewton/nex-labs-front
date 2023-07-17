import Head from "next/head";
import Link from "next/link";

// Components
import Header from "~/components/header/header";
import DashboardIndices from "~/components/dashboard/Indices";
import DashboardIndividualAssets from "~/components/dashboard/individuals";
import ExploreAssets from "~/components/dashboard/exploreAssets";
import PredictionMarkets from "~/components/dashboard/predictionMarkets";

export default function Home() {
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
      <main className="gradientBackground lightBackground flex flex-col items-center justify-center">
        <Header />
        <DashboardIndices />
        <DashboardIndividualAssets />
        <ExploreAssets />
        <PredictionMarkets />
      </main>
    </>
  );
}
