import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import { Button, Card, Typography } from "@material-tailwind/react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/Loader/Loader";
import Swal from "sweetalert2";

const TABLE_HEAD = [
    "User name",
    "User email",
    "Requested Biodata Id",
    "Payment Method",
    "Payment Status",
    "Approve",
    "Delete",
];

const ApprovedContact = () => {
    const axiosSecure = useAxiosSecure();

    const {
        data: requests,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["request-admin"],
        queryFn: async () => {
            const res = await axiosSecure.get("/payments/admin");
            return res.data;
        },
    });

    const handleApprove = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.get(`/payments/approve/${_id}`).then((res) => {
                    console.log(res.data);
                    if (res.data.matchedCount > 0) {
                        Swal.fire({
                            icon: "success",
                            title: "Request Approved!",
                            text: "The Request has been approved successfully.",
                            showConfirmButton: false,
                            timer: 2000,
                        });
                        // update UI
                        refetch();
                    }
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Cancelled",
                    text: "The Request is Cancelled",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        });
    };

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/payments/${_id}`).then((res) => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "The Biodata has been deleted from Favorites.",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 2000,
                        });
                        //remove from UI
                        refetch();
                    }
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Cancelled",
                    text: "The Biodata remains safe",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        });
    };

    if (isPending) {
        return <Loader />;
    }

    return (
        <>
            <Helmet>
                <title>Nikah Noor | Approve Contact Requests</title>
            </Helmet>
            <SectionHeading
                title="Approve Contact Requests"
                subtitle="View and manage contact requests that have been approved by the admin"
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
                                        userName,
                                        userEmail,
                                        requestedId,
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
                                                    {userName}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {userEmail}
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
                                                <Button
                                                    disabled={
                                                        status === "Approved"
                                                    }
                                                    onClick={() =>
                                                        handleApprove(_id)
                                                    }
                                                    size="sm"
                                                >
                                                    Approve
                                                </Button>
                                            </td>
                                            <td className="p-4">
                                                <Button
                                                    onClick={() =>
                                                        handleDelete(_id)
                                                    }
                                                    size="sm"
                                                >
                                                    Delete
                                                </Button>
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
                            There is no Contact Requests at this moment
                        </Typography>
                    </div>
                )}
            </div>
        </>
    );
};

export default ApprovedContact;
