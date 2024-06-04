import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin = false, isPending: isAdminLoading } = useQuery({
        queryKey: ["isAdmin", user?.email],
        enabled: !loading && Boolean(user),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res?.data?.admin || false;
        },
    });

    return { isAdmin, isAdminLoading };
};

export default useAdmin;
