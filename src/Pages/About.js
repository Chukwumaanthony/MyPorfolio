import React from "react";
import Slideshow from "../slideshow";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import culogo from "../Assets/culogo.png";
import tmlogo from "../Assets/tmlogo.png";
import uologo from "../Assets/uologo.png";
import nysclogo from "../Assets/nysclogo.png";
// import TypeWriter from "../Typewritter/TypeWriter";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleItemClick = (item) => {
  //   setIsOpen(false); // Close the dropdown after selection (optional)
  // };

  return (
    <div className="relative flex flex-col text-start w-[100%] p-10">
      <span className="font-quicksand font-bold text-[70px] text-white">
        About me
      </span>
      <div className="flex items-center justify-center">
        {/* <div className="bg-black w-[50%]">
          <img
            className="flex item-center justify-center rounded-lg w-[15rem]"
            alt=""
            src={Tony}
            srcSet=""
          />
        </div> */}
        <p className=" font-medium text-xl font-quicksand text-left text-white">
          My name is EZEUGWU ANTHONY CHUKWUMA, I am an Experienced and
          detail-oriented Front-End Web Developer with a passion for crafting
          user-friendly and visually appealing web applications. Proficient in
          HTML, CSS, JavaScript, and modern front-end frameworks such as
          React.js. Skilled in translating design mockups and wireframes into
          responsive and interactive web experiences. Strong collaboration and
          communication skills, with a focus on delivering high-quality code and
          meeting project deadlines. Constantly learning and adapting to new
          technologies to stay ahead in the ever-evolving web development
          landscape.
        </p>
      </div>
      <div className="flex flex-col justify-center pt-4">
        <h1 className="flex text-left font-quicksand text-white text-4xl font-semibold">
          Skills & Tools
        </h1>
        <div>
          <Slideshow />
        </div>
        <p
          className=" text-white font-medium text-xl font-quicksand "
          // style={{ fontFamily: "Roboto" }}
        >
          Feel free to explore my portfolio to witness the evolution of my
          skills and projects. Each project signifies a milestone in my journey,
          demonstrating my commitment to excellence and ongoing growth.
        </p>
        <div className="my-5 p-0">
          <h1 className="flex font-quicksand text-white text-4xl font-semibold lg:text-left">
            Experience{" "}
          </h1>
          <div className="flex gap-7 flex-wrap mt-5 lg:w-[60%]">
            <div className="flex w-[18.5rem]  justify-center items-center gap-3 bg-[#1c1c1c4f] py-8 rounded-md  shadow border  border-[#242424]">
              <img src={culogo} alt="" className="w-[4rem]" />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">
                  Caleb University
                </span>
                <span className="text-white font-semibold text-sm">
                  Bs.c Computer Science{" "}
                </span>
                <span className="text-white font-semibold text-sm">
                  2018-2022
                </span>
              </div>
            </div>
            <div className="flex w-[18.5rem] justify-center items-center gap-3  bg-[#1c1c1c4f] py-8 rounded-md shadow border  border-[#242424] ">
              <img src={tmlogo} alt="" className="w-[2rem]" />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">
                  TM30 Global Ltd{" "}
                </span>
                <span className="text-white font-semibold text-sm">
                  Jnr Front-End Dev{" "}
                </span>
                <span className="text-white font-semibold text-sm">
                  Dec 2022- Jan 2024
                </span>
              </div>
            </div>
            <div className="flex w-[18.5rem] justify-center items-center gap-3  bg-[#1c1c1c4f] py-8 rounded-md shadow border  border-[#242424] ">
              <img src={nysclogo} alt="" className="w-[2rem]" />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">
                  N.Y.S.C
                </span>
                <span className="text-white font-semibold text-sm">
                  Youth Corper
                </span>
                <span className="text-white font-semibold text-sm">
                  2022-2023
                </span>
              </div>
            </div>
            <div className="flex w-[18.5rem] justify-center items-center gap-3  bg-[#1c1c1c4f] py-8 rounded-md shadow border border-[#242424] ">
              <img src={uologo} alt="" className="w-[2rem]" />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">
                  Unified Payments{" "}
                </span>
                <span className="text-white font-semibold text-sm">
                  Jnr Front-End Dev{" "}
                </span>
                <span className="text-white font-semibold text-sm">
                  Feb 2024 - Date
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex pt-5">
            <a
              href="/Updated Resume.pdf"
              download
              className=" bg-[#1c1c1c4f] p-3 font-quicksand rounded-3xl text-[17px] text-white font-normal flex gap-3  border border-[#242424] justify-center items-center hover:shadow-custom hover:transition-shadow"
            >
              View Resume <FaLongArrowAltRight />
            </a>
          </div>
          <div className="flex pt-5">
            <a
              href="/Contact"
              className=" bg-[#1c1c1c4f] p-3 font-quicksand rounded-3xl text-[17px] text-white font-normal flex gap-3  border border-[#242424] justify-center items-center hover:shadow-custom hover:transition-shadow"
            >
              Contact Me <FaLongArrowAltRight />
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <span className="follow text-white flex justify-center text-center">
          Follow me
        </span>
        <hr className=" border border-b-white" />
      </div>
      <div className="flex font-[600] text-2xl pt-5 pb-5 items-center w-full justify-center ">
        <div className="flex text-white gap-5 justify-center w-[50%]">
          <a
            className="w-[3rem] h-[3rem] flex justify-center items-center rounded-full shadow-custom transition-shadow hover:border-gray-700 hover:border"
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/thonexy_rulzzz?igsh=MW5manJ6Z2U1cHVseA%3D%3D&utm_source=qr"
          >
            <SlSocialInstagram />
          </a>
          <a
            className="w-[3rem] h-[3rem] flex justify-center items-center rounded-full shadow-custom transition-shadow hover:border-gray-700 hover:border"
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/anthony.ezeugwu.1?mibextid=LQQJ4d"
          >
            <SlSocialFacebook />
          </a>
          <a
            className="w-[3rem] h-[3rem] flex justify-center items-center rounded-full shadow-custom transition-shadow hover:border-gray-700 hover:border"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/anthony-ezeugwu-b6286529b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          >
            <SlSocialLinkedin />
          </a>
          <a
            className="w-[3rem] h-[3rem] flex justify-center items-center rounded-full shadow-custom transition-shadow hover:border-gray-700 hover:border"
            rel="noreferrer"
            target="_blank"
            href="https://x.com/thonexyrulz?t=EiVP0DDXb3YX1u4Qo5GHMA&s=09"
          >
            <SlSocialTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
