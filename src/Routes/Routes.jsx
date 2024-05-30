import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas";

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
        ],
    },
]);

export default router;
