import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import Members from "../../shared/Members/Members";
import { Typography } from "@material-tailwind/react";
import Loader from "../../components/Loader/Loader";

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
        return <Loader />;
    }

    return (
        <>
            <Helmet>
                <title>Nikah Noor | {biodata?.name}</title>
            </Helmet>
            <Container>
                <div className="flex flex-col lg:flex-row">
                    <div className="px-1 sm:px-5 md:px-8 lg:w-[70%] py-12">
                        <ProfileDetails biodata={biodata} />
                    </div>
                    <aside className="lg:w-[30%] lg:border-l lg:py-10 lg:px-6">
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="text-center font-prociono"
                        >
                            Similar biodatas
                        </Typography>
                        <Members sidebar />
                    </aside>
                </div>
            </Container>
        </>
    );
};

export default Profile;
