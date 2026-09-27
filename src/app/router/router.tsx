import { createBrowserRouter } from 'react-router'

import { BlankLayout } from '@layouts/BlankLayout'
import { MainLayout } from '@layouts/MainLayout'

import { ProtectedRoute } from './ProtectedRoute'
import { PublicOnlyRoute } from './PublicOnlyRoute'

import { LoginPage } from '@domains/auth/pages/LoginPage'
import { HomePage } from '@domains/user/pages/HomePage'
import { CvsPage } from '@domains/user/pages/CvsPage'
import { EditorPage } from '@domains/admin/pages/EditorPage'
import { JobOffersPage } from '@domains/admin/pages/JobOffersPage'

import { NotFoundPage } from '@/pages/error/NotFoundPage'
import { UnexpectedErrorPage } from '@/pages/error/UnexpectedErrorPage'

export const router = createBrowserRouter([
    {
        errorElement: <UnexpectedErrorPage />,
        children: [
            {
                element: <PublicOnlyRoute />,
                children: [
                    {
                        element: <BlankLayout />,
                        children: [
                            {
                                path: '/login',
                                element: <LoginPage />
                            }
                        ]
                    }
                ]
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '/',
                        element: <MainLayout />,
                        children: [
                            { index: true, element: <HomePage /> },
                            { path: 'cvs', element: <CvsPage /> },
                            { path: 'editor', element: <EditorPage /> },
                            { path: 'job-offers', element: <JobOffersPage /> }
                        ]
                    }
                ]
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
])