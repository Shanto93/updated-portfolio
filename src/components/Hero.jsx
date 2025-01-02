import { styles } from "../styles";
import Computers from "./canvas/Computers";
import { Typewriter } from "react-simple-typewriter";
import Social from "./Social";
import DownloadButton from "./Banner/DownloadButton";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <section className="w-full h-screen mx-auto ">
        <div
          className={`${styles.paddingX} md:absolute inset-0 top-[100px] md:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          {/* For Side Style */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-40 md:h-80 h-20 violet-gradient" />
          </div>

          <div>
            <div>
              <h1 className="pt-5 md:text-4xl font-mono">
                I am{" "}
                <span className="text-[#915eff] font-mono">
                  <Typewriter
                    words={["Shanta Islam", "MERN Stack Developer"]}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="mt-5 md:w-[450px] ">
              <p className="font-mono sm:text-wrap">
                A creative front-end and MERN Stack developer dedicated to
                helping startups around the world succeed with cutting-edge web
                solutions.
              </p>
            </div>
            <div className="max-w-fit">
              <div className="divider divider-secondary"></div>
              <Social></Social>
              <div className="mt-7 max-w-fit">
                <DownloadButton></DownloadButton>
              </div>
            </div>
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
