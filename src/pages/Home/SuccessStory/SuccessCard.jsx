import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import moment from "moment";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const SuccessCard = ({ story }) => {
    return (
        <div className="mx-2 my-4 h-full">
            <Card className="w-full h-full shadow-lg">
                <CardHeader floated={false} color="blue-gray">
                    <div className="w-full aspect-square overflow-hidden">
                        <img
                            src={story.image}
                            alt="couple"
                            className="w-full"
                        />
                    </div>
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
                <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="font-medium text-lg"
                        >
                            Marriage Date :{" "}
                            {moment(story.marriageDate).format("Do MMM, YYYY")}
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="flex items-center gap-1.5 font-normal"
                        >
                            <FaStar className="text-[#fbc02d]" />
                            {story.reviewStar}
                        </Typography>
                    </div>
                    <Typography color="gray">
                        {story.successStoryText}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

SuccessCard.propTypes = {
    story: PropTypes.object.isRequired,
};

export default SuccessCard;
