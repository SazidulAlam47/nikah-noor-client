import female from "../assets/icons/Female.png";
import male from "../assets/icons/Male.png";
import maleFemale from "../assets/icons/Male-Female.png";
import married from "../assets/icons/married.svg";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCounterData = () => {
    const axiosPublic = useAxiosPublic();

    const { data: stats, isPending } = useQuery({
        queryKey: ["public-stats"],
        queryFn: async () => {
            const res = await axiosPublic.get("/public-stats");
            return res.data;
        },
    });

    const counterData = [
        {
            icon: maleFemale,
            title: "Total Groom and Bride's Biodatas",
            count: isPending ? 0 : stats?.totalBiodata,
        },
        {
            icon: male,
            title: "Total Groom's Biodatas",
            count: isPending ? 0 : stats?.maleBiodata,
        },
        {
            icon: female,
            title: "Total Bride's Biodatas",
            count: isPending ? 0 : stats?.femaleBiodata,
        },
        {
            icon: married,
            title: "Total Successful Marriages",
            count: isPending ? 0 : stats?.totalReview,
        },
    ];
    return counterData;
};

export default useCounterData;
