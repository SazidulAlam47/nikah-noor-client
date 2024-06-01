import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AuthForm from "./AuthForm";

const Register = () => {
    // const navigate = useNavigate();

    return (
        <section className="grid text-center py-12 items-center">
            <Helmet>
                <title>Nikah Noor | Register</title>
            </Helmet>
            <div className="max-w-[34rem] mx-auto">
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Register
                </Typography>
                <Typography className="mb-8 text-gray-600 font-normal text-[18px]">
                    Enter your email and password to sign in
                </Typography>
                <AuthForm register />
                <Typography
                    variant="small"
                    color="gray"
                    className="!mt-4 text-center font-normal"
                >
                    Already have account?{" "}
                    <Link to="/login" className="font-medium text-gray-900">
                        Login
                    </Link>
                </Typography>
            </div>
        </section>
    );
};

export default Register;
