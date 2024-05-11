import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Wrapper from "../wrapper/Wrapper";
import image1 from "../../assets/gallery_1.jpg";
import image2 from "../../assets/gallery_2.jpg";
import image3 from "../../assets/gallery_3.jpg";
import image4 from "../../assets/gallery_4.jpg";

const Gallery = () => {
  const images = [image1, image2, image3, image4];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const [currentImg, setCurrentImg] = useState(0);

  return (
    <Wrapper>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.75,
          delay: 0.3,
        }}
        className="flex flex-col w-full h-[600px] relative py-10"
      >
        <div className="w-full h-12 flex justify-between ">
          <h2 className="text-2xl">Binhoff gallery</h2>
          <div className="ml-auto flex items-center">
            <span className="mr-2">
              <IoIosArrowRoundBack />
            </span>
            <span className="mr-1 text-lg font-semibold ">1</span>
            <span>/</span>
            <span className="ml-1 text-lg font-semibold ">{images.length}</span>
            <span className="ml-2">
              <IoIosArrowRoundForward />
            </span>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden flex justify-start relative py-5">
          {images.map((img, i) => (
            <React.Fragment key={i}>
              {i === currentImg ? (
                <motion.div
                  initial={{ opacity: 0, x: 800, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.3,
                  }}
                  className="h-[400px] w-4/5 flex items-center rounded-2xl overflow-hidden justify-start"
                >
                  <img
                    src={img}
                    alt={`gallery_img_${i}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ) : null}
            </React.Fragment>
          ))}
          {images.length > 1 && (
            <motion.div 
            initial={{x:100, opacity: 0, scale:.6}}
            whileInView={{x:0, opacity: 1, scale:.9}}
            transition={{
              duration: 0.75,
              delay: 0.3,
            }}
            className="w-[200px] h-[400px] rounded-2xl absolute right-0 overflow-hidden">
              <div className="h-full w-[500px] ">
                <img
                  src={
                    images[
                      currentImg === images.length - 1 ? 0 : currentImg + 1
                    ]
                  }
                  alt={`gallery_img${
                    currentImg === images.length - 1 ? 1 : currentImg + 2
                  }`}
                />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Gallery;
