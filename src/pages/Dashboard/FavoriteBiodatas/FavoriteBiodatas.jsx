import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
    "Name",
    "Biodata Id",
    "Permanent Address",
    "Occupation",
    "",
];

const FavoriteBiodatas = () => {
    const TABLE_ROWS = [
        {
            name: "John Michael",
            biodataId: "2",
            permanentDivision: "Dhaka",
            occupation: "Job",
        },
        {
            name: "John Michael",
            biodataId: "2",
            permanentDivision: "Dhaka",
            occupation: "Job",
        },
    ];
    return (
        <>
            <Helmet>
                <title>Nikah Noor | My Contact Requests</title>
            </Helmet>
            <SectionHeading
                title="Favorite Biodatas"
                subtitle="Review and manage your favorite profiles to keep track of potential matches"
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
                                (
                                    {
                                        name,
                                        biodataId,
                                        permanentDivision,
                                        occupation,
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
                                                {permanentDivision}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {occupation}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
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

export default FavoriteBiodatas;
