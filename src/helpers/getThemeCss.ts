import { Theme } from "../contexts/ThemeContext";

export function getThemeCss(theme: Theme): string {
    switch (theme) {
        case "light":
            return "bg-white text-black";
        case "dark":
            return "bg-neutral-900 text-neutral-200";
    }
}
