import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

const CounterCard = ({ counter }) => {
    return (
        <Card>
            <CardHeader className="relative shadow-none h-32 mx-auto">
                <img src={counter.icon} alt="card-image" className="h-full" />
            </CardHeader>
            <CardBody>
                <Typography
                    variant="p"
                    color="blue-gray"
                    className="mb-2 text-center"
                >
                    {counter.title}
                </Typography>
                <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 text-center"
                >
                    {counter.count}
                </Typography>
            </CardBody>
        </Card>
    );
};

CounterCard.propTypes = {
    counter: PropTypes.object.isRequired,
};

export default CounterCard;
