import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import "../App.css";
import "./css/tooltip.css";
import { useContext, useState } from "react";
import { themeContext } from "../contexts/ThemeContext";

export function Connect() {
    const theme = useContext(themeContext);
    let [copied, setCopied] = useState(false);
    return (
        <>
            <div className="w-fit mb-2">
                <h3
                    className={`text-lg font-bold ${
                        theme === "light"
                            ? "text-neutral-800"
                            : "text-neutral-300"
                    }`}
                >
                    Connect with me
                </h3>
                <div className="h-2 w-full bg-orange-500 rounded"></div>
            </div>
            <div className="flex flex-row space-x-1 flex-wrap">
                <button
                    aria-description="Click to Copy Email"
                    className="tooltip-container w-fit h-9 flex flex-row items-center px-2 py-1 my-1 border border-neutral-400 rounded-md cursor-pointer hover:border-black active:shadow-inner active:shadow-neutral-300"
                    onClick={copyEmailToClipboard}
                >
                    <MdEmail className=" " />
                    <p
                        className={`text-base ml-2  ${
                            theme === "light"
                                ? "text-neutral-800"
                                : "text-neutral-300"
                        }`}
                    >
                        er.abhay.gkp@gmail.com
                    </p>
                    <span className="tooltip tooltip ">
                        Click to Copy Email
                    </span>
                    <span
                        className={
                            "absolute -bottom-8 -right-0 px-1 h-fit w-auto text-sm font-medium rounded-md border border-green-600 bg-green-200 text-black " +
                            (copied ? "" : "hidden")
                        }
                    >
                        Email Copied to Clipboard
                    </span>
                </button>
                <a
                    className="tooltip-container flex flex-row w-9 h-9 items-center px-2 py-1 my-1 border border-neutral-400 rounded-md hover:border-black active:shadow-inner active:shadow-neutral-300"
                    href="https://github.com/Abhay123450"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiGithub className="w-5 h-5" />
                    <span className="tooltip">Github</span>
                </a>
                <a
                    className="tooltip-container w-9 h-9 flex flex-row items-center px-2 py-1 my-1 border border-neutral-400 rounded-md hover:border-black active:shadow-inner active:shadow-neutral-300"
                    href="https://www.linkedin.com/in/sde-abhay/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiLinkedin className="w-5 h-5 text-[#0a66c2]" />
                    <span className="tooltip">LinkedIn</span>
                </a>
                <a
                    className="tooltip-container flex flex-row w-9 h-9 items-center px-2 py-1 my-1 border border-neutral-400 rounded-md hover:border-black active:shadow-inner active:shadow-neutral-300"
                    href="https://t.me/sde_abhay"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiTelegram className="w-5 h-5 text-[#30a3e6]" />
                    <span className="tooltip">Telegram</span>
                </a>
                {/* <a
                    className="tooltip-container flex flex-row items-center px-2 py-1 border border-neutral-400 rounded-md hover:border-black active:shadow-inner active:shadow-neutral-300"
                    href="https://t.me/sde_abhay"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiTelegram className="w-5 h-5 text-[#30a3e6]" />
                    <span className="tooltip">Telegram</span>
                </a> */}
            </div>
        </>
    );

    async function copyEmailToClipboard(e: any) {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText("er.abhay.gkp@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 4000);
        } catch (error) {
            console.log(error);
        }
    }
}
