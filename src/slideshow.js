import React from "react";
import "./slideshow.css";
import Html from "./Assets/htmllogo.png";
import Css from "./Assets/csslogo.png";
import Js from "./Assets/JavaScriptlogo.png";
import jqurey from "./Assets/jquery.png";
import react from "./Assets/reactlogo.png";
// import chrome from "./Assets/ChromeLogo.png";
import canva from "./Assets/Canvalogo.png";
import capcut from "./Assets/capcutlogo.png";
import git from "./Assets/githublogo.png";
import vs from "./Assets/vscodelogo.png";

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

const Slideshow = () => {
  return (
    <div className="slideshow-container py-2">
      <div className="flex slideshow-track">
        {images.map((t, index) => {
          return (
            <div className="flex w-[40%] justify-center items-center gap-3 bg-slate-900 py-8 rounded-md px-14 shadow border border-gray-500 m-3">
              <img key={index} alt="" src={t.src} className="w-[2rem]" />
              <span className="text-white font-semibold text-sm">{t.alt}</span>
            </div>
          );
        })}
        {images.map((t, index) => {
          return (
            <div className="flex w-[40%] justify-center items-center gap-3 bg-slate-900 py-8 rounded-md px-14 shadow border border-gray-500 m-3">
              <img
                key={index + images.length}
                src={t.src}
                alt=""
                className="w-[2rem]"
              />
              <span className="text-white font-semibold text-sm">{t.alt}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slideshow;
