import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import { Button, Card, Typography } from "@material-tailwind/react";
import useMakePremium from "../../../../hooks/useMakePremium";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loader from "../../../../components/Loader/Loader";

const TABLE_HEAD = ["User name", "User email", " Biodata Id", "Make premium"];

const ApprovedPremium = () => {
    const axiosSecure = useAxiosSecure();

    const {
        data: pendingPremiums,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["pending-premium"],
        queryFn: async () => {
            const res = await axiosSecure.get("/biodatasPremium");
            return res.data;
        },
    });

    const handleMakePremium = useMakePremium(refetch);

    if (isPending) {
        return <Loader />;
    }

    return (
        <>
            <Helmet>
                <title>Nikah Noor | Approved Premium Members</title>
            </Helmet>
            <SectionHeading
                title="Approved Premium Members"
                subtitle="Review and manage users who have been granted premium membership"
            />
            <div className="mt-8">
                {pendingPremiums?.length ? (
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
                                {pendingPremiums?.map(
                                    (
                                        { name, contactEmail, biodataId },
                                        index
                                    ) => (
                                        <tr
                                            key={index}
                                            className="even:bg-blue-gray-50/50"
                                        >
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {name}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {contactEmail}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {biodataId}
                                                </Typography>
                                            </td>

                                            <td className="p-4">
                                                <Button
                                                    size="sm"
                                                    onClick={() =>
                                                        handleMakePremium(
                                                            biodataId,
                                                            name
                                                        )
                                                    }
                                                >
                                                    Make premium
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
                            There are no pending premium membership requests
                        </Typography>
                    </div>
                )}
            </div>
        </>
    );
};

export default ApprovedPremium;
