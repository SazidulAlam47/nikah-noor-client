import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../../components/Loader/Loader";
import ProfileDetails from "../../Profile/ProfileDetails/ProfileDetails";
import { Helmet } from "react-helmet-async";

const ViewBiodata = () => {
    const { data: biodata, isPending } = useQuery({
        queryKey: ["my-biodata"],
        queryFn: async () => {
            const res = await axios.get("/data/mybiodata.json");
            return res.data;
        },
    });

    if (isPending) {
        return <Loader />;
    }

    return (
        <>
            <Helmet>
                <title>Nikah Noor | View Biodata</title>
            </Helmet>
            <ProfileDetails biodata={biodata} self />
        </>
    );
};

export default ViewBiodata;
