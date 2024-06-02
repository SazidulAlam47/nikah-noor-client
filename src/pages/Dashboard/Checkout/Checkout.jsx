import { Typography } from "@material-tailwind/react";
import Container from "../../../components/Container/Container";
import { useParams } from "react-router-dom";

const Checkout = () => {
    const { biodataId } = useParams();

    return (
        <Container py>
            <Typography variant="h3" className="text-center font-prociono">
                Checkout
            </Typography>
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-8">
                <div className="space-y-3">
                    <Typography
                        variant="h5"
                        className="text-center text-blue-gray-700"
                    >
                        Order Summary
                    </Typography>
                    <div className="max-w-md mx-auto space-y-2">
                        <div className="flex justify-between">
                            <p>Biodata ID:</p>
                            <p>{biodataId}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Price:</p>
                            <p>৳ 500</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography
                        variant="h5"
                        className="text-center text-blue-gray-700"
                    >
                        Payment Now
                    </Typography>
                    TODO: Card here
                    {/* TODO: Card Component here */}
                </div>
            </div>
        </Container>
    );
};

export default Checkout;
