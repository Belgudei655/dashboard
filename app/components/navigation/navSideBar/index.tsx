"use client";
import React from "react";
import Logo from "./Logo";
import NavigationButton from "./NavigationButton";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div style={{ width: "13vw" }} className=" h-screen bg-white">
        <div style={{ height: "62vh" }} className="flex flex-col pl-5 pt-9">
          <Logo></Logo>
          <div className="mb-5"></div>
          <NavigationButton
            iconBaseName="dashboard"
            route="/"
            label="Dashboard"
          />
          <NavigationButton iconBaseName="users" route="/users" label="Users" />
          <NavigationButton
            iconBaseName="documents"
            route="/documents"
            label="Documents"
          />
          <NavigationButton
            iconBaseName="photos"
            route="/photos"
            label="Photos"
          />
          <NavigationButton
            iconBaseName="hierarchy"
            route="/hierarchy"
            label="Hierarchy"
          />
          <div className="mb-5"></div>
          <NavigationButton
            iconBaseName="message"
            route="/message"
            label="Message"
          />
          <NavigationButton iconBaseName="help" route="/help" label="Help" />
          <NavigationButton
            iconBaseName="setting"
            route="/settings"
            label="Setting"
          />
        </div>
        <div style={{ height: "38vh" }} className=""></div>
      </div>
    </>
  );
};

export default Navbar;
