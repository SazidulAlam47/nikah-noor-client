import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import { useForm } from "react-hook-form";
import { BsExclamationCircleFill } from "react-icons/bs";
import {
    Button,
    Input,
    Typography,
    Popover,
    PopoverHandler,
    PopoverContent,
    Select,
    Option,
} from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import moment from "moment";
import useAuth from "../../../hooks/useAuth";
import "./EditBiodata.css";
import {
    divisionOptions,
    heightOptions,
    occupationOptions,
    raceOptions,
    weightOptions,
} from "./selectData";
import Swal from "sweetalert2";
import axios from "axios";

const EditBiodata = () => {
    const [date, setDate] = useState("");
    const [dateErr, setDateErr] = useState("");
    const { user, updateInfo } = useAuth();
    const [imgUrl, setImgUrl] = useState(user?.photoURL);
    const [imgErr, setImgErr] = useState("");

    const [biodataType, setBiodataType] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [occupation, setOccupation] = useState("");
    const [race, setRace] = useState("");
    const [permanentDivision, setPermanentDivision] = useState("");
    const [presentDivision, setPresentDivision] = useState("");
    const [expectedPartnerHeight, setExpectedPartnerHeight] = useState("");
    const [expectedPartnerWeight, setExpectedPartnerWeight] = useState("");

    const [biodataTypeErr, setBiodataTypeErr] = useState("");
    const [heightErr, setHeightErr] = useState("");
    const [weightErr, setWeightErr] = useState("");
    const [occupationErr, setOccupationErr] = useState("");
    const [raceErr, setRaceErr] = useState("");
    const [permanentDivisionErr, setPermanentDivisionErr] = useState("");
    const [presentDivisionErr, setPresentDivisionErr] = useState("");
    const [expectedPartnerHeightErr, setExpectedPartnerHeightErr] =
        useState("");
    const [expectedPartnerWeightErr, setExpectedPartnerWeightErr] =
        useState("");

    const currentYear = new Date().getFullYear();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onTextSubmit = (data) => {
        let isValid = true;

        if (!date) {
            setDateErr("Please select a date");
            isValid = false;
        } else {
            setDateErr("");
        }

        if (!biodataType) {
            setBiodataTypeErr("Please Select Biodata Type");
            isValid = false;
        } else {
            setBiodataTypeErr("");
        }

        if (!height) {
            setHeightErr("Please Select Height");
            isValid = false;
        } else {
            setHeightErr("");
        }

        if (!weight) {
            setWeightErr("Please Select Weight");
            isValid = false;
        } else {
            setWeightErr("");
        }

        if (!occupation) {
            setOccupationErr("Please Select Occupation");
            isValid = false;
        } else {
            setOccupationErr("");
        }

        if (!race) {
            setRaceErr("Please Select Race");
            isValid = false;
        } else {
            setRaceErr("");
        }

        if (!permanentDivision) {
            setPermanentDivisionErr("Please Select Permanent Division");
            isValid = false;
        } else {
            setPermanentDivisionErr("");
        }

        if (!presentDivision) {
            setPresentDivisionErr("Please Select Present Division");
            isValid = false;
        } else {
            setPresentDivisionErr("");
        }

        if (!expectedPartnerHeight) {
            setExpectedPartnerHeightErr(
                "Please Select Expected Partner Height"
            );
            isValid = false;
        } else {
            setExpectedPartnerHeightErr("");
        }

        if (!expectedPartnerWeight) {
            setExpectedPartnerWeightErr(
                "Please Select Expected Partner Weight"
            );
            isValid = false;
        } else {
            setExpectedPartnerWeightErr("");
        }

        if (isValid) {
            const biodata = {
                biodataType,
                name: data.name,
                profileImage: user?.photoURL,
                dateOfBirth: date,
                height,
                weight,
                age: data.age,
                occupation,
                race,
                fathersName: data.fathersName,
                mothersName: data.mothersName,
                permanentDivision,
                presentDivision,
                expectedPartnerAge: data.expectedPartnerAge,
                expectedPartnerHeight,
                expectedPartnerWeight,
                contactEmail: user?.email,
                mobileNumber: data.mobileNumber,
            };
            console.log(biodata);
            // TODO: upload the data to database
        }
    };

    const handleImgUpdate = async (e) => {
        e.preventDefault();
        const imgForm = new FormData(e.currentTarget);
        const image = imgForm.get("image");
        console.log(image);

        setImgErr("");
        if (!image.size) {
            setImgErr("Please select an image");
            return;
        }

        const imgApiUrl = `https://api.imgbb.com/1/upload?&key=${
            import.meta.env.VITE_IMG_BB_KEY
        }`;

        const config = {
            headers: {
                "content-Type": "multipart/form-data",
            },
        };
        try {
            const imgRes = await axios.post(imgApiUrl, imgForm, config);
            const imgUrl = imgRes?.data?.data?.url;

            setImgUrl(imgUrl);

            const profile = {
                photoURL: imgUrl,
            };
            updateInfo(user, profile)
                .then(() => {
                    console.log("profile updated from edit biodata", user);
                    Swal.fire({
                        icon: "success",
                        title: "Image Updated!",
                        text: "The Image has been updated successfully.",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                })
                .catch((error) => {
                    console.error(error.message);
                });
        } catch {
            Swal.fire({
                icon: "error",
                title: "Upload Failed",
                text: "The selected image could not be uploaded. Please try a different image.",
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>Nikah Noor | Edit Biodata</title>
            </Helmet>
            <SectionHeading
                title="Edit Your Biodata"
                subtitle="Update your profile information to better reflect who you are and what you're looking for"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-8">
                <form
                    className="sm:min-w-[430px] space-y-6 col-span-2 order-2 lg:order-1"
                    onSubmit={handleSubmit(onTextSubmit)}
                >
                    <div>
                        <Select
                            label="Biodata Type"
                            size="lg"
                            value={biodataType}
                            onChange={(val) => {
                                setBiodataType(val);
                                setBiodataTypeErr("");
                            }}
                            error={Boolean(biodataTypeErr)}
                        >
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                        </Select>
                        {biodataTypeErr && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill className="hidden sm:inline-block" />
                                <Typography>{biodataTypeErr}</Typography>
                            </div>
                        )}
                    </div>
                    <div>
                        <Input
                            label="Name"
                            size="lg"
                            defaultValue={user?.displayName}
                            {...register("name", {
                                required: "Please enter your name",
                            })}
                            error={Boolean(errors.name)}
                        />
                        {errors.name && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill className="hidden sm:inline-block" />
                                <Typography>{errors.name.message}</Typography>
                            </div>
                        )}
                    </div>

                    <div>
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Input
                                    label="Date of birth"
                                    onChange={() => null}
                                    value={
                                        date
                                            ? moment(date).format(
                                                  "Do MMM, YYYY"
                                              )
                                            : ""
                                    }
                                    error={Boolean(dateErr)}
                                />
                            </PopoverHandler>
                            <PopoverContent>
                                <DayPicker
                                    captionLayout="dropdown"
                                    fromYear={currentYear - 60}
                                    toYear={currentYear - 18}
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    showOutsideDays
                                />
                            </PopoverContent>
                        </Popover>
                        {dateErr && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill className="hidden sm:inline-block" />
                                <Typography>{dateErr}</Typography>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <Select
                                label="Height"
                                size="lg"
                                value={height}
                                onChange={(val) => {
                                    console.log(val);
                                    setHeight(val);
                                    setHeightErr("");
                                }}
                                error={Boolean(heightErr)}
                            >
                                {heightOptions?.map((item, idx) => (
                                    <Option key={idx} value={item}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                            {heightErr && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>{heightErr}</Typography>
                                </div>
                            )}
                        </div>

                        <div>
                            <Select
                                label="Weight"
                                size="lg"
                                value={weight}
                                onChange={(val) => {
                                    setWeight(val);
                                    setWeightErr("");
                                }}
                                error={Boolean(weightErr)}
                            >
                                {weightOptions?.map((item, idx) => (
                                    <Option key={idx} value={item}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                            {weightErr && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>{weightErr}</Typography>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <Input
                            label="Age"
                            size="lg"
                            {...register("age", {
                                required: "Please enter your age",
                                pattern: {
                                    value: /^(1[8-9]|[2-5][0-9]|60)$/,
                                    message: "Age must be between 18 to 60",
                                },
                            })}
                            error={Boolean(errors.age)}
                        />
                        {errors.age && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill className="hidden sm:inline-block" />
                                <Typography>{errors.age.message}</Typography>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <Select
                                label="Occupation"
                                size="lg"
                                value={occupation}
                                onChange={(val) => {
                                    setOccupation(val);
                                    setOccupationErr("");
                                }}
                                error={Boolean(occupationErr)}
                            >
                                {occupationOptions?.map((item, idx) => (
                                    <Option key={idx} value={item}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                            {occupationErr && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>{occupationErr}</Typography>
                                </div>
                            )}
                        </div>

                        <div>
                            <Select
                                label="Race"
                                size="lg"
                                value={race}
                                onChange={(val) => {
                                    setRace(val);
                                    setRaceErr("");
                                }}
                                error={Boolean(raceErr)}
                            >
                                {raceOptions?.map((item, idx) => (
                                    <Option key={idx} value={item}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                            {raceErr && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>{raceErr}</Typography>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <Input
                                label="Fathers name"
                                size="lg"
                                {...register("fathersName", {
                                    required: "Please enter your Fathers name",
                                })}
                                error={Boolean(errors.fathersName)}
                            />
                            {errors.fathersName && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>
                                        {errors.fathersName.message}
                                    </Typography>
                                </div>
                            )}
                        </div>
                        <div>
                            <Input
                                label="Mothers name"
                                size="lg"
                                {...register("mothersName", {
                                    required: "Please enter your Mothers name",
                                })}
                                error={Boolean(errors.mothersName)}
                            />
                            {errors.mothersName && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>
                                        {errors.mothersName.message}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <Select
                                label="Permanent Division"
                                size="lg"
                                value={permanentDivision}
                                onChange={(val) => {
                                    setPermanentDivision(val);
                                    setPermanentDivisionErr("");
                                }}
                                error={Boolean(permanentDivisionErr)}
                            >
                                {divisionOptions?.map((item, idx) => (
                                    <Option key={idx} value={item}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                            {permanentDivisionErr && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>
                                        {permanentDivisionErr}
                                    </Typography>
                                </div>
                            )}
                        </div>
                        <div>
                            <Select
                                label="Present Division"
                                size="lg"
                                value={presentDivision}
                                onChange={(val) => {
                                    setPresentDivision(val);
                                    setPresentDivisionErr("");
                                }}
                                error={Boolean(presentDivisionErr)}
                            >
                                {divisionOptions?.map((item, idx) => (
                                    <Option key={idx} value={item}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                            {presentDivisionErr && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>
                                        {presentDivisionErr}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <Input
                            label="Expected Partner Age"
                            size="lg"
                            {...register("expectedPartnerAge", {
                                required: "Please enter Expected Partner age",
                                pattern: {
                                    value: /^(1[8-9]|[2-5][0-9]|60)$/,
                                    message: "Age must be between 18 to 60",
                                },
                            })}
                            error={Boolean(errors.expectedPartnerAge)}
                        />
                        {errors.expectedPartnerAge && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill className="hidden sm:inline-block" />
                                <Typography>
                                    {errors.expectedPartnerAge.message}
                                </Typography>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <Select
                                label="Expected Partner Height"
                                size="lg"
                                value={expectedPartnerHeight}
                                onChange={(val) => {
                                    setExpectedPartnerHeight(val);
                                    setExpectedPartnerHeightErr("");
                                }}
                                error={Boolean(expectedPartnerHeightErr)}
                            >
                                {heightOptions?.map((item, idx) => (
                                    <Option key={idx} value={item}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                            {expectedPartnerHeightErr && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>
                                        {expectedPartnerHeightErr}
                                    </Typography>
                                </div>
                            )}
                        </div>

                        <div>
                            <Select
                                label="Expected Partner Weight"
                                size="lg"
                                value={expectedPartnerWeight}
                                onChange={(val) => {
                                    setExpectedPartnerWeight(val);
                                    setExpectedPartnerWeightErr("");
                                }}
                                error={Boolean(expectedPartnerWeightErr)}
                            >
                                {weightOptions?.map((item, idx) => (
                                    <Option key={idx} value={item}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                            {expectedPartnerWeightErr && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>
                                        {expectedPartnerWeightErr}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <Input
                                label="Contact Email"
                                size="lg"
                                value={user?.email}
                                onChange={() => null}
                            />
                        </div>
                        <div>
                            <Input
                                label="Mobile Number"
                                size="lg"
                                {...register("mobileNumber", {
                                    required: "Please enter Mobile Number",
                                    pattern: {
                                        value: /^01\d{9}$/,
                                        message:
                                            'Number must be 11 digits and start with "01"',
                                    },
                                })}
                                error={Boolean(errors.mobileNumber)}
                            />
                            {errors.mobileNumber && (
                                <div className="flex gap-2 items-center text-red-600 pt-1">
                                    <BsExclamationCircleFill className="hidden sm:inline-block" />
                                    <Typography>
                                        {errors.mobileNumber.message}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        className="mt-6 justify-center"
                        fullWidth
                    >
                        Save And Publish Now
                    </Button>
                </form>
                <form
                    onSubmit={handleImgUpdate}
                    className="order-1 lg:order-2 space-y-4"
                >
                    <div>
                        <img
                            className="w-full aspect-square rounded-lg object-cover object-center"
                            src={imgUrl}
                            alt="profile image"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
                            htmlFor="file_input"
                        >
                            Profile Photo
                        </label>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file-input"
                            id="file_input"
                            type="file"
                            name="image"
                        ></input>
                        {imgErr && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill className="hidden sm:inline-block" />
                                <Typography>{imgErr}</Typography>
                            </div>
                        )}
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        className="mt-6 justify-center"
                        fullWidth
                    >
                        Update Photo
                    </Button>
                </form>
            </div>
        </>
    );
};

export default EditBiodata;
