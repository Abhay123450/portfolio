function Navlink({
    linkName,
    onClick
}: {
    linkName: string;
    onClick: (navlink: string) => void;
}) {
    return (
        <div
            onClick={() => onClick(linkName)}
            role="button"
            className="flex flex-row items-center align-middle px-3 py-1 hover:text-orange-500 active:text-orange-500"
        >
            {linkName}
        </div>
    );
}

export default Navlink;
