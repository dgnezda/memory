import SideNav from "../ui/side-nav"

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col lg:flex-row lg:overflow-hidden">
            <div className="w-full flex-none lg:w-[166px]">
                <SideNav />
            </div>
            <div className="flex-col h-screen w-screen items-center justify-center">{children}</div>
        </div>
    )
}