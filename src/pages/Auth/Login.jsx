import { useEffect, useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    const navigate = useNavigate();
    const { user, googleLogin, loading } = useAuth();

    useEffect(() => {
        if (user) {
            // user already logged in
            toast.success("Login Successful");
            // navigate
            location.state ? navigate(location.state) : navigate("/");
        }
    }, [user, navigate]);

    const handleGoogle = () => {
        googleLogin();
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <section className="grid text-center h-screen items-center">
            <Helmet>
                <title>Nikah Noor | Login</title>
            </Helmet>
            <div>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Sign In
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                    Enter your email and password to sign in
                </Typography>
                <form action="#" className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-6">
                        <label htmlFor="email">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Your Email
                            </Typography>
                        </label>
                        <Input
                            id="email"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"
                            placeholder="name@mail.com"
                            className="w-full placeholder:opacity-100 focus:border-primary focus:border-t-primary border-t-blue-gray-200"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Password
                            </Typography>
                        </label>
                        <Input
                            size="lg"
                            placeholder="********"
                            labelProps={{
                                className: "hidden",
                            }}
                            className="w-full placeholder:opacity-100 border focus:border-primary focus:border-t-primary border-blue-gray-200"
                            type={passwordShown ? "text" : "password"}
                            icon={
                                <i
                                    className="cursor-pointer"
                                    onClick={togglePasswordVisiblity}
                                >
                                    {passwordShown ? (
                                        <IoEyeOff className="h-5 w-5" />
                                    ) : (
                                        <IoEye className="h-5 w-5" />
                                    )}
                                </i>
                            }
                        />
                    </div>
                    <Button size="lg" className="mt-6" fullWidth>
                        sign in
                    </Button>
                    <div className="!mt-4 flex justify-end">
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            variant="small"
                            className="font-medium"
                        >
                            Forgot password
                        </Typography>
                    </div>
                    <Button
                        onClick={handleGoogle}
                        variant="outlined"
                        size="lg"
                        className="mt-6 flex h-12 items-center justify-center gap-2"
                        fullWidth
                    >
                        <img
                            src={`https://www.material-tailwind.com/logos/logo-google.png`}
                            alt="google"
                            className="h-6 w-6"
                        />{" "}
                        sign in with google
                    </Button>
                    <Typography
                        variant="small"
                        color="gray"
                        className="!mt-4 text-center font-normal"
                    >
                        Not registered?{" "}
                        <Link
                            to="/register"
                            className="font-medium text-gray-900"
                        >
                            Create account
                        </Link>
                    </Typography>
                </form>
            </div>
        </section>
    );
};

export default Login;
