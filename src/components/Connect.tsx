import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import "../App.css";
import "./css/tooltip.css";

export function Connect() {
    return (
        <>
            <div className="w-fit mb-2">
                <h3 className="text-lg font-bold text-neutral-800 ">
                    Connect with me
                </h3>
                <div className="h-2 w-full bg-orange-500 rounded"></div>
            </div>
            <div className="flex flex-row space-x-1 flex-wrap">
                <a
                    aria-description="Click to Copy Email"
                    className="tooltip-container w-fit h-9 flex flex-row items-center px-2 py-1 my-1 border border-neutral-400 rounded-md cursor-pointer hover:border-black active:shadow-inner active:shadow-neutral-300"
                    onClick={copyEmailToClipboard}
                >
                    <MdEmail className=" " />
                    <p className="text-md ml-2">er.abhay.gkp@gmail.com</p>
                    <span className="tooltip">Click to Copy</span>
                </a>
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
                    href="https://github.com/Abhay123450"
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
        await navigator.clipboard.writeText("er.abhay.gkp@gmail.com");
        alert("Email copied to clipboard");
    }
}
