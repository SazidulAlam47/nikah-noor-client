import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MemberCard = ({ bioData }) => {
    const TABLE_ROWS = [
        {
            field: "Biodata Id",
            value: bioData.biodataId,
        },
        {
            field: "Biodata Type",
            value: bioData.biodataType,
        },
        {
            field: "Age",
            value: bioData.age,
        },
        {
            field: "Occupation",
            value: bioData.occupation,
        },
        {
            field: "Permanent Division",
            value: bioData.permanentDivision,
        },
    ];

    return (
        <Card>
            <CardHeader floated={false} className="">
                <div className="w-full aspect-square overflow-hidden">
                    <img
                        src={bioData.profileImage}
                        alt="profile-picture"
                        className="w-full"
                    />
                </div>
            </CardHeader>
            <CardBody className="text-center">
                <table className="w-full table-auto text-left">
                    <tbody>
                        {TABLE_ROWS.map(({ field, value }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast
                                ? "p-4 text-center w-1/2"
                                : "p-4 text-center w-1/2 border-b border-blue-gray-50";

                            return (
                                <tr key={field}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {field}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} border-l`}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {value}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Link to={`/profile/${bioData.biodataId}`}>
                    <Button className="mt-6">View Profile</Button>
                </Link>
            </CardBody>
        </Card>
    );
};

MemberCard.propTypes = {
    bioData: PropTypes.object.isRequired,
};

export default MemberCard;
