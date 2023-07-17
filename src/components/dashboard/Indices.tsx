//Essentials
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Components
import DashboardChartGlassBox from "./chartGlassBox";

// Assets
import top_gainer from "../../assets/icons/top_gainer.svg";
import top_looser from "../../assets/icons/top_looser.svg";

const DashboardIndices: React.FC = () => {
  return (
    <section className="mt-28 mb-10 w-screen px-32">
      {/* Section title */}
      <h5 className="circularBold text-4xl text-white">Indices</h5>

      {/* Section subtitle */}
      <div className="mt-5 flex items-center justify-start">
        <Image
          src={top_gainer}
          width={10}
          height={10}
          alt="top gainer icon"
        ></Image>
        <h5 className="circularMedium ml-2 text-base text-white">Top Gainer</h5>
      </div>

      {/* Charts row */}
      <div className="mt-7 flex h-fit w-full items-center justify-start">
        <DashboardChartGlassBox />
        <DashboardChartGlassBox />
        <DashboardChartGlassBox />
      </div>

      {/* Section subtitle */}
      <div className="mt-5 flex items-center justify-start">
        <Image
          src={top_looser}
          width={10}
          height={10}
          alt="top gainer icon"
        ></Image>
        <h5 className="circularMedium ml-2 text-base text-white">Top Looser</h5>
      </div>

      {/* Charts row */}
      <div className="mt-7 flex h-fit w-full items-center justify-start">
        <DashboardChartGlassBox />
        <DashboardChartGlassBox />
        <DashboardChartGlassBox />
      </div>
    </section>
  );
};

export default DashboardIndices;
