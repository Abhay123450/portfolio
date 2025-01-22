import { Card } from "./Card";

export function Message(): JSX.Element {
    const heading = "A message for the recruiter";
    const message = `I am a fullstack software developer with a strong focus on backend development, specializing in the JavaScript and Node.js ecosystem. I completed my Master of Technology in July 2024, and for the past two years, I have developed an in-depth understanding of both JavaScript and Node.js through hands-on experience. While I do not yet have formal professional experience, I have worked on freelance projects that allowed me to manage the full lifecycle of application development, from initial development to production deployment. I am now actively seeking a full-time software developer position to further my career.`;

    return (
        <section id="message-for-recruiter" className="mt-2">
            <Card>
                <div className="w-fit bg-white pb-2">
                    <h4 className="text-lg font-bold text-neutral-800 ">
                        {heading}
                    </h4>
                    <div className="h-2 w-full bg-orange-500 rounded"></div>
                </div>
                <p className="text-base text-neutral-800 font-serif text-justify">
                    {message}
                </p>
            </Card>
        </section>
    );
}
