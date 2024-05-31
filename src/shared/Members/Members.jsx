import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MemberCard from "./MemberCard";
import MemberCardSkeleton from "./MemberCardSkeleton";

const Members = () => {
    const { data: bioDatas, isPending } = useQuery({
        queryKey: ["members"],
        queryFn: async () => {
            const res = await axios.get("/data/biodata.json");
            return res.data;
        },
    });

    if (isPending) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array(6)
                    .fill(null)
                    .map((_, index) => (
                        <MemberCardSkeleton key={index} />
                    ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bioDatas?.map((bioData) => (
                <MemberCard key={bioData.biodataId} bioData={bioData} />
            ))}
        </div>
    );
};

export default Members;
