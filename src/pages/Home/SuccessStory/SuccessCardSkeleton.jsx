import Skeleton from "react-loading-skeleton";

const SuccessCardSkeleton = () => {
    return (
        <div className="space-y-2">
            <div>
                <Skeleton className="aspect-square" />
            </div>
            <div className="flex justify-between">
                <Skeleton width={200} />
                <Skeleton width={50} />
            </div>
            <div>
                <Skeleton count={2} />
                <Skeleton width={250} />
            </div>
        </div>
    );
};

export default SuccessCardSkeleton;
