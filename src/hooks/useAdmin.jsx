import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data: isAdmin = false, isPending: isAdminLoading } = useQuery({
        queryKey: ["isAdmin", user?.email],
        enabled: !loading && Boolean(user),
        queryFn: async () => {
            const res = await axiosSecure.get("/users/admin");
            return res?.data?.admin || false;
        },
    });

    return { isAdmin, isAdminLoading };
};

export default useAdmin;
