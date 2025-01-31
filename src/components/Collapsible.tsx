import React, { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaQ } from "react-icons/fa6";
import { Faq } from "./Faq";
import { themeContext } from "../contexts/ThemeContext";

export function Collapsible({
    question,
    answer,
    isOpen,
    id,
    expandOne,
    collapseOne
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    id: number;
    expandOne: (id: number) => void;
    collapseOne: (id: number) => void;
}) {
    const theme = useContext(themeContext);

    let isExpanded = isOpen;

    function expandCollapse() {
        if (isExpanded) {
            collapseOne(id);
        } else {
            expandOne(id);
        }
    }

    return (
        <div className="flex flex-col w-full">
            <button
                onClick={expandCollapse}
                className={`flex flex-row w-full h-fit p-2 border hover:border-primary rounded-md cursor-pointer ${
                    isExpanded
                        ? "rounded-b-none border-b-0 hover:border-b-0 border-primary"
                        : theme === "light"
                        ? "border-neutral-400"
                        : "border-neutral-600"
                }`}
            >
                <div
                    className={`flex flex-row items-center w-full text-left text-base font-medium text-black active:text-primary ${
                        theme === "light" ? "text-black" : "text-neutral-400"
                    }`}
                >
                    {question}
                </div>
                {isExpanded ? (
                    <FaMinus className="w-5 h-5" focusable={true} />
                ) : (
                    <FaPlus className="w-5 h-5" focusable={true} />
                )}
            </button>
            <div className={`${isExpanded ? "flex" : "hidden"}`}>
                <p
                    className={`w-full p-2 text-base font-sans border border-t-0 border-primary rounded-b-md bg-primary bg-opacity-10 ${
                        theme === "light" ? "text-black" : "text-neutral-300"
                    }`}
                >
                    {"" + answer}
                </p>
            </div>
        </div>
    );
}
