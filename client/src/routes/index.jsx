import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import ErrorComp from "../components/ErrorComp";
import SignUp from "../components/SignUp";
import Dashboard from "../components/Dashboard";

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
        }
    ])
    return strictRoute;
}
export default RouterData;