import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import { Button, Card, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Loader/Loader";
import { Link } from "react-router-dom";

const TABLE_HEAD = [
    "Name",
    "Biodata Id",
    "Mobile No",
    "Email",
    "Payment Method",
    "Payment Status",
    "View Biodata",
];

const ContactRequests = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: requests, isPending } = useQuery({
        queryKey: ["my-requests", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get("/payments/user");
            return res.data;
        },
    });

    if (isPending) {
        return <Loader />;
    }

    return (
        <>
            <Helmet>
                <title>Nikah Noor | My Contact Requests</title>
            </Helmet>
            <SectionHeading
                title="My Contact Requests"
                subtitle="Manage your sent and received contact requests to connect with potential partners"
            />
            <div className="mt-8">
                {requests?.length ? (
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
                                {requests?.map(
                                    ({
                                        _id,
                                        requestedName,
                                        requestedId,
                                        requestedMobileNumber,
                                        requestedEmail,
                                        paymentMethod,
                                        status,
                                    }) => (
                                        <tr
                                            key={_id}
                                            className="even:bg-blue-gray-50/50"
                                        >
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {requestedName}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {requestedId}
                                                </Typography>
                                            </td>

                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {requestedMobileNumber}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {requestedEmail}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {paymentMethod}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {status}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Link
                                                    to={`/profile/${requestedId}`}
                                                >
                                                    <Button size="sm">
                                                        View
                                                    </Button>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </Card>
                ) : (
                    <div className="flex items-center justify-center h-[55vh]">
                        <Typography variant="lead">
                            You don&apos;t have any Contact Requests
                        </Typography>
                    </div>
                )}
            </div>
        </>
    );
};

export default ContactRequests;
