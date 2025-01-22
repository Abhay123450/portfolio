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

function App() {
    let [skillsSelected, setSkillsSelected] = useState<Skills[]>([]);

    return (
        <div className="flex flex-col items-center w-full grid-gray ">
            <div className="flex flex-col px-2 w-full max-w-4xl h-full min-h-dvh">
                <Navbar />
                <Card>
                    <Hero />
                    <Connect />
                    <Skills
                        skillsSelected={skillsSelected}
                        setSkillsSelected={setSkillsSelected}
                        viewType="both"
                    />
                </Card>
                <TabContainer>
                    <Tab label="Projects" isActive={true} onClick={() => {}}>
                        <Projects skillsSelected={skillsSelected} />
                    </Tab>
                    <Tab label="Education" isActive={true} onClick={() => {}}>
                        <Education />
                    </Tab>
                </TabContainer>

                <Message />

                <Quote />
                <p className="bg-white w-fit self-center mt-2 px-4 py-2 mb-2 rounded-md shadow-md text-md">
                    This website is made with React + TypeScript
                </p>
            </div>
        </div>
    );
}

export default App;
