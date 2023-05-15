import React from "react";
import Image from "next/image";
import bg from "../assets/img/bg/bg_about.gif";
export default function About() {
  return (
    <section
      id="about"
      className="flex w-screen h-screen bg-red justify-center items-center bg-cover bg-center bg-no-repeat bg-blue-50"
    >
      <Image src={bg} alt="Background" layout="fill" objectFit="cover" />
      <p>About section content</p>
      <p>About section content</p>
      <p>About section content</p>
      <p>About section content</p>
    </section>
  );
}
