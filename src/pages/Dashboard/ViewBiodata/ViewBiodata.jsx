import Loader from "../../../components/Loader/Loader";
import ProfileDetails from "../../Profile/ProfileDetails/ProfileDetails";
import { Helmet } from "react-helmet-async";
import useOwnBiodata from "../../../hooks/useOwnBiodata";

const ViewBiodata = () => {
    const { ownBiodata, isPending } = useOwnBiodata();

    if (isPending) {
        return <Loader />;
    }

    return (
        <>
            <Helmet>
                <title>Nikah Noor | View Biodata</title>
            </Helmet>
            <ProfileDetails biodata={ownBiodata} self />
        </>
    );
};

export default ViewBiodata;
