import React from "react";
import Image from "next/image";
import bg from "../assets/img/bg/bg_community.gif";
import imore from "../assets/img/icon1.png";
import gifpeople from "../assets/img/all/gifpeople.gif";
export default function Community() {
  return (
    <section
      id="community"
      className="relative flex flex-col h-screen pt-16 lg:pt-0 md:justify-center items-center px-10 m-0"
    >
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="w-screen h-sceen"
      />
      <div className="z-10 w-screen h-screen flex flex-col lg:flex-row px-1/3">
        <div className="flex flex-col lg:w-1/2 md:w-full md:h-1/2 lg:h-full   justify-center px-10">
          <div className=" text-6xl font-bold text-white">AWS</div>
          <div className=" text-5xl font-bold" style={{color:'#ff9800'}}>COMMUNITY</div>
          <div className=" text-5xl font-bold text-white">DAY UB 2023</div>
          <Image
            src={imore}
            alt="icons"
            width={100}
          />
          <div className="pt-5 text-white text-center font-medium">
          AWS Community Day events are conferences led by the community, where community leaders take charge of planning, sourcing, and delivering event logistics and content. In the case of AWS Community Day Mongolia, it is organized by the non-profit organization Cloud and Serverless Mongolia community.
          </div>
        </div>
        <div className="flex lg:w-1/2 md:w-full md:h-1/2 lg:h-full  text-white justify-center items-center">
          <Image
            src={gifpeople}
            alt="gifpeople"
            className="w-50 h-50 rounded-full"
          
          />
        </div>
      </div>
    </section>
  );
}
