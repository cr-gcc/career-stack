import { Outlet } from 'react-router'
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"

export function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main id="main" className="bg-main flex-1 p-4 mb-18">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}
