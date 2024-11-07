import React, { useState, useEffect } from "react";
import wave from "../Assets/waving-hand.png";

const TypeWriter = () => {
  const words = [
    "Anthony Ezeugwu, ",
    "The CEO Entony_Enterprise, ",
    "A Well Determined Software Engineer",
    "A Graduate Of Computer Science",
  ];
  // const isActive = true; // You

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timer = setTimeout(() => {
      if (charIndex < word.length) {
        setDisplayText(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setCharIndex(0);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }, 100); // Adjust the speed of typing by changing this delay

    return () => clearTimeout(timer);
  }, [charIndex, currentWordIndex, words]);

  return (
    <div className="text-white w-[100%] text-7xl font-[800] font-quicksand flex flex-col justify-start">
      <div className="flex items-center">
        Hi
        <div className="w-20 flex">
          <img src={wave} alt="" />
        </div>
        <span>,</span>
        <div> I am</div>
      </div>
      <div className="text-[#C7BA99] pb-10 text-start">{displayText}</div>
      <div className="text-start font-normal font-dmsans text-2xl">
        Anthony Ezeugwu, a hardworking and motivated software engineer who has
        acquired extensive knowlege in the field of computer science at degree
        level, <br />I have strengthened my skills in front-end web development
        with experience involving projects.
      </div>
    </div>
  );
};
export default TypeWriter;
