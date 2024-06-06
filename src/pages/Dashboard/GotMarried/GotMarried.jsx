import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import {
    Button,
    Input,
    Popover,
    PopoverContent,
    PopoverHandler,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { useForm } from "react-hook-form";
import { BsExclamationCircleFill } from "react-icons/bs";
import { DayPicker } from "react-day-picker";
import moment from "moment";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const GotMarried = () => {
    const axiosSecure = useAxiosSecure();
    const [date, setDate] = useState("");
    const [dateErr, setDateErr] = useState("");

    const [rating, setRating] = useState(0);
    const [ratingErr, setRatingErr] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        let isValid = true;
        setRatingErr(false);
        setDateErr(false);

        if (!rating) {
            setRatingErr(true);
            isValid = false;
        }
        if (!date) {
            setDateErr(true);
            isValid = false;
        }
        if (isValid) {
            const image = data.image[0];

            const imageFile = new FormData();
            imageFile.append("image", image);

            const imgApiUrl = `https://api.imgbb.com/1/upload?&key=${
                import.meta.env.VITE_IMG_BB_KEY
            }`;

            const config = {
                headers: {
                    "content-Type": "multipart/form-data",
                },
            };

            try {
                const imgRes = await axios.post(imgApiUrl, imageFile, config);
                const imgUrl = imgRes?.data?.data?.url;

                const successData = {
                    maleBiodataId: parseInt(data.maleBiodataId),
                    femaleBiodataId: parseInt(data.femaleBiodataId),
                    successStoryText: data.successStoryText,
                    marriageDate: date,
                    reviewStar: rating,
                    image: imgUrl,
                };

                try {
                    const res = await axiosSecure.post("/reviews", successData);
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "Success Story Added!",
                            text: "The Success Story has been added successfully.",
                            showConfirmButton: false,
                            timer: 2000,
                        });
                        reset();
                        setRating(0);
                        setDate("");
                    }
                } catch {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
            } catch {
                Swal.fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "The selected image could not be uploaded. Please try a different image.",
                });
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Nikah Noor | Got Married</title>
            </Helmet>
            <SectionHeading
                title="Share Your Success Story"
                subtitle="We'd love to hear about your journey! Upload your success story and inspire others on their path to love"
            />
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div>
                        <Input
                            label="Groom's Biodata ID"
                            size="lg"
                            {...register("maleBiodataId", {
                                pattern: {
                                    value: /^-?\d+(\.\d+)?$/,
                                    message: "Biodata ID must be a number",
                                },
                            })}
                            error={Boolean(errors.maleBiodataId)}
                        />
                        {errors.maleBiodataId && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill className="hidden sm:inline-block" />
                                <Typography>
                                    {errors.maleBiodataId.message}
                                </Typography>
                            </div>
                        )}
                    </div>

                    <div>
                        <Input
                            label="Bride's Biodata ID"
                            size="lg"
                            {...register("femaleBiodataId", {
                                pattern: {
                                    value: /^-?\d+(\.\d+)?$/,
                                    message: "Biodata ID must be a number",
                                },
                            })}
                            error={Boolean(errors.femaleBiodataId)}
                        />
                        {errors.femaleBiodataId && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill className="hidden sm:inline-block" />
                                <Typography>
                                    {errors.femaleBiodataId.message}
                                </Typography>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <Popover placement="bottom">
                        <PopoverHandler>
                            <Input
                                label="Marriage Date"
                                onChange={() => null}
                                value={
                                    date
                                        ? moment(date).format("Do MMM, YYYY")
                                        : ""
                                }
                                error={Boolean(dateErr)}
                            />
                        </PopoverHandler>
                        <PopoverContent>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={(val) => {
                                    setDate(val);
                                    setDateErr("");
                                }}
                                showOutsideDays
                            />
                        </PopoverContent>
                    </Popover>
                    {dateErr && (
                        <div className="flex gap-2 items-center text-red-600 pt-1">
                            <BsExclamationCircleFill className="hidden sm:inline-block" />
                            <Typography>Please select Marriage Date</Typography>
                        </div>
                    )}
                </div>
                <div>
                    <Textarea
                        label="Success Story"
                        size="lg"
                        {...register("successStoryText", {
                            required: "Please enter your success story",
                        })}
                        error={Boolean(errors.successStoryText)}
                    />
                    {errors.successStoryText && (
                        <div className="flex gap-2 items-center text-red-600 pt-1">
                            <BsExclamationCircleFill className="hidden sm:inline-block" />
                            <Typography>
                                {errors.successStoryText.message}
                            </Typography>
                        </div>
                    )}
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                        Review Rating
                    </label>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                        isRequired
                    />
                    {ratingErr && (
                        <div className="flex gap-2 items-center text-red-600 pt-1">
                            <BsExclamationCircleFill className="hidden sm:inline-block" />
                            <Typography>Please give a rating</Typography>
                        </div>
                    )}
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                        Couple Photo
                    </label>
                    <input
                        className="block w-full max-w-sm text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file-input"
                        id="file_input"
                        type="file"
                        {...register("image", {
                            required: "Please Upload Couple Photo",
                        })}
                    ></input>
                    {errors.image && (
                        <div className="flex gap-2 items-center text-red-600 pt-1">
                            <BsExclamationCircleFill className="hidden sm:inline-block" />
                            <Typography>{errors.image.message}</Typography>
                        </div>
                    )}
                </div>
                <div>
                    <Button
                        type="submit"
                        size="lg"
                        className="mt-6 w-fit justify-center"
                        loading={isSubmitting}
                        fullWidth
                    >
                        submit
                    </Button>
                </div>
            </form>
        </>
    );
};

export default GotMarried;
