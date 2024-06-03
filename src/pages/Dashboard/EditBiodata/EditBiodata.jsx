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
    const [date, setDate] = useState();
    const { user, updateInfo } = useAuth();
    const [imgUrl, setImgUrl] = useState(user?.photoURL);
    const [imgErr, setImgErr] = useState("");

    const currentYear = new Date().getFullYear();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <Select label="Biodata Type" size="lg">
                            <Option>Male</Option>
                            <Option>Female</Option>
                        </Select>
                    </div>
                    <div>
                        <Input
                            label="Name"
                            size="lg"
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
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Select label="Height" size="lg">
                            {heightOptions?.map((item, idx) => (
                                <Option key={idx}>{item}</Option>
                            ))}
                        </Select>

                        <Select label="Weight" size="lg">
                            {weightOptions?.map((item, idx) => (
                                <Option key={idx}>{item}</Option>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <Input label="Age" size="lg" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Select label="Occupation" size="lg">
                            {occupationOptions?.map((item, idx) => (
                                <Option key={idx}>{item}</Option>
                            ))}
                        </Select>

                        <Select label="Race" size="lg">
                            {raceOptions?.map((item, idx) => (
                                <Option key={idx}>{item}</Option>
                            ))}
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Input label="Fathers name" size="lg" />
                        <Input label="Mothers name" size="lg" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Select label="Permanent Division" size="lg">
                            {divisionOptions?.map((item, idx) => (
                                <Option key={idx}>{item}</Option>
                            ))}
                        </Select>

                        <Select label="Present Division" size="lg">
                            {divisionOptions?.map((item, idx) => (
                                <Option key={idx}>{item}</Option>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <Input label="Expected Partner Age" size="lg" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Select label="Expected Partner Height" size="lg">
                            {heightOptions?.map((item, idx) => (
                                <Option key={idx}>{item}</Option>
                            ))}
                        </Select>

                        <Select label="Expected Partner Weight" size="lg">
                            {weightOptions?.map((item, idx) => (
                                <Option key={idx}>{item}</Option>
                            ))}
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Input
                            label="Contact Email"
                            size="lg"
                            value={user?.email}
                            onChange={() => null}
                        />
                        <Input label="Mobile Number" size="lg" />
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        className="mt-6 justify-center"
                        fullWidth
                    >
                        submit
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
