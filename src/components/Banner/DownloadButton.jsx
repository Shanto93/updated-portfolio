import { GiArrowWings } from "react-icons/gi";
import Resume from "./../../assets/banner/Shanta's_Resume.pdf";

const DownloadButton = () => {
  return (
    <div className="absolute">
      <div className=" border rounded-md border-[#915eff] hover:border-white">
        <a href={Resume} download={Resume}>
          <button className="px-5 py-2 md:px-9 text-base md:text-lg font-serif font-semibold rounded-md md:py-3 border relative -right-1 -top-1 bg-[#915eff] border-none text-white flex gap-2 items-center hover:bg-white hover:text-[#050816]">
            DOWNLOAD CV{" "}
            <p>
              <GiArrowWings />
            </p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default DownloadButton;
