import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
    return (
        <div className="bg-gradient-to-r from-[#6d0092] to-[#ac277c] py-12">
            <Typography variant="h2" color="white" className="text-center">
                {title}
            </Typography>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageTitle;
