"use client";
import React from "react";
import Image from "next/image";

const InfoBar = () => {
  return (
    <div className="flex flex-row h-10 w-max">
      <div className="flex flex-col">
        <div className="font-bold font-[Open Sans]">Hello,Lekan</div>
        <div className="text-xs text-neutral-500 font-normal font-[Open Sans]">
          Have a nice day
        </div>
      </div>
      <div className="w-[900px]"></div>
      <Image
        src="mdi_bell-badge.svg"
        alt="Bell badge"
        width={20}
        height={20}
      ></Image>
      <div className="h-10 w-0.5 bg-neutral-300 ml-3 mr-3"></div>
      <Image
        src="Ellipse 132.svg"
        alt="Bell badge"
        width={50}
        height={50}
      ></Image>
      <div className="flex flex-col pl-1 pr-1">
        <div className="font-bold font-[Open Sans]">Lekan Okeowo</div>
        <div className="text-xs font-normal font-[Open Sans]">Admin</div>
      </div>
      <Image
        src="mdi_chevron-down.svg"
        alt="Bell badge"
        width={25}
        height={25}
      ></Image>
    </div>
  );
};

export default InfoBar;
