import axios from "axios";
import { baseUrl } from "./useAxiosPublic";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const axiosSecure = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    axiosSecure.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            console.log("error", error);
            if (error.response.status === 401) {
                navigate("/login");
                await logOut();
            }
            if (error.response.status === 403) {
                navigate("/");
            }
            return Promise.reject(error);
        }
    );
    return axiosSecure;
};

export default useAxiosSecure;
