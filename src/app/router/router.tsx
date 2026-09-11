import { createBrowserRouter } from "react-router";
import { BlankLayout } from "@layouts/BlankLayout";
import { LoginPage } from "@domains/auth/pages/LoginPage";
import { MainLayout } from "@layouts/MainLayout";
import { ResumePage } from "@domains/resume/pages/ResumePage";

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
                element: <ResumePage />
            }
        ]
    }
])