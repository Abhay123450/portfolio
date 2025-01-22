import React, { useEffect, useState } from "react";
import { TabProps } from "./Tab";

export interface TabContainerProps {
    children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
}

export function TabContainer({ children }: TabContainerProps): JSX.Element {
    // Normalize children to an array, whether it's a single child or multiple children
    children = React.Children.toArray(
        children
    ) as React.ReactElement<TabProps>[];

    // Define state for the active tab
    const [activeTab, setActiveTab] = useState<string | null>(null);

    // If there are valid children, set the first tab as the default active tab
    useEffect(() => {
        if (React.isValidElement(children[0])) {
            setActiveTab(children[0].props.label);
        }
        document.addEventListener("filterChanged", () => {
            console.log("filterChanged");
            setActiveTab("Projects");
        });

        return () => {
            document.removeEventListener("filterChanged", () =>
                setActiveTab(activeTab)
            );
        };
    }, [children.length]);

    return (
        <>
            {/* Tab Header */}
            <div className="flex flex-row w-fit space-x-2">
                {children.map(
                    (child, index) =>
                        React.isValidElement(child) && (
                            <div
                                key={index}
                                role="button"
                                className="w-fit mb-2 bg-white px-2 py-1 rounded-md mt-2 shadow-md border"
                                onClick={() => setActiveTab(child.props.label)}
                            >
                                <h3 className="text-lg font-bold text-neutral-800 ">
                                    {child.props.label}
                                </h3>
                                <div
                                    className={`h-2 w-full rounded ${
                                        child.props.label === activeTab
                                            ? "bg-primary"
                                            : "bg-neutral-300"
                                    }`}
                                ></div>
                            </div>
                            // <button
                            //     key={child.props.label}
                            //     className={`${
                            //         child.props.label === activeTab
                            //             ? "bg-primary bg-opacity-20"
                            //             : "bg-white"
                            //     } w-full py-1 rounded-md border border-neutral-400 hover:border-black active:shadow-inner active:shadow-neutral-300`}
                            //     onClick={() => setActiveTab(child.props.label)}
                            // >
                            //     {child.props.label}
                            // </button>
                        )
                )}
            </div>

            {/* Tab Body */}
            <div>
                {children.map((child) =>
                    React.isValidElement(child) &&
                    child.props.label === activeTab ? (
                        <div key={child.props.label}>{child}</div>
                    ) : null
                )}
            </div>
        </>
    );
}
