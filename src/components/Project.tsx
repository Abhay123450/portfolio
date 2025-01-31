import { SiGithub, SiYoutube, SiGoogleplay } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { Skills } from "./Skills";
import "./css/tooltip.css";
import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export interface Link {
    name: string;
    link: string;
}

export interface Project {
    workType: "Freelance" | "Self Work" | "Personal";
    company: string | null;
    name: string;
    description: string[];
    techStack?: Skills[];
    links: Link[];
    date: string;
    ytLink?: string;
}
export function Project({
    project,
    skillsSelected
}: {
    project: Project;
    skillsSelected: Skills[];
}) {
    const { workType, company, name, description, techStack, links, ytLink } =
        project;

    const theme = useContext(themeContext);

    return (
        <div
            className={`w-full p-2 bg-opacity-80 hover:bg-opacity-100 rounded-md shadow-md border ${
                theme === "light"
                    ? "bg-white"
                    : "bg-neutral-800 border-neutral-600"
            }`}
        >
            <div className="flex flex-row justify-between items-center">
                <p className="text-lg text-primary font-bold uppercase">
                    {workType}
                </p>
                <p
                    className={`text-sm ${
                        theme === "light"
                            ? "text-neutral-600"
                            : "text-neutral-400"
                    }`}
                >
                    {project.date}
                </p>
            </div>
            <a
                className="w-fit"
                href={links[0].link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h4
                    className={`text-2xl font-bold w-fit ${
                        theme === "light" ? "text-black" : "text-neutral-300"
                    }`}
                >
                    {name}
                </h4>
            </a>
            {company && (
                <p
                    className={`text-base ${
                        theme === "light"
                            ? "text-neutral-600"
                            : "text-neutral-500"
                    }`}
                >
                    For {company}
                </p>
            )}
            {ytLink && (
                <iframe
                    width="100%"
                    height="315"
                    src={ytLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="place-self-center max-w-xl py-2"
                ></iframe>
            )}
            <ul className="list-disc pl-4 xl:pl-5 space-y-1">
                {description.map((desc, i) => {
                    return (
                        <li
                            key={i}
                            className={`text-base text-justify ${
                                theme === "light"
                                    ? "text-neutral-800"
                                    : "text-neutral-400"
                            }`}
                            dangerouslySetInnerHTML={{ __html: desc }}
                        ></li>
                    );
                })}
            </ul>

            {/* <div className="h-fit w-full py-1 bg-neutral-200 rounded mt-2"> */}
            {techStack && (
                <Skills
                    skills={techStack}
                    skillsSelected={skillsSelected}
                    viewType="text"
                />
            )}
            {/* </div> */}
            {/* <div className="h-[1px] w-full bg-neutral-300 rounded mt-2"></div> */}
            <div className="flex flex-row w-full flex-wrap items-center space-x-2 mt-2 rounded ">
                {links.map((link, i) => {
                    return (
                        <a
                            key={i}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`tooltip-container flex flex-row items-center px-2 py-1 bg-neutral-100 rounded-md border border-neutral-400 text-sm ${
                                theme === "light"
                                    ? "bg-neutral-100 text-neutral-800"
                                    : "bg-neutral-950 text-neutral-300"
                            }`}
                        >
                            <p className="w-4 h-4">{getIcon(link.name)}</p>
                            <p className="ml-1 w-full flex flex-row flex-nowrap ">
                                {link.name}
                            </p>
                            <p className="tooltip opacity-100 text-base">
                                {getTooltipText(link.name)}
                            </p>
                        </a>
                    );
                })}
            </div>
        </div>
    );

    function getIcon(name: string) {
        if (
            name.includes("Github") ||
            name.includes("Frontend") ||
            name.includes("Backend") ||
            name.includes("Source Code")
        ) {
            return <SiGithub className="w-4 h-4" />;
        } else if (name.includes("Demo")) {
            return <SiYoutube className="w-4 h-4 text-red-500" />;
        } else if (name.includes("Play Store")) {
            return <SiGoogleplay className="w-4 h-4 text-[#a0c16c]" />;
        } else {
            return <TbWorld className="w-4 h-4" />;
        }
    }

    function getTooltipText(name: string) {
        if (
            name.includes("Github") ||
            name.includes("Frontend") ||
            name.includes("Backend") ||
            name.includes("Source Code")
        ) {
            return "View source code on Github";
        } else if (name.includes("Demo")) {
            return "View app demo on Youtube";
        } else if (name.includes("Play Store")) {
            return "View in Play Store";
        } else if (name.includes("Live") || name.includes("Website")) {
            return "View live";
        } else {
            return "Open link";
        }
    }
}
