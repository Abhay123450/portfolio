import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { getThemeCss } from "../helpers/getThemeCss";
import { FaBug } from "react-icons/fa";
function Hero() {
    const theme = useContext(ThemeContext);
    return (
        <
            // className={
            //     "flex flex-col w-full px-2 py-12 border border-b-0 shadow-lg rounded-t-md " +
            //     getThemeCss(theme)
            // }
        >
            <p
                className={`w-fit text-lg  md:text-xl font-semibold mt-12 -mb-1 md:-mb-2 border-l-8 border-primary pl-2 md:pl-5 md:ml-5 rounded-t-xl 
                ${theme === "light" ? "text-black" : "text-neutral-100"}`}
            >
                Hello, My name is
            </p>
            <h1
                className={`w-fit text-5xl md:text-6xl font-bold uppercase border-l-8 border-primary pl-2 md:pl-5 md:ml-5 `}
            >
                Abhay Anand
            </h1>
            <h2
                className={`w-fit text-xl md:text-2xl text-primary font-bold border-l-8 border-primary pl-2 md:pl-5 md:ml-5 ${""}`}
            >
                I am a FULLSTACK DEVELOPER
            </h2>
            <h2
                className={`w-fit text-lg md:text-xl font-bold border-l-8 border-primary pl-2 mb-12 md:pl-5 md:ml-5 rounded-b-xl ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                } `}
            >
                Based in Gorakhpur, INDIA
            </h2>
            {/* <FaBug className="text-red-600 text-5xl md:text-7xl animate-move" /> */}
        </>
    );
}

export default Hero;
