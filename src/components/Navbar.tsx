import { useContext } from "react";
import Navlink from "./Navlink";
import { themeContext } from "../contexts/ThemeContext";
import { getThemeCss } from "../helpers/getThemeCss";

function Navbar() {
    const navlinks = ["For Recruiters", "FAQs"] as const;
    const theme = useContext(themeContext);
    return (
        <div
            className={`flex flex-row items-center justify-center space-x-4 ${
                theme === "light" ? "text-black" : "text-neutral-200"
            }`}
        >
            {navlinks.map((linkname, i) => {
                return (
                    <Navlink
                        key={i}
                        linkName={linkname}
                        onClick={handleClick}
                    />
                );
            })}
        </div>
    );

    function handleClick(navlink: string) {
        let scrollToElement: HTMLElement | null = null;

        switch (navlink) {
            case "For Recruiters":
                scrollToElement = document.getElementById(
                    "message-for-recruiter"
                );
                break;
            case "FAQs":
                scrollToElement = document.getElementById("faqs");
                break;
        }

        if (scrollToElement) {
            scrollToElement.scrollIntoView({ behavior: "smooth" });
        }
    }
}

export default Navbar;
