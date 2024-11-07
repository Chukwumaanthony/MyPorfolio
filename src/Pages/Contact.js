import React, { useState } from "react";
import tony from "../Assets/tonyimg.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSendMessage = () => {
    if (!name || !email || !message) {
      setError("Please fill out all fields before sending the message.");
    } else {
      setError("");
      // Handle the send message action here
      alert("Message sent successfully!");
    }
  };

  return (
    <div className="text-white">
      <h1 className="font-quicksand font-bold text-[70px] pt-10 text-left">
        Contact
      </h1>
      <p className="text-left">
        Hey there! I'm excited to connect with you. Whether you have a pressing
        question, a project in mind, or just want to chat about the latest in
        tech, I'm all ears. Here's how you can reach out.
      </p>
      <div className="py-[4rem]">
        <div>
          <input
            className="w-full bg-black border-b-2 outline-none text-gray-500 text-[14px] placeholder-gray-400"
            placeholder="Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="pt-[2.5rem]">
          <input
            className="w-full bg-black border-b-2 outline-none text-gray-500 text-[14px] placeholder-gray-400"
            placeholder="Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pt-[2.5rem]">
          <textarea
            className="w-full h-[10rem] bg-black border-b-2 outline-none text-gray-500 text-[14px] placeholder-gray-400"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {error && <div className="text-red-500 text-sm pt-2">{error}</div>}
        <button
          onClick={handleSendMessage}
          disabled={!name || !email || !message}
          className={`w-full mt-8 h-[3rem] flex justify-center items-center rounded-full border ${
            !name || !email || !message
              ? "border-red-500 bg-red-600"
              : "border-gray-500 hover:shadow-custom hover:transition-shadow"
          } `}
        >
          Send Message
        </button>
        <div className="flex justify-center pt-10">
          <img className="w-[10rem] rounded-lg" alt="Tony" src={tony} />
        </div>
        <section className="text-2xl mb-1 font-[600]">EntonyEnterprise</section>
        <div className="flex justify-center items-center">
          <a
            href="mailto:chukwumaanthony97@gmail.com"
            className="cursor-pointer w-[10rem] mt-8 h-[3rem] gap-2 flex justify-center items-center rounded-full border border-[#242424] hover:shadow-custom hover:transition-shadow"
          >
            Contact Me
            <FaLongArrowAltRight />
          </a>
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
    </div>
  );
};

export default Contact;
