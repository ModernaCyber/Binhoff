import { CiUmbrella } from "react-icons/ci";
import { PiPottedPlant } from "react-icons/pi";

const Opportunity = () => {
  return (
    <div className=" flex w-auto mx-auto h-auto py-10 flex-col">
      <h3 className="text-2xl text-center">
        The unique investment opportunity
      </h3>
      <div className="grid mx-auto grid-cols-3 gap-x-2">
        <div className="p-8 w-[280px] ml-auto h-[400px] flex flex-col rounded-xl overflow-hidden">
          <div className="h-14 text-xl">
            <PiPottedPlant />
          </div>
          <h4 className="text-xl">Private Investor</h4>
          <span className="my-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney{" "}
          </span>
          <a className="text-sm text-[green]">View more</a>
        </div>
        <div className="p-8 w-[280px] mx-auto h-[400px] flex flex-col rounded-xl  overflow-hidden">
          <div className=" flex items-start justify-start h-14 text-xl">
            <span className="-mt-1 rotate-180 ">D</span>
            <span className=" ">D</span>
          </div>
          <h4 className="text-xl">Aligned Interests</h4>
          <span className="my-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney{" "}
          </span>
          <a className="text-sm text-[green]">View more</a>
        </div>
        <div className="p-8 w-[280px] mr-auto h-[400px] flex flex-col rounded-xl bg-[#dadfe1] overflow-hidden">
          <div className="h-14 text-xl">
            <CiUmbrella />
          </div>
          <h4 className="text-xl">Spread The Risk</h4>
          <span className="my-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney{" "}
          </span>
          <a className="text-sm text-[green]">View more</a>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
