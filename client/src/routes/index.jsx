import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import ErrorComp from "../components/ErrorComp";
import SignUp from "../components/SignUp";
import Dashboard from "../components/Dashboard";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";

const RouterData = () => {
    const strictRoute = createBrowserRouter([
        {
            path: '/',
            element: <Dashboard />,
            errorElement: <ErrorComp />
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/signup',
            element: <SignUp />,
        },
        {
            path: '/forgot-password',
            element: <ForgotPassword />,
        },
        {
            path: '/reset-password/:token',
            element: <ResetPassword />,
        }
    ])
    return strictRoute;
}
export default RouterData;