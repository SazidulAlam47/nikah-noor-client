import { Stepper, Step, Typography } from "@material-tailwind/react";
import Container from "../../../components/Container/Container";
import stepsData from "./stepsData";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import "./Steps.css";

const Steps = () => {
    return (
        <Container py>
            <SectionHeading
                title="How Nikah Noor Works"
                subtitle="Follow these simple steps to find your perfect match and get married"
            />
            <div className="max-w-screen-2xl mx-auto w-full px-24 mb-28 mt-8">
                <Stepper className="flex-col gap-24 md:flex-row">
                    {stepsData?.map(({ title, subtitle, icon: Icon }, idx) => (
                        <Step key={idx} className="w-20 h-20">
                            <Icon className="h-10 w-10" />
                            <div className="absolute -bottom-[4.5rem] w-max text-center">
                                <Typography variant="h6" color="blue-gray">
                                    {title}
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="font-normal w-52"
                                >
                                    {subtitle}
                                </Typography>
                            </div>
                        </Step>
                    ))}
                </Stepper>
            </div>
        </Container>
    );
};

export default Steps;
