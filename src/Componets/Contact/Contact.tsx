import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <div>
        <h1 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold mt-10 sm:mt-20 pl-5 md:pl-10 lg:pl-50">
          Connect with Me
        </h1>
        <hr className="w-3/4 h-0.5 bg-gray-900 ml-5 md:ml-10 lg:ml-50 mt-2" />
          
        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-8 pl-5 md:pl-10 lg:pl-55">
          {[
            { name: "LinkedIn", url: "https://www.linkedin.com/in/mashahir-p" },
            { name: "GitHub", url: "https://github.com/mashahir0" },
            {
  name: "Email",
  url: "mailto:mashahirp@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you",
}

          ].map(({ name, url }) => (
            <Link
              key={name}
              to={url}
              // target="_blank"
              rel="noopener noreferrer"
              className={`border-2 px-4 py-2 rounded font-serif font-black transition duration-300 ${
                isDarkMode
                  ? "border-white bg-black text-white hover:bg-white hover:text-black"
                  : "border-black bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
