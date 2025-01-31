import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Connect } from "./components/Connect";
import { Quote } from "./components/Quote";
import { Card } from "./components/Card";
import { TabContainer } from "./components/TabContainer";
import { Tab } from "./components/Tab";
import { Education } from "./components/Education";
import { Message } from "./components/Message";
import { Faq } from "./components/Faq";
import { ThemeToggle } from "./components/ThemeToggle";
import { Theme, themeContext } from "./contexts/ThemeContext";

function App() {
    let [skillsSelected, setSkillsSelected] = useState<Skills[]>([]);
    let [theme, setTheme] = useState<Theme>("light");
    return (
        <themeContext.Provider value={theme}>
            <div
                className={`flex flex-col items-center w-full h-full bg-fixed ${
                    theme === "light" ? "grid-light" : "bg-black grid-dark"
                }`}
            >
                <div className="flex flex-col px-2 w-full mx-auto max-w-4xl h-full min-h-dvh">
                    <Navbar />
                    <Card>
                        <ThemeToggle theme={theme} setTheme={setTheme} />
                        <Hero />
                        <Connect />
                        <Skills
                            skillsSelected={skillsSelected}
                            setSkillsSelected={setSkillsSelected}
                            viewType="both"
                        />
                    </Card>
                    <TabContainer>
                        <Tab
                            label="Projects"
                            isActive={true}
                            onClick={() => {}}
                        >
                            <Projects skillsSelected={skillsSelected} />
                        </Tab>
                        <Tab
                            label="Education"
                            isActive={false}
                            onClick={() => {}}
                        >
                            <Education />
                        </Tab>
                    </TabContainer>

                    <Message />

                    <Faq />

                    <Quote />
                    <p
                        className={` w-fit self-center mt-2 px-4 py-2 mb-2 rounded-md shadow-md text-md ${
                            theme === "light"
                                ? "text-neutral-800 bg-white"
                                : "text-neutral-400 bg-neutral-800"
                        }`}
                    >
                        This website is made with React + TypeScript
                    </p>
                </div>
            </div>
        </themeContext.Provider>
    );
}

export default App;
