import { createBrowserRouter } from "react-router";
import { BlankLayout } from "@layouts/BlankLayout";
import { LoginPage } from "@domains/auth/pages/LoginPage";
import { MainLayout } from "@layouts/MainLayout";
import { HomePage } from "@domains/user/pages/HomePage";
import { CvsPage } from "@domains/user/pages/CvsPage";
import { EditorPage } from "@domains/admin/pages/EditorPage";
import { JobOffersPage } from "@/domains/admin/pages/JobOffersPage";

export const router = createBrowserRouter([
    {
        element: <BlankLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />,
            },
        ]
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/cvs',
                element: <CvsPage />
            },
            {
                path: '/editor',
                element: <EditorPage />
            },
            {
                path: '/job-offers',
                element: <JobOffersPage />
            }
        ]
    }
])