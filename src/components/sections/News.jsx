/* eslint-disable react/prop-types */
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import news_1 from "../../assets/news_1.jpg";
import news_2 from "../../assets/news_2.jpg";
import news_3 from "../../assets/news_3.jpg";
import news_4 from "../../assets/news_4.jpg";
const News_Card = ({ news, index }) => {
  return (
    <motion.div
      initial={{ y: 30, scale:.8 }}
      whileInView={{ y: 0,scale:1 }}
      transition={{
        // duration: Math.random()*index,
        duration: 0.75,
          delay: 0.3*index,
      }}
      className={`w-[280px] h-[420px] rounded-md overflow-hidden flex  flex-col ${
        index % 2 == 0 ? "mt-16" : "ml-auto mx-8"
      }`}
    >
      <div className="w-full h-[240px] rounded-md overflow-hidden">
        <img
          src={news.img}
          alt={`news_img_${index}`}
          className="w-full h-full"
        />
      </div>
      <span className="text-sm mb-2 mt-2">{news.text}</span>
      <a className="text-[green] text-sm">More details</a>
    </motion.div>
  );
};

const News = () => {
  const news = [
    {
      img: news_1,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney ",
    },
    {
      img: news_2,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney ",
    },
    {
      img: news_3,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney ",
    },
    {
      img: news_4,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney ",
    },
  ];
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
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="w-full h-auto flex-col justify-center items-center"
      >
        <h2 className="text-4xl text-center mb-8 mt-2">Actual News</h2>
        <div className="w-full h-auto grid grid-cols-2">
          {news.map((article, i) => (
            <News_Card key={i} news={article} index={i + 1} />
          ))}
        </div>
        <div className="w- mt-6 flex justify-center">
          <button className="px-6 py-2 border border-[#5D5D60] rounded-sm ">
            See more
          </button>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default News;
