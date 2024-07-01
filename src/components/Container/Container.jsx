import PropTypes from "prop-types";

const Container = ({ children, py }) => {
    return (
        <div
            className={`max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ${
                py && "py-12"
            }`}
        >
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    py: PropTypes.bool,
};

export default Container;
