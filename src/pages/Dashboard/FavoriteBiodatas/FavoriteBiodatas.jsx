import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

const FavoriteBiodatas = () => {
    return (
        <>
            <Helmet>
                <title>Nikah Noor | My Contact Requests</title>
            </Helmet>
            <SectionHeading
                title="Favorite Biodatas"
                subtitle="Review and manage your favorite profiles to keep track of potential matches"
            />
        </>
    );
};

export default FavoriteBiodatas;
