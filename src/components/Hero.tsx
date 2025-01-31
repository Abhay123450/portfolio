import { useContext } from "react";
import "../App.css";
import { themeContext } from "../contexts/ThemeContext";
function Hero() {
    const theme = useContext(themeContext);
    return (
        <>
            <p
                className={`w-fit text-lg  md:text-xl font-semibold mt-12 -mb-1 md:-mb-2 border-l-8 border-primary pl-2 md:pl-5 md:ml-5 rounded-t-xl ${
                    theme === "light" ? "text-black" : "text-neutral-300"
                }`}
            >
                Hello, My name is
            </p>
            <h1
                className={`w-fit text-5xl md:text-6xl font-bold uppercase border-l-8 border-primary pl-2 md:pl-5 md:ml-5 ${
                    theme === "light" ? "text-black" : "text-neutral-200"
                }`}
            >
                Abhay Anand
            </h1>
            <h2
                className={`w-fit text-xl md:text-2xl text-primary font-bold border-l-8 border-primary pl-2 md:pl-5 md:ml-5 `}
            >
                I am a FULLSTACK DEVELOPER
            </h2>
            <h2
                className={`w-fit text-lg md:text-xl  font-bold border-l-8 border-primary pl-2 mb-12 md:pl-5 md:ml-5 rounded-b-xl ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                }`}
            >
                I live in Gorakhpur (U.P.), INDIA
            </h2>
        </>
    );
}

export default Hero;
