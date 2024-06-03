import { Card, CardBody, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const AdminCard = ({ icon: Icon, title, count }) => {
    return (
        <Card className="border">
            <CardBody className="flex gap-4 items-center">
                <Icon size={50} />
                <div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        {count}
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
};

AdminCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};

export default AdminCard;
