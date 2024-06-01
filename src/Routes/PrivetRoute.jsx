import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();

    if (loading) {
        return <Loader />;
    }

    if (user) {
        return children;
    }

    toast.warn("Access Denied: Please Log In", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
