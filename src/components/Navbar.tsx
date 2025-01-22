import Navlink from "./Navlink";

function Navbar() {
    const navlinks = ["For Recruiters", "My Skills"] as const;
    return (
        <div className="flex flex-row items-center justify-center space-x-4">
            {navlinks.map((linkname, i) => {
                return (
                    <Navlink
                        key={i}
                        linkName={linkname}
                        onClick={handleClick}
                    />
                );
            })}
        </div>
    );

    function handleClick(navlink: string) {
        let scrollToElement: HTMLElement | null = null;

        switch (navlink) {
            case "For Recruiters":
                scrollToElement = document.getElementById(
                    "message-for-recruiter"
                );
                break;
        }

        if (scrollToElement) {
            scrollToElement.scrollIntoView({ behavior: "smooth" });
        }
    }
}

export default Navbar;
