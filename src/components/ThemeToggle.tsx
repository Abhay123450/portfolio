import { useEffect } from "react";
import { Theme } from "../contexts/ThemeContext";

export function ThemeToggle({
    theme,
    setTheme
}: {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}) {
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme as Theme);
        }
        console.log(`stored theme: ${storedTheme}`);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.body.style.backgroundColor = "#1f1f1f";
        } else {
            document.body.style.backgroundColor = "#f8f8f8";
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            if (prevTheme === "light") {
                localStorage.setItem("theme", "dark");
                return "dark";
            } else {
                localStorage.setItem("theme", "light");
                return "light";
            }
        });
        console.log(theme);
    };

    return (
        <button
            onClick={toggleTheme}
            className={
                "absolute w-10 h-10 top-2 right-2 bg-transparent text-black p-1 rounded-full border border-dashed" +
                (theme === "light"
                    ? " border-neutral-400"
                    : " border-neutral-400")
            }
        >
            {theme === "light" ? "🌞" : "🌜"}
        </button>
    );
}
