import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import Wrapper from "../wrapper/Wrapper";

// Import images
import image1 from "../../assets/hero_1.jpg";
import image2 from "../../assets/hero_2.jpg";
import image3 from "../../assets/hero_3.jpg";
import image4 from "../../assets/hero_4.jpg";
import image5 from "../../assets/hero_5.jpg";
import image6 from "../../assets/hero_4.jpg";

const Hero = () => {
  const [images] = useState([image1, image2, image3, image4, image5, image6]);

  const imageVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <Wrapper>
      <div className="flex w-full h-auto flex-col relative">
        <div className="w-full h-14 flex justify-between items-center">
          <span className="text-lg">investment potential</span>
          <div className="flex gap-x-1 h-full items-center text-lg">
            <span className="">en</span>
            <span className="pt-2">
              <AiOutlineDown />
            </span>
          </div>
        </div>
        <div className="flex w-full justify-between h-auto">
          <div className="h-auto min-h-[480px] w-auto flex flex-col justify-center items-start">
            <div className="flex w-full flex-col justify-start items-start text-6xl font-bold">
              <h2 className="">Investment</h2>
              <h2 className="">in real</h2>
              <h2 className="">estate</h2>
            </div>
            <div className="flex gap-x-8 mt-6">
              <button className="rounded-md px-4 py-2 text-nowrap bg-[green]">
                Request or call
              </button>
              <button className="rounded-md px-4 py-2 border text-nowrap border-[#5d5d60]">
                To get the consultation
              </button>
            </div>
          </div>
          <motion.div
            className="w-full flex h-full relative gap-x-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {images.map((img, i) => (
              <motion.div
                className="w-12 h-[320px] rounded-lg object-cover overflow-hidden"
                key={i}
                custom={i}
                variants={imageVariants}
                style={{
                  y: `${Math.random() * 100}px`, // Randomize Y position
                }}
              >
                <img src={img} alt={`hero_image_${i}`} className="h-full w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* 2 buttons absolute  */}
        <div className="absolute bottom-4 right-24 w-10 h-30 flex flex-col justify-between">
          <button className="flex justify-center items-center w-10 h-10 rounded-full bg-[green] text-[white]">
            <IoIosCall />
          </button>
          <button className="flex justify-center items-center w-10 h-10 rounded-full bg-[#BC4D34] text-[white]">
            <IoMdMenu />
          </button>
        </div>
      </div>
      <div className="h-10 w-full flex items-center gap-x-1 text-lg">
        <span className="">scroll down</span>
        <span className="pt-2">
          <AiOutlineDown />
        </span>
      </div>
    </Wrapper>
  );
};

export default Hero;
