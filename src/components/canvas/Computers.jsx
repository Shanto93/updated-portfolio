import imagelogo from "./../../assets/banner/formalPhoto.png";

const Computers = () => {
  return (
    <div className="md:pr-10 lg:pr-32">
      <div className="flex justify-center items-center md:mt-12">
        {/* Outer glowing ring effect */}
        <div className="absolute w-[210px] h-[210px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 blur-xl animate-pulse sm:px-10"></div>

        {/* Inner neon circle */}
        <div className="absolute w-[210px] h-[210px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full border-4 border-dashed border-pink-400 animate-spin-slow"></div>

        {/* Image container */}
        <div className="relative z-10 bg-gradient-to-br rounded-full">
          <img
            className="rounded-full w-[150px] md:w-[550px] object-cover transition-transform duration-500 hover:scale-110"
            src={imagelogo}
            alt="Shanta Islam"
          />
        </div>
      </div>
    </div>
  );
};

export default Computers;
