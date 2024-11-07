import React from "react";
import Dev from "../Assets/newhom.png";
import Tony from "../Assets/newImg.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import TypeWriter from "../Typewritter/TypeWriter";
import Html from "../Assets/htmllogo.png";
import Css from "../Assets/csslogo.png";
import Js from "../Assets/JavaScriptlogo.png";
import jqurey from "../Assets/jquery.png";
import react from "../Assets/reactlogo.png";
// import chrome from "./Assets/ChromeLogo.png";
import canva from "../Assets/Canvalogo.png";
import capcut from "../Assets/capcutlogo.png";
import git from "../Assets/githublogo.png";
import vs from "../Assets/vscodelogo.png";

const Home = () => {
  const images = [
    { src: Html, alt: "HTML" },
    { src: Css, alt: "CSS" },
    { src: Js, alt: "JAVASCRIPT" },
    { src: jqurey, alt: "JQUERY" },
    { src: react, alt: "REACT" },
    //   { src: chrome, alt: "Chrome" },
    { src: git, alt: "GIT" },
    { src: capcut, alt: "CAPCUT" },
    { src: canva, alt: "CANVA" },
    { src: vs, alt: "VISUAL STUDIO" },
  ];
  return (
    <div className="pl-10 ">
      <div className="flex  w-full font-medium text-3xl">
        <section className="flex pt-16">
          <TypeWriter />
        </section>
      </div>
      <div className="flex pt-5">
        <a
          href="/Updated Resume.pdf"
          download
          className=" bg-[#1c1c1c4f] p-3 font-quicksand rounded-3xl text-[17px] text-white font-normal flex gap-3  border border-[#242424] justify-center items-center hover:shadow-custom hover:transition-shadow"
        >
          Download Resume <FaLongArrowAltRight />
        </a>
      </div>

      <div className="flex justify py-16">
        <img className=" rounded-lg w-[20rem]" alt="" src={Tony} srcSet="" />
      </div>
      <div>
        <div className="text-white w-[100%] text-6xl font-[800] font-quicksand text-start flex flex-col justify-start">
          <h1 className="pb-8">My Tech Stack</h1>
          <p className="text-white text-2xl ">My stack</p>
        </div>
        <div className="flex flex-wrap gap-5 py-6">
          {images.map((t, index) => {
            return (
              <div className="flex w-[200px] lg:w-[17.5%]  h-[120px] justify-center items-center gap-3 bg-[#1c1c1c4f] py-8 rounded-md px-14 shadow border border-gray-800">
                <img key={index} alt="" src={t.src} className="w-[2rem]" />
                <span className="text-white font-semibold text-sm">
                  {t.alt}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="flex pb-10 font-quicksand text-gray-300 text-4xl font-bold">
          My Featured Projects
        </h1>
        <div className="flex flex-col pb-5 gap-20 w-full lg:flex-row lg:flex-wrap ">
          <div className="max-w-[500px] rounded-lg border border-[#242424]  hover:shadow-custom hover:transition-shadow">
            <img className="flex w-[]" alt="" src={Dev} srcSet="" />
            <div className="bg-[#1c1c1c4a] p-7 text-white text-start flex justify-between">
              <div className="flex flex-col">
                <span className="font-[600]">Tm30Food App</span>
                <span className="text-gray-500">
                  Website for food/catering services
                </span>
              </div>
              <div className="border border-gray-700 flex items-center rounded-full p-3 w-10 h-10 cursor-pointer hover:shadow-custom hover:transition-shadow">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
          <div className="max-w-[500px] rounded-md border border-[#242424]  hover:shadow-custom hover:transition-shadow">
            <img className="flex w-[]" alt="" src={Dev} srcSet="" />
            <div className="bg-[#1c1c1c4a] p-7 text-white text-start flex justify-between">
              <div className="flex flex-col">
                <span className="font-[600]">PayArena</span>
                <span className="text-gray-500">
                  Website for Payment services
                </span>
              </div>
              <div className="border border-gray-700 flex items-center rounded-full p-3 w-10 h-10 cursor-pointer hover:shadow-custom hover:transition-shadow">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
          <div className="max-w-[500px] rounded-md border border-[#242424]  hover:shadow-custom hover:transition-shadow">
            <img className="flex w-[]" alt="" src={Dev} srcSet="" />
            <div className="bg-[#1c1c1c4a] p-7 text-white text-start flex justify-between">
              <div className="flex flex-col">
                <span className="font-[600]">Payloft Admin</span>
                <span className="text-gray-500">
                  Payment service dashboard{" "}
                </span>
              </div>
              <div className="border border-gray-700 flex items-center rounded-full p-3 w-10 h-10 cursor-pointer hover:shadow-custom hover:transition-shadow">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        </div>
        <p
          className="text-white p-10 font-medium text-xl font-quicksand"
          // style={{ fontFamily: "Roboto" }}
        >
          Feel free to explore my portfolio to witness the evolution of my
          skills and projects. Each project signifies a milestone in my journey,
          demonstrating my commitment to excellence and ongoing growth.
        </p>
      </div>
      <div className="p-5 ">
        <span className="follow text-white">Follow me</span>
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

export default Home;
