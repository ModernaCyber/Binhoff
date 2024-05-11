import Wrapper from "../wrapper/Wrapper";
import img from '../../assets/mission.jpg'
const Mission = () => {
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
          <h2 className="text-2xl font-semibold  mb-4">Our Mission</h2>
          <p className="text-center px-4 text-lg">
            Creating alternative investment opportunities, providing a
            stabilizing component to portfolios, combining low-risk profiles
            with a value-add approach to yield attractive returns.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Mission;
