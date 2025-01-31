import { VscCollapseAll, VscExpandAll } from "react-icons/vsc";
import { Card } from "./Card";
import { Collapsible } from "./Collapsible";
import { useContext, useState } from "react";
import { themeContext } from "../contexts/ThemeContext";

export interface Faq {
    question: string;
    answer: string;
    isOpen: boolean;
    id: number;
}

export function Faq() {
    const theme = useContext(themeContext);

    const faqList = [
        {
            question: "Are you actively looking for a job?",
            answer: "Yes!"
        },
        {
            question: "What is your strong area of expertise?",
            answer: "JavaScript and Node.js."
        },
        {
            question: "Are you a fresher or an experienced developer?",
            answer: "Fresher."
        },
        {
            question: "Are you willing to relocate?",
            answer: "Yes, I am open to relocation."
        },
        {
            question: "What is your salary expectation?",
            answer: "Rs. 1 lakh per month (12 LPA?). Negotiable."
        },
        {
            question: "When can you start working?",
            answer: "Immediately."
        }
    ];

    let [faqs, setFaqs] = useState<Faq[]>(
        faqList.map((faq, index) => ({ ...faq, isOpen: false, id: index }))
    );
    let [allState, setAllState] = useState<"expanded" | "collapsed" | "mixed">(
        "collapsed"
    );

    function expandOne(id: number) {
        let isAllExpanded = true;
        setFaqs(
            faqs.map((faq) => {
                if (faq.id === id) {
                    return { ...faq, isOpen: true };
                } else {
                    isAllExpanded = faq.isOpen;
                    return faq;
                }
            })
        );
        // let isAllExpanded = faqs.every((faq) => faq.isOpen);
        console.log(`isAllExpanded: ${isAllExpanded}`);
        setAllState(isAllExpanded ? "expanded" : "mixed");
    }

    function collapseOne(id: number) {
        let isAllCollapsed = true;
        setFaqs(
            faqs.map((faq) => {
                if (faq.id === id) {
                    return { ...faq, isOpen: false };
                } else {
                    isAllCollapsed = !faq.isOpen;
                    return faq;
                }
            })
        );
        // let isAllCollapsed = faqs.every((faq) => !faq.isOpen);
        console.log(`isAllCollapsed: ${isAllCollapsed}`);
        setAllState(isAllCollapsed ? "collapsed" : "mixed");
    }

    function collapseAll() {
        setFaqs((faqList) => faqList.map((faq) => ({ ...faq, isOpen: false })));
        setAllState("collapsed");
    }

    function expandAll() {
        console.log("expand all");
        console.log(faqs);
        setFaqs((faqList) => faqList.map((faq) => ({ ...faq, isOpen: true })));
        setAllState("expanded");
        console.log(faqs);
    }

    function expandCollapse() {
        if (allState === "expanded") {
            collapseAll();
        } else {
            expandAll();
        }
    }

    return (
        <section id="faqs" className="relative mt-2">
            <Card>
                <div className="w-fit bg-transparent pb-2 mb-1">
                    <h4
                        className={`text-lg font-bold ${
                            theme === "light"
                                ? "text-neutral-800"
                                : "text-neutral-300"
                        }`}
                    >
                        Frequently Asked Questions
                    </h4>
                    <div className="h-2 w-full bg-orange-500 rounded"></div>
                </div>

                <button
                    onClick={expandCollapse}
                    className={`absolute top-4 right-4 tooltip-container  ${
                        theme === "light"
                            ? "text-black"
                            : "text-neutral-300 hover:text-white"
                    }`}
                >
                    {allState === "expanded" ? (
                        <VscCollapseAll className="w-6 h-6" />
                    ) : (
                        <VscExpandAll className="w-6 h-6" />
                    )}
                    <span className="tooltip tooltip-bottom-left hidden lg:block">
                        {allState === "expanded"
                            ? "Collapse All"
                            : "Expand All"}
                    </span>
                </button>
                <div className="flex flex-col space-y-2">
                    {faqs.map((faq, index) => (
                        <Collapsible
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={faq.isOpen}
                            id={index}
                            expandOne={expandOne}
                            collapseOne={collapseOne}
                            key={index}
                        />
                    ))}
                </div>
            </Card>
        </section>
    );
}
