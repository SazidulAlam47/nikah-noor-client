import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const CounterCard = ({ counter }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, counter.count, { duration: 2 });
        return animation.stop;
    }, [count, counter]);
    return (
        <Card>
            <CardHeader className="relative shadow-none h-32 mx-auto">
                <img src={counter.icon} alt="card-image" className="h-full" />
            </CardHeader>
            <CardBody>
                <Typography color="blue-gray" className="mb-2 text-center">
                    {counter.title}
                </Typography>
                <motion.h3
                    layoutScroll
                    className="mb-2 text-center text-3xl font-semibold text-[#282a36] font-roboto"
                >
                    {rounded}
                </motion.h3>
            </CardBody>
        </Card>
    );
};

CounterCard.propTypes = {
    counter: PropTypes.object.isRequired,
};

export default CounterCard;
