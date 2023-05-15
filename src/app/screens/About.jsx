import React from "react";
import Image from "next/image";
import bg from "../assets/img/bg/bg_about.gif";
import aws from "../assets/img/all/aws.png";
export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col h-screen pt-16 lg:pt-0 md:justify-center items-center px-10 m-0"
    >
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="w-screen h-sceen"
      />
      <div className="z-10 flex flex-col items-center">
        <Image src={aws} width={140} height={140} alt="AWS" />
        <div className="text-white font-medium text-3xl lg:text-5xl text-center">
          COMMUNITY DAY
        </div>
      </div>
      <div className="text-white z-10 flex flex-col lg:flex-row justify-between px-4">
        <div style={{ flex: 1 }}>
          <div className="text-white font-medium text-sm lg:text-2xl text-center mx-10">
            HUB INNOVATION CENTER
          </div>
        </div>
        <div
          className="px-8 flex flex-col justify-center items-center"
          style={{ flex: 3 }}
        >
          <div
            className="lg:w-2/3 md:w-full text-white text-3xl font-medium border-b-4 lg:pt-2 text-center"
            style={{ borderBottomColor: "#FF9800" }}
          >
            ULAANBAATAR
          </div>
          <div className=" text-center font-medium lg:w-2/3 md:w-full">
            IMMERSE YOURSELF IN A COMMUNITY-LED CONFERENCE DESIGNED FOR AWS
            USERS, WHERE YOU CAN GLEAN KNOWLEDGE FROM FELLOW HANDS-ON
            PRACTITIONERS WHO SHARE YOUR MINDSET.
          </div>
          <div
            className="py-2 px-4 rounded-full font-medium hover:px-5 cursor-pointer my-4"
            style={{ backgroundColor: "#0F2437" }}
          >
            REGISTER
          </div>
        </div>
        <div
          className="text-white font-medium text-2xl text-center"
          style={{ flex: 1 }}
        >
          2023.06.07
        </div>
      </div>
    </section>
  );
}
