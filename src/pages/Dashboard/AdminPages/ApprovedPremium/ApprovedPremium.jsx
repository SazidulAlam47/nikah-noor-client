import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["User name", "User email", " Biodata Id", "Make premium"];

const ApprovedPremium = () => {
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
                <title>Nikah Noor | My Contact Requests</title>
            </Helmet>
            <SectionHeading
                title="Manage Users"
                subtitle="View, edit, and manage user accounts"
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
                                                {" "}
                                                Make premium
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

export default ApprovedPremium;
