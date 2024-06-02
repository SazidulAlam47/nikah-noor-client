import PropTypes from "prop-types";
import PhotoDetails from "./PhotoDetails";
import TableDetails from "./TableDetails";
import moment from "moment";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

const ProfileDetails = ({ biodata }) => {
    // TODO: premium memberships
    const premium = false;

    const personalTable = [
        {
            field: "Name",
            value: biodata?.name,
        },
        {
            field: "Gender",
            value: biodata?.biodataType,
        },
        {
            field: "Date of Birth",
            value: moment(biodata?.dateOfBirth).format("D MMM, YYYY"),
        },
        {
            field: "Age",
            value: biodata?.age,
        },
        {
            field: "Occupation",
            value: biodata?.occupation,
        },
        {
            field: "Race",
            value: biodata?.race,
        },
    ];

    const physicalTable = [
        {
            field: "Height",
            value: biodata?.height,
        },
        {
            field: "Weight",
            value: biodata?.weight,
        },
    ];

    const locationTable = [
        {
            field: "Present Division",
            value: biodata?.presentDivision,
        },
        {
            field: "Permanent Division",
            value: biodata?.permanentDivision,
        },
    ];

    const familyTable = [
        {
            field: "Father's Name",
            value: biodata?.fathersName,
        },
        {
            field: "Mother's Name",
            value: biodata?.mothersName,
        },
    ];

    const partnerTable = [
        {
            field: "Expected Partner Age",
            value: biodata?.expectedPartnerAge,
        },
        {
            field: "Expected Partner Height",
            value: biodata?.expectedPartnerHeight,
        },
        {
            field: "Expected Partner Weight",
            value: biodata?.expectedPartnerWeight,
        },
    ];

    const requestBtn = (
        <Link to={`/checkout/${biodata.biodataId}`}>
            <Button
                size="sm"
                color={biodata.biodataType === "Male" ? "blue" : "pink"}
            >
                Request Contact
            </Button>
        </Link>
    );

    const contactTable = [
        {
            field: "Contact Email",
            value: premium ? biodata?.contactEmail : requestBtn,
        },
        {
            field: "Mobile Number",
            value: premium ? biodata?.mobileNumber : requestBtn,
        },
    ];

    return (
        <>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
                <PhotoDetails biodata={biodata} />
                <Button className="h-fit w-fit flex items-center gap-2 ">
                    <FaHeart size={14} />
                    Add to favorites
                </Button>
            </div>
            <TableDetails
                tableRows={personalTable}
                tableTitle="Personal Details"
                biodataType={biodata.biodataType}
            />
            <TableDetails
                tableRows={physicalTable}
                tableTitle="Physical Appearance"
                biodataType={biodata.biodataType}
            />
            <TableDetails
                tableRows={locationTable}
                tableTitle="Location Details"
                biodataType={biodata.biodataType}
            />
            <TableDetails
                tableRows={familyTable}
                tableTitle="Family Details"
                biodataType={biodata.biodataType}
            />
            <TableDetails
                tableRows={partnerTable}
                tableTitle="Partner Preference"
                biodataType={biodata.biodataType}
            />
            <TableDetails
                tableRows={contactTable}
                tableTitle="Contact Details"
                biodataType={biodata.biodataType}
            />
        </>
    );
};

ProfileDetails.propTypes = {
    biodata: PropTypes.object.isRequired,
};

export default ProfileDetails;
