import { Outlet } from 'react-router'
import { Header } from "@components/layouts/Header"
import { SideBar } from "@components/layouts/SideBar"

export function MainLayout() {
    return (
        <div className="flex min-h-screen bg-background">
            <SideBar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main id="main" className="flex-1 overflow-y-auto p-4 sm:px-6 lg:px-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
