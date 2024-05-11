import Wrapper from "../wrapper/Wrapper";
import img from "../../assets/learn_more.jpg";
const Learn_more = () => {
  return (
    <div className="relative h-[300px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <Wrapper>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white py-6">
          <div className="text-2xl  mb-4 flex flex-col justify-center w-full items-center text-center">
            <h2 className="">Learn more about </h2>
            <h2 className="">investing with Binhoff</h2>
          </div>
          <form onSubmit={() => {}} className="">
            <div className="flex gap-x-2">
              <input
                className="p-2 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-500 placeholder-gray-400"
                type="email"
                placeholder="Enter Your email"
              />
              <button className="border px-4 py-2 border-[#5d5d60]">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};

export default Learn_more;
