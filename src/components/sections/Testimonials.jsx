/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Wrapper from "../wrapper/Wrapper";
import { FaQuoteRight } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import testimonial_1 from "../../assets/testimonial_1.jpg";
import testimonial_2 from "../../assets/testimonial_2.jpg";
const Testimonial = ({
  testimonial,
  currentTestimonialIndex,
  totalTestimonials,
}) => {
  return (
    <div className="flex  py-8 w-full  mx-auto h-full">
      <div className="h-full py-2 pl-2 w-24 text-[green] flex items-start justify-start text-2xl">
        <FaQuoteRight />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <div className="mb-8 text-sm">{testimonial.message}</div>
        <div className="w-full flex items-center justify-between">
          <div className="flex justify-start w-full">
            <div className="mr-4">
              <img
                src={testimonial.profile}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="flex flex-col text-sm">
              <h4 className="mb-0 text-lg font-semibold ">
                {testimonial.name}
              </h4>
              <h6 className="text-gray-600 text-sm">{testimonial.role}</h6>
            </div>
          </div>
          <div className="ml-auto flex items-center">
            <span className="mr-2">
              <IoIosArrowRoundBack />
            </span>
            <span className="mr-1 text-lg font-semibold ">
              {currentTestimonialIndex + 1}
            </span>
            <span>/</span>
            <span className="ml-1 text-lg font-semibold ">
              {totalTestimonials}
            </span>
            <span className="ml-2 ">
              <IoIosArrowRoundForward />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonials = [
    {
      message:
        "I've been working with this team for over a year now, and I'm impressed with their dedication and professionalism. They always deliver top-notch quality, and I highly recommend them for any project.",
      profile: testimonial_1,
      name: "John Doe",
      role: "Frontend Developer",
    },
    {
      message:
        "Working with Jane and her team has been a pleasure. They are highly skilled professionals who go above and beyond to meet our project requirements. I look forward to collaborating with them on future projects.",
      profile: testimonial_2,
      name: "Jane Doe",
      role: "UX/UI Designer",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
          delay: 0.5,
        }}
        className="flex flex-col py-10 h-auto"
      >
        <div className="mb-4">
          <h3 className="text-4xl  ">Trusted by clients</h3>
        </div>
        <div className="relative h-[300px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Testimonial
              testimonial={testimonials[currentTestimonialIndex]}
              currentTestimonialIndex={currentTestimonialIndex}
              totalTestimonials={testimonials.length}
            />
          </motion.div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Testimonials;
