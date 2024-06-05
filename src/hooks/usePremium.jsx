import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePremium = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isPremium = false, isPending: isPremiumLoading } = useQuery({
        queryKey: ["isPremium", user?.email],
        enabled: !loading && Boolean(user),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/premium/${user?.email}`);
            return res?.data?.premium || false;
        },
    });

    return { isPremium, isPremiumLoading };
};

export default usePremium;
