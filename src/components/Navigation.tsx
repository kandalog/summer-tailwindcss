"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const navigationContents = {
  title: "TRAVEL",
  navigation: [
    {
      href: "#features",
      label: "FEATURES",
    },
    {
      href: "#tour",
      label: "TOUR",
    },
    {
      href: "#feature",
      label: "VOICE",
    },
    {
      href: "#contact",
      label: "CONTACT",
    },
  ],
};

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* WEBメニュー */}
      <header className="container py-4 mx-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl tracking-wider relative top-1">
            {navigationContents.title}
          </h1>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              {navigationContents.navigation.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index === 3
                      ? "btnPink flex items-center space-x-2 !py-2 !px-5"
                      : ""
                  }`}
                >
                  <CiMail className={`${index === 3 ? "" : "hidden"}`} />
                  <Link href={item.href} className="tracking-wider">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* モバイル用 */}
          <div className="md:hidden relative top-3 cursor-pointer">
            <GiHamburgerMenu
              onClick={handleNavigation}
              className="ml-auto mr-4 text-2xl"
            />
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div className={`${isOpen ? "block" : "hidden"}  py-0 w-screen z-[999]`}>
        {/* マスク */}
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black/50"
          onClick={handleNavigation}
        >
          {/* メニュー */}
          <div
            className="w-1/2 bg-white h-screen fixed right-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button */}
            <div className="p-1 cursor-pointer">
              <IoIosClose
                className="text-4xl ml-auto"
                onClick={handleNavigation}
              />
            </div>
            <nav className="py-16">
              <ul>
                {navigationContents.navigation.map((item, index) => (
                  <li key={index} onClick={handleNavigation}>
                    <div
                      className={`${
                        index === 3
                          ? "btnPink justify-center flex items-center  space-x-2"
                          : ""
                      } text-center !py-2 !px-5 max-w-[180px] mx-auto`}
                    >
                      <CiMail className={`${index === 3 ? "" : "hidden"}`} />
                      <Link href={item.href}>{item.label}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
