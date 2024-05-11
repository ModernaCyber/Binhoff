import Wrapper from "../wrapper/Wrapper";

const Introduction = () => {
  return (
    <Wrapper>
      <div className="w-full flex flex-col justify-start h-[400px] py-10">
        <div className="text-2xl ">
          <h3 className="">The property that </h3>
          <h3 className=""> suits you perfectly</h3>
        </div>
        <p className="text-lg">
            Choose an apartment that suits your requirements and financial capabilities. Attractive location close to business centers provides guaranteed rental.
        </p>
      </div>
    </Wrapper>
  );
};

export default Introduction;
