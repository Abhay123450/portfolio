import { useEffect, useState } from "react";
import { Project } from "./Project";
import { Skills } from "./Skills";

export function Projects({ skillsSelected }: { skillsSelected: Skills[] }) {
    const myProjects: Project[] = [
        {
            workType: "Freelance",
            company: "Dewill Industries Pvt Ltd",
            name: "Darjeeling Tea Garden",
            description: [
                `Designed and developed a <b> B2B e-commerce Android app and backend server </b> as a solo developer 
 with 1K+ installations, used by people across India.`,
                `Key features include a product catalogue, cart system, payment gateway, authentication, push
 notifications, news updates and video updates.`
            ],
            links: [
                {
                    name: "Play Store",
                    link: "https://play.google.com/store/apps/details?id=com.darjeelingteagarden"
                },
                {
                    name: "App Demo",
                    link: "https://www.youtube.com/watch?v=cv423ikWolQ"
                }
            ],
            techStack: [
                "JavaScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Android Studio",
                "Kotlin",
                "GitHub"
            ],
            date: "Sep 2022 - Jun 2024",
            ytVideo: {
                title: "App Demo",
                link: "https://www.youtube.com/embed/cv423ikWolQ?si=Eq8dgT8myC_zrOti?autoplay=1&mute=1",
                duration: 78
            }
        },
        {
            workType: "Personal",
            company: null,
            name: "QuickGamez",
            description: [
                `Developed a website where you can <b>play online games</b> directly on your browser.`,
                `The website is deployed on Google Cloud Platform (GCP) App Engine.`
            ],
            links: [
                {
                    name: "Website",
                    link: "https://quickgamez.com"
                },
                {
                    name: "Frontend",
                    link: "https://github.com/Abhay123450/quickgamez-frontend"
                },
                {
                    name: "Backend",
                    link: "https://github.com/Abhay123450/quickgamez-backend"
                }
            ],
            techStack: [
                "Node.js",
                "Express",
                "TypeScript",
                "MongoDB",
                "Svelte",
                "HTML",
                "Tailwind CSS",
                "GitHub"
            ],
            date: "May 2024 - Present"
        },
        {
            workType: "Personal",
            company: null,
            name: "Portfolio",
            description: [
                `Developed this personal portfolio website which you are currently viewing.`
            ],
            techStack: ["React", "Tailwind CSS", "TypeScript", "GitHub"],
            links: [
                {
                    name: "Source Code",
                    link: "https://github.com/Abhay123450/portfolio"
                }
            ],
            date: "Sep 2024"
        }
    ];

    const [projects, setProjects] = useState<Project[]>(myProjects);

    useEffect(() => {
        const filteredProjects = filterProjectsBySkill(
            myProjects,
            skillsSelected
        );
        if (JSON.stringify(projects) !== JSON.stringify(filteredProjects)) {
            setProjects(filteredProjects);
        }
    }, [skillsSelected]);

    return (
        <div className="flex flex-col w-full bg-transparent space-y-2 pb-2">
            {projects.map((project, i) => (
                <Project
                    skillsSelected={skillsSelected}
                    key={i}
                    project={project}
                />
            ))}
        </div>
    );

    function filterProjectsBySkill(
        projects: Project[],
        skillsSelected: Skills[]
    ): Project[] {
        let newProjects: (Project & { skillMatchCount: number })[] = [];

        projects.forEach((project) => {
            let skillMatchCount = 0;
            project.techStack?.forEach((skill) => {
                if (skillsSelected.includes(skill)) {
                    skillMatchCount++;
                }
            });
            newProjects.push({ ...project, skillMatchCount });
        });

        let sortedProjects = newProjects.sort(
            (a, b) => b.skillMatchCount - a.skillMatchCount
        );

        console.info(sortedProjects);
        // setProjects(sortedProjects);
        return sortedProjects;
    }

    // =====================================================================================

    // const [projects, setProjects] = useState<Project[]>(myProjects);
    // useEffect(() => {
    //     filterProjectsBySkill(myProjects, skillsSelected);
    // }, [skillsSelected, myProjects]);

    // return (
    //     <div className="flex flex-col w-full bg-transparent space-y-2 pb-2">
    //         {projects.map((project, i) => {
    //             return (
    //                 <Project
    //                     skillsSelected={skillsSelected}
    //                     key={i}
    //                     project={project}
    //                 />
    //             );
    //         })}
    //     </div>
    // );

    // function filterProjectsBySkill(
    //     projects: Project[],
    //     skillsSelected: Skills[]
    // ): Project[] {
    //     let newProjects: (Project & { skillMatchCount: number })[] = [];

    //     projects.forEach((project) => {
    //         let skillMatchCount = 0;
    //         project.techStack?.forEach((skill) => {
    //             if (skillsSelected.includes(skill)) {
    //                 skillMatchCount++;
    //             }
    //         });
    //         newProjects.push({ ...project, skillMatchCount });
    //     });

    //     let sortedProjects = newProjects.sort(
    //         (a, b) => b.skillMatchCount - a.skillMatchCount
    //     );

    //     console.info(sortedProjects);
    //     setProjects(sortedProjects);
    //     return sortedProjects;
    // }
}
