import Wrapper from "../wrapper/Wrapper";
import Logo from "./Logo";

const Navbar = () => {
  const menuItems = [
    "Investment potential",
    "Location",
    "About Company",
    "Contact",
  ];
  return (
    <Wrapper>
      <div className="flex h-16 w-full  ">
        <div className="flex justify-between items-center w-full h-full ">
          <Logo/>
          <div className="ml-4 flex text-center justify-center items-center w-full h-full overflow-hidden ">
            <ul className="w-auto flex justify-around mx-auto max-w-3xl gap-x-12 ">
              {menuItems.map((item, i) => (
                <li className="text-[#5D5D60] dark:text-[#5D5D60] text-nowrap hover:border-b-2 border-b-2 border-transparent transition-colors hover:border-[#5d5d60] cursor-pointer" key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-4 py-2 rounded-full border border-[#5D5D60] text-[#5D5D60] dark:text-[#5D5D60]">
              Signin
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
