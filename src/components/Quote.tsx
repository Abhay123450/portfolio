import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export function Quote() {
    const theme = useContext(themeContext);
    return (
        <div
            className={`flex flex-col w-full px-2 py-8 mt-2 rounded-md shadow-lg border ${
                theme === "light"
                    ? " bg-white text-black border-neutral-300"
                    : " bg-neutral-800 text-neutral-400 border-neutral-600"
            }`}
        >
            <p className="text-lg border-y-4 font-medium border-primary px-4 py-4 font-mono">
                What I have learned is always going to be limited. But what I
                can learn is going to be infinite.
            </p>
        </div>
    );
}
