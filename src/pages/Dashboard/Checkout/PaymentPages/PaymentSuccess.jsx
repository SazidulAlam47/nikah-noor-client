import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(3);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count - 1);
            if (count === 0) {
                navigate("/dashboard/contact-requests");
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigate, count]);

    return (
        <>
            <Helmet>
                <title>Nikah Noor | Payment Success</title>
            </Helmet>
            <div className="flex flex-col gap-3 justify-center items-center h-[80vh]">
                <h3 className="font-bold text-2xl">Payment Success</h3>
                <p className="max-w-md text-center text-[#6A6A6A]">
                    You will be redirected in {count} seconds...
                </p>
            </div>
        </>
    );
};

export default PaymentSuccess;
