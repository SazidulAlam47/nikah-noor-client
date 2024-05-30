import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const SectionHeading = ({ title, subtitle }) => {
    return (
        <div className="text-center pb-2">
            <Typography variant="h2" className="font-prociono">
                {title}
            </Typography>
            <Typography variant="paragraph" className="text-gray-700">
                {subtitle}
            </Typography>
        </div>
    );
};

SectionHeading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default SectionHeading;
