import { Card, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const TableDetails = ({ tableRows, tableTitle, biodata }) => {
    return (
        <Card className="w-full rounded-lg mt-12 overflow-hidden">
            <Typography
                variant="h5"
                className={`border-t-2 rounded-lg text-center py-2 ${
                    biodata?.biodataType === "Male"
                        ? "border-blue-200"
                        : "border-pink-200"
                }`}
            >
                {tableTitle}
            </Typography>
            <table className="w-full table-auto text-left">
                <tbody>
                    {tableRows.map(({ field, value }, index) => (
                        <tr
                            key={index}
                            className={`${
                                biodata?.biodataType === "Male"
                                    ? "odd:bg-blue-50/50"
                                    : "odd:bg-pink-50/70"
                            }`}
                        >
                            <td className="p-4 w-1/2">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {field}
                                </Typography>
                            </td>
                            <td className="p-4 w-1/2">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {value}
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
};

TableDetails.propTypes = {
    tableRows: PropTypes.array.isRequired,
    biodata: PropTypes.object.isRequired,
    tableTitle: PropTypes.string.isRequired,
};

export default TableDetails;
