import Skeleton from "react-loading-skeleton";

const MemberCardSkeleton = () => {
    return (
        <div className="space-y-3">
            <div>
                <Skeleton className="w-full aspect-square" />
            </div>
            <div className="space-y-1">
                {Array(4)
                    .fill(null)
                    .map((_, index) => (
                        <div key={index} className="flex justify-evenly">
                            <Skeleton width={100} />
                            <Skeleton width={100} />
                        </div>
                    ))}
            </div>
            <div className="text-center">
                <Skeleton width={100} height={20} />
            </div>
        </div>
    );
};

export default MemberCardSkeleton;
