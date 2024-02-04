// components/SearchBar.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

const SearchBar: React.FC = () => {
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <div className={`relative flex items-center`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className={`border p-2 pl-10 placeholder-black rounded-l focus:outline-none w-[830px]`}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          style={{
            color: isInputFocused ? "#333" : "#999",
          }}
        />
        {isInputFocused || (
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <Image src="/Group.svg" alt="Search Icon" width={13} height={13} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
