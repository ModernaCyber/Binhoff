import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import img from "../../assets/mission.jpg";
const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className="relative h-[300px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
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
            duration: 0.5,
            delay: 0.25,
          }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white py-6"
        >
          <h2 className="text-4xl font-semibold  mb-4">Our Mission</h2>
          <p className="text-center px-4 text-lg">
            Creating alternative investment opportunities, providing a
            stabilizing component to portfolios, combining low-risk profiles
            with a value-add approach to yield attractive returns.
          </p>
        </motion.div>
      </Wrapper>
    </div>
  );
};

export default Mission;
