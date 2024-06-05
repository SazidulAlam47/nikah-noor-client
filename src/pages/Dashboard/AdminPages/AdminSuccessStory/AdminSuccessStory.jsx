import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import {
    Button,
    Card,
    Typography,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/Loader/Loader";
import { useState } from "react";
import SuccessCard from "../../../Home/SuccessStory/SuccessCard";

const TABLE_HEAD = ["Male Biodata Id", "Female Biodata Id", ""];

const AdminSuccessStory = () => {
    const axiosSecure = useAxiosSecure();
    const [open, setOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState({});

    const handleOpen = (review) => {
        setOpen(!open);
        setSelectedReview(review);
    };

    const { data: reviews, isPending } = useQuery({
        queryKey: ["reviews-admin"],
        queryFn: async () => {
            const res = await axiosSecure.get("/reviews");
            return res.data;
        },
    });

    if (isPending) {
        return <Loader />;
    }

    return (
        <>
            <Helmet>
                <title>Nikah Noor | Success Stories</title>
            </Helmet>
            <SectionHeading
                title="Success Stories"
                subtitle="View and manage contact requests that have been approved by the admin"
            />
            <div className="mt-8">
                {reviews?.length ? (
                    <Card className="h-fit w-full overflow-x-auto">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {reviews?.map((review) => (
                                    <tr
                                        key={review._id}
                                        className="even:bg-blue-gray-50/50"
                                    >
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {review.maleBiodataId}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {review.femaleBiodataId}
                                            </Typography>
                                        </td>

                                        <td className="p-4">
                                            <Button
                                                size="sm"
                                                onClick={() =>
                                                    handleOpen(review)
                                                }
                                            >
                                                View Story
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                ) : (
                    <div className="flex items-center justify-center h-[55vh]">
                        <Typography variant="lead">
                            There is no Success Story at this moment
                        </Typography>
                    </div>
                )}
            </div>
            <Dialog
                size="md"
                open={open}
                handler={handleOpen}
                className="overflow-y-scroll h-full"
            >
                <DialogBody>
                    <SuccessCard story={selectedReview} noShadow />
                </DialogBody>
                <DialogFooter>
                    <Button onClick={() => setOpen(!open)}>
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default AdminSuccessStory;
