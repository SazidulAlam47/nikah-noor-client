import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import useAuth from "../../hooks/useAuth";
import useDisplayError from "../../hooks/useDisplayError";
import checkEmail from "../../utils/checkEmail";

const ForgotPass = () => {
    const { passwordReset, setLoading } = useAuth();
    const displayError = useDisplayError();

    const handleForgotPass = (data) => {
        const { email } = data;
        passwordReset(email)
            .then(() => {
                checkEmail(email, "to reset your password");
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                displayError(err);
            });
    };

    return (
        <section className="grid text-center py-12 items-center min-h-[calc(100vh-425px)] px-3 sm:px-0 ">
            <Helmet>
                <title>Nikah Noor | Login</title>
            </Helmet>
            <div className="max-w-[34rem] mx-auto">
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Forgot Password
                </Typography>
                <Typography className="mb-8 text-gray-600 font-normal text-[18px]">
                    Enter your email to reset you password
                </Typography>
                <AuthForm handleSubmit={handleForgotPass} forgotPass />

                <Typography
                    variant="small"
                    color="gray"
                    className="!mt-4 text-center font-normal"
                >
                    Remember password?{" "}
                    <Link to="/login" className="font-medium text-gray-900">
                        Login here
                    </Link>
                </Typography>
            </div>
        </section>
    );
};

export default ForgotPass;
