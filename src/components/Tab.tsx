import React from "react";

export interface TabProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

export function Tab({ children }: TabProps): JSX.Element {
    return <>{children}</>;
}
