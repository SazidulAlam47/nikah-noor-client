import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = ({ width }) => {
    return (
        <Link
            to="/"
            className={`inline-block ${width ? `w-${width}` : "w-24"}`}
        >
            <img src="/logo.png" alt="logo" className="w-full" />
        </Link>
    );
};

Logo.propTypes = {
    width: PropTypes.string,
};

export default Logo;
