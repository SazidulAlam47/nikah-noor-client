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
            count: isPending ? "..." : stats?.totalBiodata,
        },
        {
            icon: male,
            title: "Total Groom's Biodatas",
            count: isPending ? "..." : stats?.maleBiodata,
        },
        {
            icon: female,
            title: "Total Bride's Biodatas",
            count: isPending ? "..." : stats?.femaleBiodata,
        },
        {
            icon: married,
            title: "Total Successful Marriages",
            count: isPending ? "..." : stats?.totalReview,
        },
    ];
    return counterData;
};

export default useCounterData;
