import Logo from "../navbar/Logo";
import Wrapper from "../wrapper/Wrapper";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="h-[240px] w-full flex flex-col pt-10 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full w-full text-lg">
          <div className="flex justify-start flex-col items-start">
            <Logo />
          </div>
          <div className="flex justify-start flex-col items-start">
            <button className="">Product</button>
            <button className="">Invest</button>
            <button className="">Quickstart</button>
          </div>
          <div className="flex justify-start flex-col items-start">
            <button className="">Blog</button>
            <button className="">Careers</button>
            <button className="">About</button>
          </div>
          <div className="flex justify-start gap-x-1">
            <button className="w-10 rounded-full h-10 border border-[#5d5d60] flex justify-center items-center">
              <FaTwitter />
            </button>
            <button className="w-10 rounded-full h-10 border border-[#5d5d60] flex justify-center items-center">
              <FaLinkedinIn />
            </button>
            <button className="w-10 rounded-full h-10 border border-[#5d5d60] flex justify-center items-center">
              <CiFacebook />
            </button>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-center my-2 dark:bg-black ">
          <p className="text-sm dark:text-white ">
            <span className="px-1 ">Binhoff</span> © {new Date().getFullYear()}{" "}
            All rights reserved.
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
