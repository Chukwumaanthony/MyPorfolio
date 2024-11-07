import React from "react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { Link, useLocation, Outlet } from "react-router-dom";

const Layout = () => {
  // const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleItemClick = (item) => {
  //   setIsOpen(false); // Close the dropdown after selection (optional)
  // };
  const location = useLocation(); // Get the current path

  const home = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/About",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
  ];

  return (
    <div className="p-5 flex flex-col  w-[100%] bg-black">
      <div className="flex lg:fixed  flex-col text-white justify-center items-center lg:flex-row lg:w-full lg:justify-between lg:px-[7rem]">
        <div className="lg:text-left">
          <section className="text-3xl mb-1 font-rambla font-[600]">
            EntonyEnterprise
          </section>
          <p className="font-dmsans text-sm text-gray-200">Software Engineer</p>
        </div>

        <div
          // inline-flex justify-center space-x-8 bg-[#1C1C1C4F] backdrop-blur-md mt-3 font-quicksand font-semibold border border-[#242424] [&_a]:mx-5 md:[&_a]:mx-8 py-4 rounded-full md:mt-0
          className="
          flex max-w-md  mt-2 border gap-5 justify-between rounded-[1.8rem] bg-[#1c1c1c] w-[%]  backdrop-blur-md font-quicksand font-semibold  border-[#242424]
        "
        >
          {home.map((p) => {
            return (
              <Link key={p.name} to={p.path}>
                <button
                  style={{
                    backgroundColor:
                      location.pathname === p.path ? "black" : "",
                  }}
                  className="w-full  p-4 px-6 rounded-[1.8rem] text-white"
                >
                  {p.name}
                </button>
              </Link>
            );
          })}
        </div>

        <div className="lg:block font-[600] text-2xl pt-5 pb-5 items-center hidden">
          <div className="flex text-white gap-5 justify-center w-[]">
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
      <div className="lg:px-[10rem] lg:pt-[6rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
