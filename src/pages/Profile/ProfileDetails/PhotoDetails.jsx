import { RiShareBoxFill } from "react-icons/ri";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import "./PhotoDetails.css";

const PhotoDetails = ({ biodata }) => {
    return (
        <div className="flex gap-4">
            <div className="h-52 aspect-square rounded-lg overflow-hidden shadow-xl shadow-blue-gray-900/50 cursor-pointer relative">
                <PhotoProvider>
                    <PhotoView src={biodata.profileImage}>
                        <img src={biodata.profileImage} alt={biodata?.name} />
                    </PhotoView>
                </PhotoProvider>
                <RiShareBoxFill
                    size={20}
                    className="z-10 absolute top-1 right-1"
                />
            </div>
            <div className="flex flex-col justify-center">
                <Typography variant="lead" className="flex items-center gap-3">
                    <Typography variant="h5">Biodata ID:</Typography>
                    {biodata?.biodataId}
                </Typography>
                <Typography variant="lead" className="flex items-center gap-3">
                    <Typography variant="h5">Biodata Type:</Typography>
                    {biodata?.biodataType}
                </Typography>
                <Typography variant="lead" className="flex items-center gap-3">
                    <Typography variant="h5">Name:</Typography>
                    {biodata?.name}
                </Typography>
                <Typography variant="lead" className="flex items-center gap-3">
                    <Typography variant="h5">Age:</Typography>
                    {biodata?.age}
                </Typography>
                <Typography variant="lead" className="flex items-center gap-3">
                    <Typography variant="h5">Permanent Division:</Typography>
                    {biodata?.permanentDivision}
                </Typography>
            </div>
        </div>
    );
};

PhotoDetails.propTypes = {
    biodata: PropTypes.object.isRequired,
};

export default PhotoDetails;
