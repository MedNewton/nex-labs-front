//Essentials
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const AssetGlassBox: React.FC<{title: string, image: string}> = ({title, image}) => {
    console.log("title :" + title);
    return(
        <div className="glassy w-fit h-fit mx-3 py-4 px-24 rounded-xl flex flex-col items-center">
            <Image src={image} width={200} height={200} alt={title} className="mb-3"></Image>
            <h5 className="circularMedium text-2xl text-center text-white mb-4">{title}</h5>
            <div className="flex items-center justify-center border-solid border-emerald-300 border rounded-xl py-1 px-5">
                <h5 className="circularBold text-xl text-center text-white">View</h5>
            </div>
        </div>
    )
}

export default AssetGlassBox;
