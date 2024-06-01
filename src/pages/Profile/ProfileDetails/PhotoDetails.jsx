import { RiShareBoxFill } from "react-icons/ri";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import "./PhotoDetails.css";

const PhotoDetails = ({ biodata }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-5">
            <div className="w-full sm:w-fit sm:h-52 lg:h-60  xl:h-64 2xl:h-72 aspect-square rounded-lg overflow-hidden shadow-xl shadow-blue-gray-900/50 cursor-pointer relative">
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
                <Typography variant="lead">
                    <span className="font-bold">Biodata ID: </span>
                    {biodata?.biodataId}
                </Typography>
                <Typography variant="lead">
                    <span className="font-bold">Biodata Type: </span>
                    {biodata?.biodataType}
                </Typography>
                <Typography variant="lead">
                    <span className="font-bold">Name: </span>
                    {biodata?.name}
                </Typography>
                <Typography variant="lead">
                    <span className="font-bold">Age: </span>
                    {biodata?.age}
                </Typography>
                <Typography variant="lead">
                    <span className="font-bold">Permanent Division: </span>
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
