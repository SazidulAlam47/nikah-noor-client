import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import Members from "../../shared/Members/Members";
import { Typography } from "@material-tailwind/react";
import Loader from "../../components/Loader/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Profile = () => {
    const { biodataId } = useParams();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: biodata, isPending } = useQuery({
        queryKey: ["member", biodataId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/biodatas/${biodataId}`);
            return res.data;
        },
    });

    const { data: sideBiodatas, isPending: sidePending } = useQuery({
        queryKey: ["members", biodata?.biodataType, biodata?.biodataId],
        queryFn: async () => {
            const res = await axiosPublic.get(
                `/biodatasWithType?type=${biodata?.biodataType}&count=3&skip=${biodata?.biodataId}`
            );
            return res.data;
        },
    });

    if (isPending && sidePending) {
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
                        <Members
                            sidebar
                            bioDatas={sideBiodatas}
                            isPending={sidePending}
                        />
                    </aside>
                </div>
            </Container>
        </>
    );
};

export default Profile;
