// import imagelogo from "./../../assets/banner/formalPhoto.png";

// const Computers = () => {
//   return (
//     <div className="pr-20">
//       <div className="border  border-red-400">
//         <img className="relative -top-10 right-10 w-[440px]" src={imagelogo} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Computers;


import imagelogo from "./../../assets/banner/formalPhoto.png";

const Computers = () => {
  return (
    <div className="pr-4 md:pr-10 lg:pr-20">
      <div className="border border-red-400 flex justify-center items-center">
        <img
          className="relative -top-5 md:-top-10 right-0 md:right-5 lg:right-10 w-[300px] md:w-[400px] lg:w-[440px]"
          src={imagelogo}
          alt="Shanta Islam"
        />
      </div>
    </div>
  );
};

export default Computers;
