import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
const UserCrud = () => {
  return (
    <div>
      <div className="flex flex-col w-max mt-5">
        <div className="font-arial text-blue-500 font-bold rounded-sm text-xl w-max mb-3">
          Users Dashboard
        </div>
        <div className="flex flex-row">
          <SearchBar></SearchBar>
          <div className="width-[10px]"></div>
          <button className="bg-blue-500 font-arial text-white rounded-sm text-sm w-max px-4">
            Add user +
          </button>
          <button className="flex flex-row items-center font-[Open Sans] font-semibold ml-7">
            Sort by
            <div className="ml-1"></div>
            <Image
              src="chevron-down.svg"
              alt="down"
              width={5}
              height={5}
              className="w-2 h-2 pb-1"
            ></Image>
          </button>
          <button className="flex flex-row items-center font-[Open Sans] font-semibold ml-5">
            Saved search
            <div className="ml-1"></div>
            <Image
              src="chevron-down.svg"
              alt="down"
              width={5}
              height={5}
              className="w-2 h-2 pb-1"
            ></Image>
          </button>
          <button className="ml-5">
            <Image
              src="Frame.svg"
              alt="tgl"
              width={6}
              height={6}
              className="w-6 h-6 pb-1"
            ></Image>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCrud;
