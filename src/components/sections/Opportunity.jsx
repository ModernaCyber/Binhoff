import { CiUmbrella } from "react-icons/ci";
import { PiPottedPlant } from "react-icons/pi";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
const Opportunity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.75,
        delay: 0.5,
      }}
      className=" flex w-auto mx-auto h-auto min-h-screen py-10 flex-col"
    >
      <h3 className="text-4xl mt-8 mb-8 text-center">
        The unique investment opportunity
      </h3>
      <div className="grid mx-auto grid-cols-3 gap-x-2">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.75,
            delay: 0.75,
          }}
          className="p-8 w-[280px] ml-auto h-[400px] flex flex-col rounded-xl overflow-hidden"
        >
          <div className="h-14 text-xl">
            <PiPottedPlant />
          </div>
          <h4 className="text-xl font-semibold">Private Investor</h4>
          <span className="my-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney{" "}
          </span>
          <a className="text-sm text-[green]">View more</a>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.85,
            delay: 0.85,
          }}
          className="p-8 w-[280px] mx-auto h-[400px] flex flex-col rounded-xl  overflow-hidden"
        >
          <div className=" flex items-start justify-start h-14 text-xl">
            <span className="-mt-1 rotate-180 ">D</span>
            <span className=" ">D</span>
          </div>
          <h4 className="text-xl font-semibold">Aligned Interests</h4>
          <span className="my-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney{" "}
          </span>
          <a className="text-sm text-[green]">View more</a>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.95,
            delay: 0.95,
          }}
          className="p-8 w-[280px] mr-auto h-[400px] flex flex-col rounded-xl bg-[#dadfe1] overflow-hidden"
        >
          <div className="h-14 text-xl">
            <CiUmbrella />
          </div>
          <h4 className="text-xl font-semibold">Spread The Risk</h4>
          <span className="my-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney{" "}
          </span>
          <a className="text-sm text-[green]">View more</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Opportunity;
