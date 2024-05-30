import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MemberCard from "./MemberCard";
import Container from "../../components/Container/Container";

const Members = () => {
    const { data: bioDatas, isPending } = useQuery({
        queryKey: ["premium-members"],
        queryFn: async () => {
            const res = await axios.get("/data/biodata.json");
            return res.data;
        },
    });

    if (isPending) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 py-12 gap-5">
                {bioDatas?.map((bioData) => (
                    <MemberCard key={bioData.biodataId} bioData={bioData} />
                ))}
            </div>
        </Container>
    );
};

export default Members;
