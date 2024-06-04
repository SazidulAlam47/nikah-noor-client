import MemberCard from "./MemberCard";
import MemberCardSkeleton from "./MemberCardSkeleton";
import PropTypes from "prop-types";

const Members = ({ sidebar, bioDatas, isPending }) => {
    if (isPending) {
        return (
            <div
                className={`grid grid-cols-1 ${
                    sidebar || "md:grid-cols-2 lg:grid-cols-3"
                } gap-5`}
            >
                {Array(6)
                    .fill(null)
                    .map((_, index) => (
                        <MemberCardSkeleton key={index} />
                    ))}
            </div>
        );
    }

    return (
        <div
            className={`grid ${
                sidebar
                    ? "grid-cols-1 gap-5"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            }`}
        >
            {bioDatas?.map((bioData) => (
                <MemberCard key={bioData.biodataId} bioData={bioData} />
            ))}
        </div>
    );
};

Members.propTypes = {
    sidebar: PropTypes.bool,
    bioDatas: PropTypes.array.isRequired,
    isPending: PropTypes.bool.isRequired,
};

export default Members;
