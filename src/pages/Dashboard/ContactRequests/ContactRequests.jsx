import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Biodata Id", "Status", "Mobile No", "Email", ""];

const ContactRequests = () => {
    const TABLE_ROWS = [
        {
            name: "John Michael",
            biodataId: "2",
            status: "Pending",
            mobileNumber: "+8801712345678",
            contactEmail: "john.michael.com",
        },
        {
            name: "John Michael",
            biodataId: "2",
            status: "Pending",
            mobileNumber: "+8801712345678",
            contactEmail: "john.michael.com",
        },
    ];

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
                <Card className="h-fit w-full rounded-lg overflow-hidden">
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
                            {TABLE_ROWS.map(
                                (
                                    {
                                        name,
                                        biodataId,
                                        status,
                                        mobileNumber,
                                        contactEmail,
                                    },
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
                                                {biodataId}
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
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {mobileNumber}
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
                                            {/* <Typography
                                                as="a"
                                                href="#"
                                                variant="small"
                                                color="blue-gray"
                                                className="font-medium"
                                            >
                                                Delete
                                            </Typography> */}
                                            <Button size="sm"> Delete</Button>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </Card>
            </div>
        </>
    );
};

export default ContactRequests;
