import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { biodataId } = useParams();

    const { data: bioDatas, isPending } = useQuery({
        queryKey: ["member"],
        queryFn: async () => {
            const res = await axios.get("/data/biodata.json");
            return res.data;
        },
    });

    const biodata = bioDatas?.find((item) => item.biodataId == biodataId);

    console.log(biodata);

    if (isPending) {
        return <p>Loading..</p>;
    }

    return (
        <div>
            <p>This is Profile</p>
        </div>
    );
};

export default Profile;
