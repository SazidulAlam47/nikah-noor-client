import Select from "react-select";
import { Button, Input, Typography } from "@material-tailwind/react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./Filter.css";
import { useState } from "react";
import { colorStyles, divisionOptions, genderOptions } from "./FilterData";

import PropTypes from "prop-types";

const Filter = ({ setOpen, applyFilter }) => {
    const [values, setValues] = useState([18, 60]);
    const [fromError, setFromError] = useState(false);
    const [toError, setToError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const gender = form.get("gender");
        const division = form.get("division");
        let from = values[0];
        let to = values[1];

        if (values[0] < 18 || values[0] > 60) {
            setFromError(true);
            return;
        } else if (values[1] < 18 || values[1] > 60) {
            setToError(true);
            return;
        }

        if (values[0] > values[1]) {
            from = values[1];
            to = values[0];
            setValues([values[1], values[0]]);
        }
        const data = { gender, division, from, to };
        setOpen(false);
        applyFilter(data);
    };

    return (
        <div className="px-4 md:px-8">
            <Typography variant="h5" className="pb-4 hidden md:block">
                Filters
            </Typography>
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-1">
                    <label>I&apos;m looking for</label>
                    <Select
                        options={genderOptions}
                        styles={colorStyles}
                        isClearable
                        name="gender"
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
                            name="from"
                            onChange={(e) =>
                                setValues([e.target.value, values[1]])
                            }
                            error={fromError}
                        />
                        <Input
                            label="to"
                            className="w-1/2"
                            value={values[1]}
                            name="to"
                            onChange={(e) =>
                                setValues([values[0], e.target.value])
                            }
                            error={toError}
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label>Permanent Division</label>
                    <Select
                        options={divisionOptions}
                        styles={colorStyles}
                        isClearable
                        name="division"
                    />
                </div>
                <div className="text-center">
                    <Button type="submit">Apply Filter</Button>
                </div>
            </form>
        </div>
    );
};

Filter.propTypes = {
    setOpen: PropTypes.func,
    applyFilter: PropTypes.func.isRequired,
};

export default Filter;
