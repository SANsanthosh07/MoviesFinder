import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HelpIcon from "@mui/icons-material/Help";

const Footer = () => {
  return (
    <>
      <div className="bg-white p-6 sm:p-10 font-serif">
        <div className="flex justify-center items-center text-white">
          <div className="bg-black w-full sm:w-[400px] h-[120px] shadow-md rounded-2xl flex flex-col justify-center items-center">
            <h3 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-5">
              Follow On:
            </h3>
            <div className="flex justify-center mt-4 gap-4 sm:gap-8 flex-wrap hover:cursor-pointer">
              <WhatsAppIcon />
              <FacebookIcon />
              <InstagramIcon />
              <XIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>

        <div className="text-black flex justify-center items-center mt-10">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-10 text-center">
            <li className="hover:underline cursor-pointer flex items-center gap-1">
              Help <HelpIcon />
            </li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Box Office</li>
            <li className="hover:underline cursor-pointer">Related</li>
            <li className="hover:underline cursor-pointer">Entertainment</li>
          </ul>
        </div>

        <p className="text-black flex justify-center items-center mt-10 text-center text-sm sm:text-base">
          ©2025 by Movies Finder.com, Inc.
        </p>
      </div>
    </>
  );
};

export default Footer;
