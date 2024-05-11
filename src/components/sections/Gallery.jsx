import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Wrapper from "../wrapper/Wrapper";
import { motion } from "framer-motion";
import image1 from "../../assets/gallery_1.jpg";
// import image2 from '../../assets/gallery_2.jpg';
// import image3 from '../../assets/gallery_3.jpg';
// import image4 from '../../assets/gallery_4.jpg';

const Gallery = () => {
  const images = [image1];

  return (
    <Wrapper>
      <div className="flex flex-col w-full h-[600px] relative py-10">
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
        <div className="w-full h-full overflow-hidden flex justify-start ">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="h-[400px] w-full flex items-center rounded-2xl overflow-hidden justify-start"
            >
              <img
                src={img}
                alt={`gallery_img_${i}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Gallery;
