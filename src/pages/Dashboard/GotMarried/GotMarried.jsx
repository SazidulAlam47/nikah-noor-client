import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

const GotMarried = () => {
    const [rating, setRating] = useState(0);

    return (
        <>
            <Helmet>
                <title>Nikah Noor | Got Married</title>
            </Helmet>
            <SectionHeading
                title="Share Your Success Story"
                subtitle="We'd love to hear about your journey! Upload your success story and inspire others on their path to love"
            />
            <form className="mt-12 space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <Input
                        label="Groom's Biodata ID"
                        size="lg"
                        // {...register("name")}
                    />

                    <Input
                        label="Bride's Biodata ID"
                        size="lg"
                        // {...register("name")}
                    />
                </div>
                <Textarea
                    label="Success Story"
                    size="lg"
                    // {...register("name")}
                />
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
                </div>
                <div>
                    <input
                        className="block w-full max-w-sm text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file-input"
                        id="file_input"
                        type="file"
                        // {...register("name")}
                    ></input>
                </div>
                <div>
                    <Button
                        type="submit"
                        size="lg"
                        className="mt-6 w-fit justify-center"
                        // loading={isSubmitting}
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
