// eslint-disable-next-line react/prop-types
const Wrapper = ({children}) => {
  return <div className="w-full h-full flex flex-col mx-auto max-w-5xl">{children}</div>;
};

export default Wrapper;