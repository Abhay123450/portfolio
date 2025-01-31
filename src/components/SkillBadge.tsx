import {
    SiJavascript,
    SiTypescript,
    SiExpress,
    SiNodedotjs,
    SiMongodb,
    SiHtml5,
    SiTailwindcss,
    SiReact,
    SiGithub,
    SiSvelte,
    SiAndroid,
    SiKotlin
} from "react-icons/si";
import { Skills } from "./Skills";
import "../App.css";
import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

const highlightedSkills: Skills[] = [
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML",
    "Tailwind CSS",
    "Svelte",
    "React"
];

export function SkillBadge({
    name,
    isSelected,
    skillsSelected,
    setSkillsSelected,
    isInteractive = true,
    viewType = "both"
}: {
    name: Skills;
    isSelected: boolean;
    skillsSelected: Skills[];
    isInteractive?: boolean;
    setSkillsSelected?: React.Dispatch<React.SetStateAction<Skills[]>>;
    viewType?: "text" | "icon" | "both" | "auto";
}) {
    const theme = useContext(themeContext);

    function filterChanged() {
        console.log("filterChanged event dispatched");
        const newEvent = new CustomEvent("filterChanged");
        document.dispatchEvent(newEvent);
    }

    if (viewType === "auto") {
        return (
            <div
                className={
                    ` w-fit flex flex-row items-center px-2 py-1 rounded-md border space-x-1` +
                    ` ${
                        isSelected
                            ? "border-primary bg-primary bg-opacity-20"
                            : theme === "light"
                            ? "bg-white "
                            : "bg-neutral-900 text-neutral-400 border-neutral-400"
                    }`
                }
                onClick={() => {
                    filterChanged();
                    selectSkillToggle(name);
                }}
            >
                <div className="flex md:hidden lg:flex">{getIcon(name)}</div>
                <p className={`text-md hidden md:flex `}>{name}</p>
            </div>
        );
    }

    return (
        <div
            role={isInteractive ? "button" : undefined}
            tabIndex={isInteractive ? 0 : -1}
            className={
                `relative overflow-hidden w-fit flex flex-row items-center px-2 py-1 rounded-md border space-x-1 ${
                    isInteractive ? "hover:border-primary" : ""
                }` +
                ` ${
                    isSelected
                        ? "border-primary bg-primary bg-opacity-20"
                        : theme === "light"
                        ? "bg-white "
                        : "bg-neutral-900 text-neutral-400 border-neutral-400"
                }` +
                ``
            }
            onClick={() => {
                filterChanged();
                selectSkillToggle(name);
            }}
            onKeyUp={(e) => {
                if (e.key === "Enter") {
                    filterChanged();
                    selectSkillToggle(name);
                }
            }}
        >
            {(viewType === "both" || viewType === "icon") && getIcon(name)}
            {(viewType === "both" || viewType === "text") && (
                <p className={`text-md `}>{name}</p>
            )}
            {highlightedSkills.includes(name) && viewType === "both" && (
                <i className=" before:content-[''] before:w-[0.3rem] before:h-14 before:bg-neutral-400 before:blur-sm  before:shadow-md before:shadow-neutral-400 before:absolute before:-top-3 before:-left-6 before:transform before:rotate-[30deg] before:animate-shine "></i>
            )}
        </div>
    );

    function selectSkillToggle(skill: Skills) {
        if (!setSkillsSelected) {
            return;
        }
        if (skillsSelected.includes(skill)) {
            setSkillsSelected(skillsSelected.filter((s) => s !== skill));
        } else {
            setSkillsSelected([...skillsSelected, skill]);
        }
    }
}

function getIcon(name: string, _viewType = "both") {
    switch (name) {
        case "JavaScript":
            return <SiJavascript className="text-[#efd81d] bg-black" />;
        case "TypeScript":
            return <SiTypescript className="text-blue-500" />;
        case "Express":
            return <SiExpress className="text-blue-500" />;
        case "Node.js":
            return <SiNodedotjs className="text-green-500" />;
        case "MongoDB":
            return <SiMongodb className="text-green-500" />;
        case "HTML":
            return <SiHtml5 className="text-red-500" />;
        case "React":
            return <SiReact className="text-blue-500" />;
        case "Tailwind CSS":
            return <SiTailwindcss className="text-blue-500" />;
        case "GitHub":
            return <SiGithub className="text-black" />;
        case "Svelte":
            return <SiSvelte className="text-orange-500" />;
        case "Android Studio":
            return <SiAndroid className="text-green-500" />;
        case "Kotlin":
            return <SiKotlin className="text-blue-500" />;
        default:
            return <SiJavascript />;
    }
}
