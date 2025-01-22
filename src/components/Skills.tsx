import { SkillBadge } from "./SkillBadge";

export const mySkills = [
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML",
    "Tailwind CSS",
    "Svelte",
    "React",
    "TypeScript",
    "Android Studio",
    "Kotlin",
    "GitHub"
] as const;

export type Skills = (typeof mySkills)[number];

export function Skills({
    skills,
    skillsSelected,
    setSkillsSelected,
    viewType = "both"
}: {
    skills?: Skills[];
    skillsSelected: Skills[];
    setSkillsSelected?: React.Dispatch<React.SetStateAction<Skills[]>>;
    viewType?: "text" | "icon" | "both" | "auto";
}) {
    console.info(`skillselected array is: ${skillsSelected}`);

    if (skills) {
        // without title and other elements
        return (
            <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 mt-1 relative ">
                {skills.map((skill, i) => (
                    <SkillBadge
                        key={i}
                        name={skill}
                        isSelected={skillsSelected.includes(skill)}
                        isInteractive={false}
                        skillsSelected={skillsSelected}
                        setSkillsSelected={setSkillsSelected}
                        viewType={viewType}
                    />
                ))}
            </div>
        );
    }

    skills = [...mySkills];

    return (
        <>
            <div className="w-fit my-2">
                <h3 className="text-lg font-bold text-neutral-800 ">
                    Tech Stack
                </h3>
                <div className="h-2 w-full bg-orange-500 rounded"></div>
            </div>
            <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 mt-1">
                {skills.map((skill, i) => (
                    <SkillBadge
                        key={i}
                        name={skill}
                        isSelected={skillsSelected.includes(skill)}
                        skillsSelected={skillsSelected}
                        setSkillsSelected={setSkillsSelected}
                        viewType={viewType}
                    />
                ))}
            </div>
        </>
    );
}
