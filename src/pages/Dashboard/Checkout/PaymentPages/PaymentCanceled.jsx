import { Helmet } from "react-helmet-async";

const PaymentCanceled = () => {
    return (
        <>
            <Helmet>
                <title>Nikah Noor | Payment Canceled</title>
            </Helmet>
            <div className="flex flex-col gap-3 justify-center items-center h-[80vh]">
                <p className="max-w-md text-center text-[#6A6A6A]">
                    If you need any assistance, please feel free to contact us
                    at payment@nikahnoor.com
                </p>
            </div>
        </>
    );
};

export default PaymentCanceled;
