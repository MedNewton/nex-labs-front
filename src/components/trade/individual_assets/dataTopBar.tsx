//Essentials
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DataTopBar: React.FC = () => {
  return (
    <div className="glassy flex h-fit w-full flex-row items-start justify-between rounded-2xl px-5 py-3">
      <div className="flex h-fit w-fit flex-col items-end justify-between px-1">
        <h5 className="circularBold text-base text-white">BAYC/USDC</h5>
        <p className="circularMedium text-sm text-white">
          NFT Floor price collection
        </p>
      </div>
      <div className="horSep h-12"></div>
      <div className="flex h-full w-10/12 flex-row items-start justify-around">
        <div className="mr-4 flex h-fit w-fit flex-col px-2">
          <h5 className="circularBold text-base text-white">Oracle price</h5>
          <p className="circularMedium text-sm text-white">78.84K</p>
        </div>
        <div className="mr-4 flex h-fit w-fit flex-col px-2">
          <h5 className="circularBold text-base text-white">Contract price</h5>
          <p className="circularMedium text-sm text-white">78.84K</p>
        </div>
        <div className="mr-4 flex h-fit w-fit flex-col px-2">
          <h5 className="circularBold text-base text-white">Funding rate</h5>
          <p className="circularMedium text-sm text-white">78.84K</p>
        </div>
        <div className="mr-4 flex h-fit w-fit flex-col px-2">
          <h5 className="circularBold text-base text-white">DayPctChange</h5>
          <p className="circularMedium text-sm text-white">2.37%</p>
        </div>
        <div className="mr-4 flex h-fit w-fit flex-col px-2">
          <h5 className="circularBold text-base text-white">Day High</h5>
          <p className="circularMedium text-sm text-white">78.84K</p>
        </div>
        <div className="mr-4 flex h-fit w-fit flex-col px-2">
          <h5 className="circularBold text-base text-white">Day Low</h5>
          <p className="circularMedium text-sm text-white">78.84K</p>
        </div>
        <div className="mr-4 flex h-fit w-fit flex-col px-2">
          <h5 className="circularBold text-base text-white">Swap Fee</h5>
          <p className="circularMedium text-sm text-white">78.84K</p>
        </div>
        
      </div>
    </div>
  );
};

export default DataTopBar;
