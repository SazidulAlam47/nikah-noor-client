import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivetRoute";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Checkout from "../pages/Dashboard/Checkout/Checkout";
import EditBiodata from "../pages/Dashboard/EditBiodata/EditBiodata";
import ViewBiodata from "../pages/Dashboard/ViewBiodata/ViewBiodata";
import ContactRequests from "../pages/Dashboard/ContactRequests/ContactRequests";
import FavoriteBiodatas from "../pages/Dashboard/FavoriteBiodatas/FavoriteBiodatas";
import AdminDashboard from "../pages/Dashboard/AdminPages/AdminDashboard/AdminDashboard";
import ManageUsers from "../pages/Dashboard/AdminPages/ManageUsers/ManageUsers";
import ApprovedPremium from "../pages/Dashboard/AdminPages/ApprovedPremium/ApprovedPremium";
import ApprovedContact from "../pages/Dashboard/AdminPages/ApprovedContact/ApprovedContact";

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
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/checkout/:biodataId",
                element: (
                    <PrivateRoute>
                        <Checkout />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: "checkout/:biodataId",
                element: <Checkout />,
            },
            {
                path: "edit-biodata",
                element: <EditBiodata />,
            },
            {
                path: "view-biodata",
                element: <ViewBiodata />,
            },
            {
                path: "contact-requests",
                element: <ContactRequests />,
            },
            {
                path: "favorite-biodatas",
                element: <FavoriteBiodatas />,
            },
            // admin only pages
            {
                path: "admin-dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "manage-users",
                element: <ManageUsers />,
            },
            {
                path: "approved-premium",
                element: <ApprovedPremium />,
            },
            {
                path: "approved-contact-request",
                element: <ApprovedContact />,
            },
        ],
    },
]);

export default router;
