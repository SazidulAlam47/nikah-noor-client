import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";

const CheckoutForm = ({ biodataId }) => {
    const [error, setError] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();
    const navigate = useNavigate();

    const totalPriceUSD = 4.26;
    const totalPriceBDT = 500;

    useEffect(() => {
        axiosSecure
            .post("/create-payment-intent", { price: totalPriceUSD })
            .then((res) => {
                setClientSecret(res.data.clientSecret);
            });
    }, [axiosSecure, totalPriceUSD]);

    console.log(clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("[payment error]", error);
            setError(error.message);
        } else {
            console.log("[PaymentMethod]", paymentMethod);
            setError("");
        }

        //confirm the payment
        const { error: confirmError, paymentIntent } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName || "anonymous",
                        email: user.email || "anonymous",
                    },
                },
            });

        if (confirmError) {
            console.log("Confirm Error:", confirmError);
        } else {
            console.log("Payment intent:", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                Swal.fire({
                    icon: "success",
                    title: "Order Confirmed!",
                    text: `Your transition id : ${paymentIntent.id}`,
                });
                // save the payment to database
                const payment = {
                    tnxId: paymentIntent.id,
                    price: totalPriceBDT,
                    email: user?.email,
                    date: new Date(),
                    contactRequestId: parseInt(biodataId),
                    status: "Pending",
                };

                console.log(payment);

                const paymentRes = await axiosSecure.post("/payments", payment);
                console.log(paymentRes.data);
                if (paymentRes?.data?.insertedId) {
                    navigate("/dashboard/contact-requests");
                }
            }
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 justify-center items-center w-full"
        >
            <CardElement
                className="w-11/12 mx-auto bg-[#F3F3F3] p-3"
                options={{
                    style: {
                        base: {
                            fontSize: "17px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#999",
                            },
                        },
                        invalid: {
                            color: "#ef4444",
                        },
                    },
                }}
            />
            <Button type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </Button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};

CheckoutForm.propTypes = {
    biodataId: PropTypes.string.isRequired,
};

export default CheckoutForm;
