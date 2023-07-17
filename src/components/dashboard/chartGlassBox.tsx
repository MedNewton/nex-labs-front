// Essentials
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Components
import DashboardDataPills from "./dataPills";

const DashboardChartGlassBox: React.FC = () => {
    return(
        <div className="glassy w-1/3 h-96 mr-10 rounded-xl p-3">
            <h5 className="circularMedium text-base text-white mb-2 ">All Weather Alpha</h5>
            {/* Chart reserved space*/}
            <div className="w-6/6 h-4/6 bg-white mb-5 rounded-xl"></div>
            <h5 className="circularMedium text-base text-white mb-2">Last 24h</h5>
            <DashboardDataPills />
        </div>
    )
}

export default DashboardChartGlassBox;