import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { AppLayout } from './pages/_lauyout/app'
import { AuthLayout } from './pages/_lauyout/auth'
import { SignUp } from './pages/auth/sign-up'
import { Orders } from './pages/app/orders/orders'



export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,

        children: [{
            path: '/',
            element: <Dashboard />

        }]

    },
    {
        path: '/orders', element: <AppLayout />,

        children: [{
            path: '/orders',
            element: <Orders />

        }]

    },


    {
        path: '/sign-in', element: <AuthLayout />,

        children: [{
            path: '/sign-in',
            element: <SignIn />

        }]
    },
    {
        path: '/sign-up', element: <AuthLayout />,

        children: [{
            path: '/sign-up',
            element: <SignUp />

        }]
    },


])