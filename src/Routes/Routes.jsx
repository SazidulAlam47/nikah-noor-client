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
import AdminRoute from "./AdminRoute";
import GotMarried from "../pages/Dashboard/GotMarried/GotMarried";
import AdminSuccessStory from "../pages/Dashboard/AdminPages/AdminSuccessStory/AdminSuccessStory";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
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
            {
                path: "got-married",
                element: <GotMarried />,
            },
            // admin only pages
            {
                path: "admin-dashboard",
                element: (
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>
                ),
            },
            {
                path: "manage-users",
                element: (
                    <AdminRoute>
                        <ManageUsers />
                    </AdminRoute>
                ),
            },
            {
                path: "approved-premium",
                element: (
                    <AdminRoute>
                        <ApprovedPremium />
                    </AdminRoute>
                ),
            },
            {
                path: "approved-contact-request",
                element: (
                    <AdminRoute>
                        <ApprovedContact />
                    </AdminRoute>
                ),
            },
            {
                path: "success-story",
                element: (
                    <AdminRoute>
                        <AdminSuccessStory />
                    </AdminRoute>
                ),
            },
        ],
    },
]);

export default router;
