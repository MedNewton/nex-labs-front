//Essentials
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Components
import AssetGlassBox from "./assetsGlassBox";

// Assets
import nav_arrow_left from "../../assets/icons/nav_arrow_left.svg";
import nav_arrow_right from "../../assets/icons/nav_arrow_right.svg";
import cryptos from "../../assets/images/randoms/cryptos.svg";
import stocks from "../../assets/images/randoms/stocks.svg";
import comodities from "../../assets/images/randoms/comodities.svg";

const ExploreAssets: React.FC = () => {
  return (
    <section className="bg-red mb-10 mt-10 w-screen pl-32 pr-40">
      <div className="mb-5 flex h-fit w-full items-center justify-between">
        <h5 className="circularBold text-4xl text-white">Explore Assets</h5>
        <div className="flex h-fit items-center justify-between">
          <div className="glassy mx-1 flex h-10 w-10 items-center justify-center rounded-full p-3">
            <Image
              src={nav_arrow_left}
              height={20}
              width={20}
              alt="arrow left"
            ></Image>
          </div>
          <div className="glassy mx-1 flex h-10 w-10 items-center justify-center rounded-full p-3">
            <Image
              src={nav_arrow_right}
              height={20}
              width={20}
              alt="arrow left"
            ></Image>
          </div>
        </div>
      </div>
      <Splide 
      aria-label="My Favorite Images"
      options={{
        perPage: 3,
        pagination: false,
        arrows: false,
        drag: true,
        
      }}
      >
        <SplideSlide>
          <AssetGlassBox
            title="Cryptocurrencies"
            image={cryptos}
          ></AssetGlassBox>
        </SplideSlide>
        <SplideSlide>
          <AssetGlassBox
            title="Stocks"
            image={stocks}
          ></AssetGlassBox>
        </SplideSlide>
        <SplideSlide>
          <AssetGlassBox
            title="Comodities"
            image={comodities}
          ></AssetGlassBox>
        </SplideSlide>
        <SplideSlide>
          <AssetGlassBox
            title="Cryptocurrencies"
            image={cryptos}
          ></AssetGlassBox>
        </SplideSlide>
        <SplideSlide>
          <AssetGlassBox
            title="Stocks"
            image={stocks}
          ></AssetGlassBox>
        </SplideSlide>
        <SplideSlide>
          <AssetGlassBox
            title="Comodities"
            image={comodities}
          ></AssetGlassBox>
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default ExploreAssets;
