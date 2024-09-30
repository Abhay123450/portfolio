export function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full px-2 py-2 bg-white border rounded-md shadow-lg">
            {children}
        </div>
    );
}
