import { Typography } from "@material-tailwind/react";
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
        <>
            {bioDatas?.length ? (
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
            ) : (
                <div className="h-[55vh] flex justify-center items-center">
                    <Typography variant="lead">
                        No biodata entries found for the selected filter
                        criteria
                    </Typography>
                </div>
            )}
        </>
    );
};

Members.propTypes = {
    sidebar: PropTypes.bool,
    bioDatas: PropTypes.array.isRequired,
    isPending: PropTypes.bool.isRequired,
};

export default Members;
