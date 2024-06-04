import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useOwnBiodata = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: ownBiodata, isPending } = useQuery({
        queryKey: ["my-biodata", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/biodatas/email/${user?.email}`);
            return res.data;
        },
    });

    return { ownBiodata, isPending };
};

export default useOwnBiodata;
