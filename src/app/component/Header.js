"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineClear } from "react-icons/md";
const navitions = [
  ["ABOUT", "#about"],
  ["SCHEDULE", "#schedule"],
  ["SPEAKERS", "#speackers"],
  ["PARTNERS", "#partners"],
  ["STORE", "#store"],
  ["WORKSHOPS", "#workshops"],
  ["CONTACTS", "#contacts"],
];
export default function Header() {
  const [toggleMore, setToggleMore] = useState(true);
  function toggle() {
    setToggleMore(!toggleMore);
  }
  return (
    <>
      <div className="w-full flex flex-row justify-between px-7 py-2 items-center z-20 bg-black">
        <Logo />

        <nav className="hidden lg:flex sm:justify-center space-x-4 z-[10] bg-black">
          {navitions.map(([title, url]) => (
            <a
              href={url}
              className="rounded-lg px-2 py-1 text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900"
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
            <div className="flex cursor-pointer border-2 rounded-full justify-center items-center border-white">
              <CgDetailsMore color="white" className="w-7 h-7 m-2" />
            </div>
          ) : (
            <div className="flex cursor-pointer border-2 rounded-full justify-center items-center border-white">
              <MdOutlineClear color="white" className="w-7 h-7 m-2" />
            </div>
          )}
        </div>
      </div>

      {!toggleMore && (
        <nav className="fixed w-screen h-screen flex flex-col lg:hidden  justify-around">
          {navitions.map(([title, url]) => (
            <a
              onClick={() => toggle()}
              href={url}
              className="w-full h-auto text-center py-2 hover:bg-slate-400"
            >
              {title}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
