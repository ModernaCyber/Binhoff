import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";

const Introduction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    }, [isInView, mainControls]);
  
  return (
    <Wrapper>
       <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.75,
          delay: 0.5,
        }}
         className="w-full flex flex-col justify-start h-[400px] py-10">
        <div className="text-4xl mb-4 ">
          <h3 className="">The property that </h3>
          <h3 className=""> suits you perfectly</h3>
        </div>
        <p className="text-lg">
            Choose an apartment that suits your requirements and financial capabilities. Attractive location close to business centers provides guaranteed rental.
        </p>
      </motion.div>
    </Wrapper>
  );
};

export default Introduction;
