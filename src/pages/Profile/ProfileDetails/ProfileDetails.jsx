import PropTypes from "prop-types";
import PhotoDetails from "./PhotoDetails";
import TableDetails from "./TableDetails";
import moment from "moment";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { PiMedalThin } from "react-icons/pi";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ProfileDetails = ({ biodata }) => {
    const { user } = useAuth();
    const self = user.email === biodata.contactEmail;
    const axiosSecure = useAxiosSecure();
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
        <Link to={`/dashboard/checkout/${biodata.biodataId}`}>
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
            value: premium || self ? biodata?.contactEmail : requestBtn,
        },
        {
            field: "Mobile Number",
            value: premium || self ? biodata?.mobileNumber : requestBtn,
        },
    ];

    const handlePremium = () => {
        Swal.fire({
            title: "Confirm Your Action",
            text: "Are you sure you want to upgrade to a premium membership on this website?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Request Submitted",
                    text: "Your request has been sent to the admin. Please wait for approval",
                    icon: "success",
                });
            }
        });
    };

    const handleFavorite = () => {
        const data = {
            email: user?.email,
            favoriteId: biodata.biodataId,
        };
        axiosSecure.post("/favorites", data).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Biodata Added to Favorites!",
                    text: "The Biodata has been added to favorites successfully.",
                    showConfirmButton: false,
                    timer: 2000,
                });
            } else if (res.data.exists) {
                Swal.fire({
                    icon: "info",
                    title: "Biodata Already Exists in Favorites",
                    text: "This biodata has already been added to your favorites list.",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        });
    };

    return (
        <>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
                <PhotoDetails biodata={biodata} />
                {self ? (
                    <Button
                        className="h-fit w-fit flex items-center gap-2"
                        onClick={handlePremium}
                    >
                        <PiMedalThin size={14} />
                        Make biodata to premium
                    </Button>
                ) : (
                    <Button
                        className="h-fit w-fit flex items-center gap-2"
                        onClick={handleFavorite}
                    >
                        <FaHeart size={14} />
                        Add to favorites
                    </Button>
                )}
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
    self: PropTypes.bool,
};

export default ProfileDetails;
