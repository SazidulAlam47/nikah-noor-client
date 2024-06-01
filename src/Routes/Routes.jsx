import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Auth/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "biodatas",
                element: <Biodatas />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "/profile/:biodataId",
                element: <Profile />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;
