import chroma from "chroma-js";

const genderOptions = [
    { value: "Male", label: "Male's Biodata" },
    { value: "Female", label: "Female's Biodata" },
];

const divisionOptions = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Chattagram", label: "Chattagram" },
    { value: "Rangpur", label: "Rangpur" },
    { value: "Barisal", label: "Barisal" },
    { value: "Khulna", label: "Khulna" },
    { value: "Maymansign", label: "Maymansign" },
    { value: "Sylhet", label: "Sylhet" },
];

// select style 
const colorStyles = {
    option: (styles, { isDisabled, isFocused, isSelected }) => {
        const color = "#ff758c";
        const colorChroma = chroma(color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? color
                    : isFocused
                        ? colorChroma.alpha(0.1).css()
                        : undefined,
            color: isDisabled
                ? "#ccc"
                : isSelected
                    ? chroma.contrast(colorChroma, "white") > 2
                        ? "white"
                        : "black"
                    : color,
            cursor: isDisabled ? "not-allowed" : "default",
            ":active": {
                ...styles[":active"],
                backgroundColor: !isDisabled
                    ? isSelected
                        ? color
                        : colorChroma.alpha(0.3).css()
                    : undefined,
            },
        };
    },
    control: (styles, { isFocused }) => ({
        ...styles,
        border: isFocused ? "1px solid pink !important" : "1px solid gray",
        boxShadow: isFocused ? "0 0 0 1px pink" : "none",
    }),
};


export { colorStyles, genderOptions, divisionOptions };