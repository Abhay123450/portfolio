import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

function Navlink({
    linkName,
    onClick
}: {
    linkName: string;
    onClick: (navlink: string) => void;
}) {
    const theme = useContext(themeContext);
    return (
        <button
            onClick={() => onClick(linkName)}
            className={`flex flex-row items-center align-middle px-3 py-1 hover:text-orange-500 active:text-orange-500 
                ${
                    theme === "light"
                        ? "text-black"
                        : "text-neutral-100 rounded-md"
                }`}
        >
            {linkName}
        </button>
    );
}

export default Navlink;
