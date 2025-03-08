import { Option, Typography } from "@material-tailwind/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Select } from "@material-tailwind/react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Checkout = () => {
    const { biodataId } = useParams();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [paymentMethod, setPaymentMethod] = useState("sslcommerz");

    const handleSslcommerz = async () => {
        const payment = {
            email: user?.email,
            contactRequestId: parseInt(biodataId),
            status: "Pending",
            paymentMethod: "Sslcommerz",
        };

        const res = await axiosSecure.post("/init-sslcommerz", payment);
        console.log(res);

        window.location.replace(res.data?.url);
    };

    return (
        <>
            <Helmet>
                <title>Nikah Noor | Checkout</title>
            </Helmet>
            <div className="h-[60vh] flex flex-col justify-center">
                <Typography variant="h3" className="text-center font-prociono">
                    Checkout
                </Typography>
                <div className="grid grid-cols-1 lg:grid-cols-2 pt-8 pb-12">
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
                    <div className="space-y-3">
                        <Typography
                            variant="h5"
                            className="text-center text-blue-gray-700"
                        >
                            Payment Now
                        </Typography>
                        <Select
                            label="Select Payment Method"
                            value={paymentMethod}
                            onChange={(val) => setPaymentMethod(val)}
                        >
                            <Option value="sslcommerz">sslcommerz</Option>
                            <Option value="card">Card</Option>
                        </Select>
                        <div className="text-center space-y-3 pt-3">
                            {paymentMethod === "sslcommerz" && (
                                <Button onClick={handleSslcommerz}>
                                    Pay with sslcommerz
                                </Button>
                            )}
                            {paymentMethod === "card" && (
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm biodataId={biodataId} />
                                </Elements>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
