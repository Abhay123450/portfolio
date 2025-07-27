import { useContext } from "react";
import { Card } from "./Card";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { themeContext } from "../contexts/ThemeContext";

export function Education(): JSX.Element {
    const theme = useContext(themeContext);

    return (
        <div className="space-y-2 mb-2">
            <Card>
                <div
                    className={`space-y-1 ${
                        theme === "light"
                            ? "bg-white text-neutral-600"
                            : " text-neutral-400"
                    }`}
                >
                    <h4
                        className={`text-lg font-bold ${
                            theme === "light"
                                ? "text-neutral-800"
                                : "text-neutral-300"
                        }`}
                    >
                        Master Of Technology
                    </h4>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaGraduationCap className="w-5 h-5 shrink-0" />
                        <p className="text-base ">
                            Computer Science and Engineering
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaUniversity className="w-5 h-5 shrink-0" />
                        <p className="text-base  ">
                            Madan Mohan Malaviya University Of Technology
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaLocationDot className="w-5 h-5 shrink-0" />
                        <p className="text-base  ">
                            Gorakhpur, Uttar Pradesh, India
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <MdOutlineDateRange className="w-5 h-5 shrink-0" />
                        <p className="text-base  ">August 2022 - July 2024</p>
                    </div>
                    <p className="text-base font-bold">Publication:</p>
                    <ul className="list-disc list-inside">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://ijercse.com/quantum-machine-learning.php"
                        >
                            <li className="underline underline-offset-4 mb-1">
                                Quantum Machine Learning and its Applications in
                                Disease Detection
                            </li>
                        </a>
                    </ul>
                    <p className="text-base ms-6">
                        <b>Abstract:</b> With the rapid development of Machine
                        Learning (ML) and Artificial Intelligence (AI) and its
                        diverse use cases, training these models has become very
                        difficult and time-consuming, more so because of the
                        huge amount of data required to increase the model's
                        accuracy. With the recent development in the field of
                        Quantum Computing, the hope is that it will solve ML
                        problems efficiently. This paper gives a brief
                        introduction to quantum computing and one of its use
                        cases – Quantum Machine Learning (QML). It also covers
                        some quantum machine learning algorithms like Quantum
                        Support Vector Machine (QSVM), Quantum k-nearest
                        Neighbour (Q-kNN), Quantum K Means Clustering and
                        Quantum Neural Networks (QNN), which can be used to
                        solve various types of problems more efficiently than
                        classical ML algorithms. Further, it discusses some
                        notable use cases of QML in the field of healthcare like
                        image classification and disease detection. Finally, it
                        talks about the challenges and future scope of QML.
                    </p>
                    <p className="text-base font-bold">Dissertation:</p>
                    <ul className="list-disc list-inside">
                        <li className="mb-1">
                            <b>Title:</b> Parkinson’s Disease Detection Using
                            Quantum Support Vector Classifier
                        </li>
                    </ul>
                    <p className="text-base ms-6">
                        <b>Abstract:</b> Quantum Machine Learning is a rapidly
                        evolving field that uses quantum physics phenomena such
                        as superposition and entanglement to solve machine
                        learning problems. This study makes use of a quantum
                        support vector classifier (QSVC) algorithm for the
                        detection of Parkinson’s disease (PD) and compares it to
                        the classical support vector classifier (SVC). The
                        algorithms are applied to two different datasets for the
                        classification of PD. On the first dataset, the
                        classical SVC model has an accuracy of 92% while the
                        QSVC model has an accuracy of 90%. On the second
                        dataset, the SVC model has an accuracy of 90% while the
                        QSVC model has an accuracy of 85%.
                    </p>
                </div>
            </Card>

            <Card>
                <div
                    className={`space-y-1 ${
                        theme === "light"
                            ? "bg-white text-neutral-600"
                            : " text-neutral-400"
                    }`}
                >
                    <h4
                        className={`text-lg font-bold ${
                            theme === "light"
                                ? "text-neutral-800"
                                : "text-neutral-300"
                        }`}
                    >
                        Bachelor Of Technology
                    </h4>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaGraduationCap className="w-5 h-5 shrink-0" />
                        <p className="text-base ">
                            Computer Science and Engineering
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaUniversity className="w-5 h-5 shrink-0" />
                        <p className="text-base ">
                            Babu Banarasi Das Institute of Technology and
                            Management
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaLocationDot className="w-5 h-5 shrink-0" />
                        <p className="text-base ">
                            Lucknow, Uttar Pradesh, India
                        </p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <MdOutlineDateRange className="w-5 h-5 shrink-0" />
                        <p className="text-base ">August 2018 - May 2022</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
