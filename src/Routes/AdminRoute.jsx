import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loader from "../components/Loader/Loader";

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    const { isAdmin, isAdminLoading } = useAdmin();

    if (loading || isAdminLoading) {
        return <Loader />;
    }

    if (user && isAdmin) {
        return children;
    }

    toast.warn("Access Denied", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    return <Navigate state={location.pathname} to="/"></Navigate>;
};

AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminRoute;
