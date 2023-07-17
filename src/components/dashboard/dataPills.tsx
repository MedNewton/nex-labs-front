// Essentials
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Assets
import usdtIcon from '../../assets/icons/usdt.svg'
import usdcIcon from '../../assets/icons/usdc.svg'
import bitcoinIcon from '../../assets/icons/bitcoin.svg'
import maticIcon from '../../assets/icons/matic.svg'
import dogecoinIcon from '../../assets/icons/dogecoins.svg'

const DashboardDataPills: React.FC = () => {
    return (
        <div className="flex w-full mb-1 h-fit items-center justify-start">
            <div className="flex w-fit h-fit mr-2 py-1 px-1 items-center justify-between rounded-2xl border-solid border-2 border-emerald-300">
                <Image src={usdtIcon} width={17} height={17} alt="usdt icon"></Image>
                <p className="circularMedium ml-1 text-sm text-white">5%</p>
            </div>
            <div className="flex w-fit h-fit mr-2 py-1 px-1 items-center justify-between rounded-2xl border-solid border-2 border-emerald-300">
                <Image src={bitcoinIcon} width={17} height={17} alt="usdt icon"></Image>
                <p className="circularMedium ml-1 text-sm text-white">5%</p>
            </div>
            <div className="flex w-fit h-fit mr-2 py-1 px-1 items-center justify-between rounded-2xl border-solid border-2 border-emerald-300">
                <Image src={usdcIcon} width={17} height={17} alt="usdt icon"></Image>
                <p className="circularMedium ml-1 text-sm text-white">5%</p>
            </div>
            <div className="flex w-fit h-fit mr-2 py-1 px-1 items-center justify-between rounded-2xl border-solid border-2 border-emerald-300">
                <Image src={maticIcon} width={17} height={17} alt="usdt icon"></Image>
                <p className="circularMedium ml-1 text-sm text-white">5%</p>
            </div>
            <div className="flex w-fit h-fit mr-2 py-1 px-1 items-center justify-between rounded-2xl border-solid border-2 border-emerald-300">
                <Image src={dogecoinIcon} width={17} height={17} alt="usdt icon"></Image>
                <p className="circularMedium ml-1 text-sm text-white">5%</p>
            </div>
        </div>
    )
}

export default DashboardDataPills;