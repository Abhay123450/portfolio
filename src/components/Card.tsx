import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export function Card({ children }: { children: React.ReactNode }) {
    const theme = useContext(themeContext);
    return (
        <div
            className={
                "relative flex flex-col w-full px-2 py-2 border rounded-md shadow-lg" +
                (theme === "light"
                    ? " bg-white text-black border-neutral-300"
                    : " bg-neutral-800 text-neutral-400 border-neutral-600")
            }
        >
            {children}
        </div>
    );
}
