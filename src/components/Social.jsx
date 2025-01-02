import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-wrap justify-center  gap-2 md:gap-6">
        {/* GitHub */}
        <Link
          to="https://github.com/Shanto93"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-800 hover:bg-gray-700 text-white shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-110"
        >
          <FaGithub className="text-xl md:text-3xl group-hover:text-yellow-400 transition-colors" />
        </Link>

        {/* LinkedIn */}
        <Link
          to="https://www.linkedin.com/in/shanta93/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-110"
        >
          <FaLinkedin className="text-xl md:text-3xl group-hover:text-blue-300 transition-colors" />
        </Link>

        {/* Gmail */}
        <Link
          to="shantoislam7363@gmail.com.com"
          className="group flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-red-500 hover:bg-red-400 text-white shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-110"
        >
          <FaEnvelope className="text-xl md:text-3xl group-hover:text-yellow-100 transition-colors" />
        </Link>

        {/* Phone */}
        <Link
          to="tel:+8801997266467"
          className="group flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-110"
        >
          <FaPhone className="text-xl md:text-3xl group-hover:text-yellow-100 transition-colors" />
        </Link>

        {/* Facebook */}
        <Link
          to="https://www.facebook.com/shanto.islam.98478672/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-blue-800 hover:bg-blue-700 text-white shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-110"
        >
          <FaFacebook className="text-xl md:text-3xl group-hover:text-blue-300 transition-colors" />
        </Link>
      </div>
    </div>
  );
};

export default Social;
