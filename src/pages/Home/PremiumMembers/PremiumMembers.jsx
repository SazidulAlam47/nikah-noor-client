import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container/Container";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Members from "../../../shared/Members/Members";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

const PremiumMembers = () => {
    const axiosPublic = useAxiosPublic();

    const { data: bioDatas, isPending } = useQuery({
        queryKey: ["members", "premium"],
        queryFn: async () => {
            const res = await axiosPublic.get("/premiums?count=6");
            return res.data;
        },
    });

    return (
        <Container py>
            <SectionHeading
                title="Meet Our Premium Members"
                subtitle="Explore profiles of our most active and committed members"
            />
            <Members bioDatas={bioDatas} isPending={isPending} />
        </Container>
    );
};

export default PremiumMembers;
