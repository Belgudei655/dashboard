import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex flex-row">
      <div className="text-neutral-500 text-xs">Items per page:</div>
      <div className="flex flex-col ml-5">
        <div className="flex flex-row">
          <div className="text-neutral-500 text-xs mr-3">6</div>
          <Image src="/polygon.svg" alt="lilTria" width={5} height={5}></Image>
        </div>

        <div className="w-100% h-[1px] bg-neutral-500"></div>
      </div>
      <div className="text-neutral-500 text-xs ml-6">1-4 of 10</div>
      <Image
        src="/icons/inactive_left_arrow.svg"
        alt="leftArrow"
        width={10}
        height={10}
        className="ml-14"
      ></Image>
      <Image
        src="/icons/active_right_arrow.svg"
        alt="leftArrow"
        width={10}
        height={10}
        className="ml-7"
      ></Image>
    </div>
  );
};

export default Footer;
