import axios from "axios";

// export const baseUrl = "http://localhost:5000";
export const baseUrl = "https://nikah-noor-server.vercel.app/";

const axiosPublic = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
