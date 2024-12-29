import { Outlet } from "react-router";

const MainLayOut = () => {
  return (
    // bg-[#0D1117]
    <div className="">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
