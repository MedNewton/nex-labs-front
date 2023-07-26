/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//Essentials
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Assets
import individual_assets_icon from '../../../assets/icons/individual_assets.svg';
import indices_icon from '../../../assets/icons/indices.svg';
import prediction_markets_icon from '../../../assets/icons/prediction_markets.svg';
import settings_icon from '../../../assets/icons/settings.svg';



const SideBar: React.FC = () => {
    return(
        <div className="w-fit h-screen flex flex-col items-start justify-normal px-3 pt-5 glassy rounded-xl" id="sideBar">
            <Image src={individual_assets_icon} height={23} width={23} alt="individual assets icon" className="mb-7"></Image>
            <Image src={indices_icon} height={23} width={23} alt="individual assets icon" className="mb-7"></Image>
            <Image src={prediction_markets_icon} height={23} width={23} alt="individual assets icon" className="mb-7"></Image>
            <Image src={settings_icon} height={23} width={23} alt="individual assets icon" className="mb-7"></Image>
        </div>
    )
}

export default SideBar;