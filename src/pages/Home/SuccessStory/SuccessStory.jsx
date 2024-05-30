import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SuccessCard from "./SuccessCard";
import Container from "../../../components/Container/Container";

const SuccessStory = () => {
    const { data: stories, isPending } = useQuery({
        queryKey: ["success-sotries"],
        queryFn: async () => {
            const res = await axios.get("/data/success.json");
            return res.data;
        },
    });

    if (isPending) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 py-12 gap-5">
                {stories?.map((story) => (
                    <SuccessCard key={story._id} story={story} />
                ))}
            </div>
        </Container>
    );
};

export default SuccessStory;
