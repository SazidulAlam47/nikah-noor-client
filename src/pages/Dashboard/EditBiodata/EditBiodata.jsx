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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const EditBiodata = () => {
    const [date, setDate] = useState();
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
                        <Select label="Select Biodata Type" size="lg">
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
                                    label="Select a Date"
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
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    showOutsideDays
                                    className="border-0"
                                    classNames={{
                                        caption:
                                            "flex justify-center py-2 mb-4 relative items-center",
                                        caption_label:
                                            "text-sm font-medium text-gray-900",
                                        nav: "flex items-center",
                                        nav_button:
                                            "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                        nav_button_previous:
                                            "absolute left-1.5",
                                        nav_button_next: "absolute right-1.5",
                                        table: "w-full border-collapse",
                                        head_row:
                                            "flex font-medium text-gray-900",
                                        head_cell:
                                            "m-0.5 w-9 font-normal text-sm",
                                        row: "flex w-full mt-2",
                                        cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                        day: "h-9 w-9 p-0 font-normal",
                                        day_range_end: "day-range-end",
                                        day_selected:
                                            "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                        day_today:
                                            "rounded-md bg-gray-200 text-gray-900",
                                        day_outside:
                                            "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                        day_disabled:
                                            "text-gray-500 opacity-50",
                                        day_hidden: "invisible",
                                    }}
                                    components={{
                                        IconLeft: ({ ...props }) => (
                                            <FaChevronLeft
                                                {...props}
                                                className="h-4 w-4 stroke-2"
                                            />
                                        ),
                                        IconRight: ({ ...props }) => (
                                            <FaChevronRight
                                                {...props}
                                                className="h-4 w-4 stroke-2"
                                            />
                                        ),
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div>
                        <Input
                            label="Email"
                            size="lg"
                            value={user?.email}
                            onChange={() => null}
                        />
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
                <form className="order-1 lg:order-2 space-y-4">
                    <div>
                        <img
                            className="w-full aspect-square rounded-lg object-cover object-center"
                            src={user?.photoURL}
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
                            {...register("image", {
                                required: "Please Upload Profile Photo",
                            })}
                        ></input>
                        {errors.image && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill className="hidden sm:inline-block" />
                                <Typography>{errors.image.message}</Typography>
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
