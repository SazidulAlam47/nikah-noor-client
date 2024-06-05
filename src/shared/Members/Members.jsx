import { Typography } from "@material-tailwind/react";
import MemberCard from "./MemberCard";
import MemberCardSkeleton from "./MemberCardSkeleton";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Members = ({
    sidebar,
    bioDatas,
    isPending,
    totalPages,
    selectedPage,
    handlePageChange,
    isCountPending = false,
}) => {
    const location = useLocation();

    if (isPending || isCountPending) {
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
                <>
                    <div
                        className={`grid ${
                            sidebar
                                ? "grid-cols-1 gap-5"
                                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                        }`}
                    >
                        {bioDatas?.map((bioData) => (
                            <MemberCard
                                key={bioData.biodataId}
                                bioData={bioData}
                            />
                        ))}
                    </div>
                    {location.pathname === "/biodatas" && (
                        <div className="text-center pt-8">
                            <ReactPaginate
                                pageCount={totalPages}
                                forcePage={selectedPage}
                                nextLabel="Next >"
                                previousLabel="< Previous"
                                onPageChange={handlePageChange}
                                containerClassName="inline-flex -space-x-px text-base h-10"
                                pageLinkClassName="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                nextLinkClassName="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                previousLinkClassName="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                breakLinkClassName="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                activeLinkClassName="bg-gray-900 text-white hover:bg-gray-700 hover:text-white transition-all"
                            />
                        </div>
                    )}
                </>
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
    totalPages: PropTypes.number,
    selectedPage: PropTypes.number,
    handlePageChange: PropTypes.func,
    isCountPending: PropTypes.bool,
};

export default Members;
