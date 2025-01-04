import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-purple-600 to-pink-500 text-white py-14">
      <Wrapper className="flex flex-col md:flex-row justify-between items-start gap-16">
        {/* LEFT START */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-32">
          {/* MENU START */}
          <div className="flex flex-col gap-5">
            <div className="font-semibold uppercase text-lg cursor-pointer hover:text-gray-200 transition-all">
              Chana Choor
            </div>
            <div className="font-semibold uppercase text-lg cursor-pointer hover:text-gray-200 transition-all">
              Become a partner
            </div>
            <div className="font-semibold uppercase text-lg cursor-pointer hover:text-gray-200 transition-all">
              Sign up for email
            </div>
            <div className="font-semibold uppercase text-lg cursor-pointer hover:text-gray-200 transition-all">
              PIN 834001
            </div>
            <div className="font-semibold uppercase text-lg cursor-pointer hover:text-gray-200 transition-all">
              PH NO +91 907-xxx-xxxx
            </div>
          </div>
          {/* MENU END */}

          {/* HELP & ABOUT MENU START */}
          <div className="flex gap-16 md:gap-24 lg:gap-32">
            {/* HELP MENU */}
            <div className="flex flex-col gap-5">
              <div className="font-semibold uppercase text-lg">Get help</div>
              <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer transition-all">
                Order Status
              </div>
              <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer transition-all">
                Delivery
              </div>
              <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer transition-all">
                Returns
              </div>
              <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer transition-all">
                Payment Options
              </div>
              <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer transition-all">
                Contact Us
              </div>
            </div>
            {/* ABOUT MENU */}
            <div className="flex flex-col gap-5">
              <div className="font-semibold uppercase text-lg">About Nike</div>
              <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer transition-all">
                News
              </div>
              <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer transition-all">
                Careers
              </div>
              <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer transition-all">
                Investors
              </div>
              <div className="text-sm text-white/[0.7] hover:text-white cursor-pointer transition-all">
                Sustainability
              </div>
            </div>
          </div>
          {/* HELP & ABOUT MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-6 justify-center md:justify-start items-center">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="w-12 h-12 rounded-full bg-white/[0.25] flex items-center justify-center bg-gradient-to-r from-gray-800 to-purple-600 hover:via-pink-500 cursor-pointer transition-all"
          >
            <FaFacebookF size={24} />
          </div>

          <div
            onClick={() => window.open("https://twitter.com", "_blank")}
            className="w-12 h-12 rounded-full bg-white/[0.25] flex items-center justify-center bg-gradient-to-r from-gray-800 to-purple-600 hover:via-pink-500 cursor-pointer transition-all"
          >
            <FaTwitter size={24} />
          </div>

          <div
            onClick={() => window.open("https://youtube.com", "_blank")}
            className="w-12 h-12 rounded-full bg-white/[0.25] flex items-center justify-center bg-gradient-to-r from-gray-800 to-purple-600 hover:via-pink-500 cursor-pointer transition-all"
          >
            <FaYoutube size={24} />
          </div>

          <div
            onClick={() => window.open("https://instagram.com", "_blank")}
            className="w-12 h-12 rounded-full bg-white/[0.25] flex items-center justify-center bg-gradient-to-r from-gray-800 to-purple-600 hover:via-pink-500 cursor-pointer transition-all"
          >
            <FaInstagram size={24} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>

      {/* BOTTOM COPYRIGHT AND LINKS */}
      <Wrapper className="flex justify-between mt-16 flex-col md:flex-row gap-4">
        {/* LEFT START */}
        <div className="text-sm text-white/[0.6] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 OM, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 text-center md:text-left flex-wrap justify-center md:justify-start">
          <div className="text-sm text-white/[0.6] hover:text-white cursor-pointer transition-all">
            Guides
          </div>
          <div className="text-sm text-white/[0.6] hover:text-white cursor-pointer transition-all">
            Terms of Sale
          </div>
          <div className="text-sm text-white/[0.6] hover:text-white cursor-pointer transition-all">
            Terms of Use
          </div>
          <div className="text-sm text-white/[0.6] hover:text-white cursor-pointer transition-all">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
