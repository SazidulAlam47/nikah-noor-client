import PropTypes from "prop-types";
import PhotoDetails from "./PhotoDetails";
import TableDetails from "./TableDetails";
import moment from "moment";

const ProfileDetails = ({ biodata }) => {
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

    const contactTable = [
        {
            field: "Contact Email",
            value: biodata?.contactEmail,
        },
        {
            field: "Mobile Number",
            value: biodata?.mobileNumber,
        },
    ];

    return (
        <>
            <PhotoDetails biodata={biodata} />
            <TableDetails
                tableRows={personalTable}
                tableTitle="Personal Details"
                biodata={biodata}
            />
            <TableDetails
                tableRows={physicalTable}
                tableTitle="Physical Appearance"
                biodata={biodata}
            />
            <TableDetails
                tableRows={locationTable}
                tableTitle="Location Details"
                biodata={biodata}
            />
            <TableDetails
                tableRows={familyTable}
                tableTitle="Family Details"
                biodata={biodata}
            />
            <TableDetails
                tableRows={partnerTable}
                tableTitle="Partner Preference"
                biodata={biodata}
            />
            <TableDetails
                tableRows={contactTable}
                tableTitle="Contact Details"
                biodata={biodata}
            />
        </>
    );
};

ProfileDetails.propTypes = {
    biodata: PropTypes.object.isRequired,
};

export default ProfileDetails;
