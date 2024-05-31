import Select from "react-select";
import { Button, Input, Typography } from "@material-tailwind/react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./Filter.css";
import { useState } from "react";
import { colorStyles, divisionOptions, genderOptions } from "./FilterData";
import { useForm } from "react-hook-form";

const Filter = () => {
    const [values, setValues] = useState([18, 60]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (values[0] > values[1]) {
            setValues([values[1], values[0]]);
        }
        const { gender, division } = data;
        console.log({ gender, division, from: values[0], to: values[1] });
    };

    return (
        <div className="py-12 px-8">
            <Typography variant="h5" className="pb-4">
                Filters
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-1">
                    <label>I&apos;m looking for</label>
                    <Select
                        options={genderOptions}
                        styles={colorStyles}
                        {...register("gender")}
                    />
                </div>
                <div className="space-y-5">
                    <div className="space-y-3">
                        <label>Age</label>
                        <RangeSlider
                            min={18}
                            max={60}
                            value={values}
                            onInput={setValues}
                            id="range-slider"
                        />
                    </div>
                    <div className="flex justify-between w-fit gap-4 range-input">
                        <Input
                            label="from"
                            className="w-1/2"
                            value={values[0]}
                            {...register("from", {
                                pattern:
                                    /^(1[89]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|60)$/,
                            })}
                            onChange={(e) =>
                                setValues([e.target.value, values[1]])
                            }
                            error={Boolean(errors.from)}
                        />
                        <Input
                            label="to"
                            className="w-1/2"
                            value={values[1]}
                            {...register("to", {
                                pattern:
                                    /^(1[89]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|60)$/,
                            })}
                            onChange={(e) =>
                                setValues([values[0], e.target.value])
                            }
                            error={Boolean(errors.to)}
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label>Permanent Division</label>
                    <Select
                        options={divisionOptions}
                        styles={colorStyles}
                        {...register("division")}
                    />
                </div>
                <Button type="submit">Apply Filter</Button>
            </form>
        </div>
    );
};

export default Filter;
