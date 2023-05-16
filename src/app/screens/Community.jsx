import React from "react";
import Image from "next/image";
import bg from "../assets/img/bg/bg_community.gif";
export default function Community() {
  return (
    <section
      id="community"
      className="relative flex flex-col h-screen pt-16 lg:pt-0 md:justify-center items-center px-10 m-0 "
    >
      <Image
        src={bg}
        alt="Backgroun"
        layout="fill"
        objectFit="cover"
        className="w-screen h-sceen"
      />
      <p>123</p>
    </section>
  );
}
