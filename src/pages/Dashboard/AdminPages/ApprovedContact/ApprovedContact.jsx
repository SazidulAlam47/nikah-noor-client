import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
    "User name",
    "User email",
    " Biodata Id",
    "Approved contact request",
];

const ApprovedContact = () => {
    const TABLE_ROWS = [
        {
            name: "John Michael",
            contactEmail: "joh@gmail.com",
            biodataId: 2,
        },
        {
            name: "John Michael",
            contactEmail: "joh@gmail.com",
            biodataId: 3,
        },
    ];
    return (
        <>
            <Helmet>
                <title>Nikah Noor | Approved Contact Requests</title>
            </Helmet>
            <SectionHeading
                title="Approved Contact Requests"
                subtitle="View and manage contact requests that have been approved by the admin"
            />
            <div className="mt-8">
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
                            {TABLE_ROWS.map(
                                ({ name, contactEmail, biodataId }, index) => (
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
                                            <Button size="sm">
                                                Approved contact request
                                            </Button>
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

export default ApprovedContact;
