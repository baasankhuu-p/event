import React from "react";
import Image from "next/image";
import bg from "../assets/img/bg/bg3.gif";

export default function Info() {
  const data = [
    [
      "PRESENTATIONS",
      "Immerse yourself in informative sessions, engaging lightning talks, and insightful panels led by industry leaders. Seize the opportunity to learn from the brightest minds and esteemed leaders in the cloud industry.",
    ],
    [
      "GIFTS",
      "increase in users",
    ],
    [
      "CONVERSATIONS",
      "daily active users",
    ]
  ];
  return (
    <section id="info" className="relative flex flex-col h-screen bg-black justify-center">
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="w-screen h-sceen"
      />
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch">
        {data.map(([title, description], index ) => 
            <div key={index} className="mx-12 my-2">
              <div className="text-white text-3xl font-bold uppercase text-center">{title}</div>
              <div className="text-white text-xl font-medium text-center mt-4 mb-2">{description}</div>
            </div>
         )}
      </div>
    </section>
  );
}
