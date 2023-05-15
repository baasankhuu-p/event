"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineClear } from "react-icons/md";
const navitions = [
  ["About", "#about"],
  ["Schedule", "#schedule"],
  ["Speakers", "#speackers"],
  ["Sponsors", "#partners"],
  ["Contacts", "#contacts"],
];
export default function Header() {
  const [toggleMore, setToggleMore] = useState(true);
  function toggle() {
    setToggleMore(!toggleMore);
  }
  return (
    <div>
      <div className=" fixed top-0 z-10 w-full flex flex-row justify-between px-7 py-2 items-center  ">
        <Logo />

        <nav
          className="hidden lg:flex sm:justify-center space-x-4 z-[10] px-4 py-2 rounded-full"
          style={{ backgroundColor: "#0F2437" }}
        >
          {navitions.map(([title, url], index) => (
            <a
              key={index}
              href={url}
              className="rounded-lg px-4 py-0.5 text-white font-medium hover:bg-slate-100 hover:text-black"
            >
              {title}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex rounded-full py-2">
          <a
            href="#register"
            className="rounded-lg px-2 py-1 text-white font-medium hover:text-slate-300 mx-4"
          >
            Register
          </a>
        </div>

        {/* mobile nav */}
        <div className="flex flex-col lg:hidden" onClick={() => toggle()}>
          {toggleMore ? (
            <div
              className="flex cursor-pointer border-2 rounded-full justify-center items-center "
              style={{ borderColor: "#0F2437" }}
            >
              <CgDetailsMore color="0F2437" className="w-7 h-7 m-2" />
            </div>
          ) : (
            <div
              className="flex cursor-pointer border-2 rounded-full justify-center items-center "
              style={{ borderColor: "white" }}
            >
              <MdOutlineClear color="white" className="w-7 h-7 m-2" />
            </div>
          )}
        </div>
      </div>
      {!toggleMore && (
        <div className="lg:hidden w-full fixed pt-16 h-full bg-white popup-content nav-popup-content">
          <nav className="lg:hidden w-screen h-3/5 flex flex-col justify-around">
            {navitions.map(([title, url], index) => (
              <a
                key={index}
                onClick={() => toggle()}
                href={url}
                className="w-full m-0 text-center py-2 hover:bg-slate-400 text-white font-medium"
              >
                {title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
