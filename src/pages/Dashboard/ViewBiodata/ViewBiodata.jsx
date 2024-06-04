import Loader from "../../../components/Loader/Loader";
import ProfileDetails from "../../Profile/ProfileDetails/ProfileDetails";
import { Helmet } from "react-helmet-async";
import useOwnBiodata from "../../../hooks/useOwnBiodata";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ViewBiodata = () => {
    const { ownBiodata, isPending, haveBiodata } = useOwnBiodata();

    if (isPending) {
        return <Loader />;
    }

    return (
        <>
            <Helmet>
                <title>Nikah Noor | View Biodata</title>
            </Helmet>
            {haveBiodata ? (
                <ProfileDetails biodata={ownBiodata} />
            ) : (
                <div className="h-full flex flex-col gap-5 justify-center items-center">
                    <Typography variant="h4">
                        You have not created any biodata yet.
                    </Typography>
                    <Link to="/dashboard/edit-biodata">
                        <Button>Create Biodata</Button>
                    </Link>
                </div>
            )}
        </>
    );
};

export default ViewBiodata;
