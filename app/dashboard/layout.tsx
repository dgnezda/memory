import SideNav from "../ui/sidenav"

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-[166px]">
                <SideNav />
            </div>
            <div className="flex-col h-screen w-screen items-center justify-center">{children}</div>
        </div>
    )
}