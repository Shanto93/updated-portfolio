// import { styles } from "../styles";
// import Computers from "./canvas/Computers";

// const Hero = () => {
//   return (
//     <div className="md:flex items-center">
//       <section className="relative w-full h-screen mx-auto">
//         <div
//           className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
//         >
//           {/* For Side Style */}
//           <div className="flex flex-col justify-center items-center mt-5">
//             <div className="w-5 h-5 rounded-full bg-[#915eff]" />
//             <div className="w-1 sm:h-80 h-40 violet-gradient" />
//           </div>

//           <div>
//             <h1 className={`${styles.heroHeadText} text-white`}>
//               Hi I&apos;m <span className="text-[#915eff]">Shanta Islam</span>
//             </h1>
//             <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//               MERN Stack Developer
//             </p>
//           </div>
//         </div>
//       </section>
//       <div className="">
//         <Computers></Computers>
//       </div>
//     </div>
//   );
// };

// export default Hero;




// import { styles } from "../styles";
// import Computers from "./canvas/Computers";

// const Hero = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center">
//       <section className="relative w-full h-screen mx-auto">
//         <div
//           className={`${styles.paddingX} absolute inset-0 top-[100px] md:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
//         >
//           {/* For Side Style */}
//           <div className="flex flex-col justify-center items-center mt-5">
//             <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#915eff]" />
//             <div className="w-1 sm:h-40 md:h-80 h-20 violet-gradient" />
//           </div>

//           <div>
//             <h1 className={`${styles.heroHeadText} text-white`}>
//               Hi I&apos;m <span className="text-[#915eff]">Shanta Islam</span>
//             </h1>
//             <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//               MERN Stack Developer
//             </p>
//           </div>
//         </div>
//       </section>
//       <div className="mt-10 md:mt-0">
//         <Computers />
//       </div>
//     </div>
//   );
// };

// export default Hero;






import { useState, useEffect } from "react";
import { styles } from "../styles";
import Computers from "./canvas/Computers";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedText("I am");
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center">
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[100px] md:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          {/* For Side Style */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-40 md:h-80 h-20 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} sm:text-xl font-semibold text-white`}>
              {/* Typewriter for 'I am' */}
              {typedText && (
                <span style={{ color: "white" }}>
                  {typedText}
                </span>
              )}
              {/* Typewriter for 'Shanto Islam' */}
              {typedText === "I am" && (
                <span className="text-[#915eff] md:text-4xl sm:text-xl">
                  <Typewriter
                    words={[" Shanta Islam"," A MERN Stack Developer"]}
                    loop={false}
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={1000}
                    cursor={true} 
                  />
                </span>
              )}
            </h1>
            <p>DEmo</p>
          </div>
        </div>
      </section>
      <div className="mt-10 md:mt-0">
        <Computers />
      </div>
    </div>
  );
};

export default Hero;
