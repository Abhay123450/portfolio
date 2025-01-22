import { Card } from "./Card";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

export function Education(): JSX.Element {
    return (
        <div className="space-y-2">
            <Card>
                <div className="space-y-1">
                    <h4 className="text-lg font-bold text-neutral-800 ">
                        Master Of Technology
                    </h4>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaGraduationCap className="w-5 h-5 shrink-0" />
                        <p className="text-base text-neutral-600 ">
                            Computer Science and Engineering
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaUniversity className="w-5 h-5 shrink-0" />
                        <p className="text-base text-neutral-600 ">
                            Madan Mohan Malaviya University Of Technology
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaLocationDot className="w-5 h-5 shrink-0" />
                        <p className="text-base text-neutral-600 ">
                            Gorakhpur, Uttar Pradesh, India
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <MdOutlineDateRange className="w-5 h-5 shrink-0" />
                        <p className="text-base text-neutral-600 ">
                            August 2022 - July 2024
                        </p>
                    </div>
                    <p className="text-base font-bold">Publication:</p>
                    <ul className="list-disc list-inside">
                        <a href="https://ijercse.com/quantum-machine-learning.php">
                            <li className="underline underline-offset-4 mb-1">
                                Quantum Machine Learning and its Applications in
                                Disease Detection
                            </li>
                        </a>
                    </ul>
                </div>
            </Card>

            <Card>
                <div className="space-y-1">
                    <h4 className="text-lg font-bold text-neutral-800 ">
                        Bachelor Of Technology
                    </h4>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaGraduationCap className="w-5 h-5 shrink-0" />
                        <p className="text-base text-neutral-600 ">
                            Computer Science and Engineering
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaUniversity className="w-5 h-5 shrink-0" />
                        <p className="text-base text-neutral-600 ">
                            Babu Banarasi Das Institute Of Technology nd
                            Management
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaLocationDot className="w-5 h-5 shrink-0" />
                        <p className="text-base text-neutral-600 ">
                            Lucknow, Uttar Pradesh, India
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <MdOutlineDateRange className="w-5 h-5 shrink-0" />
                        <p className="text-base text-neutral-600 ">
                            August 2018 - May 2022
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
