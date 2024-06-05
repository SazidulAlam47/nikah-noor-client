import { Typography, Button } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import AuthForm from "./AuthForm";
import useDisplayError from "../../hooks/useDisplayError";
import useAddNewUser from "../../hooks/useAddNewUser";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { loading } = useAuth();
    const displayError = useDisplayError();
    const addNewUser = useAddNewUser();

    const { googleLogin, signInWithPassword } = useAuth();

    const successTask = (result) => {
        //     // navigate
        //     if (result.user.emailVerified) {
        //         location.state ? navigate(location.state) : navigate("/");
        //     }
        // });
        console.log(result.user);
        toast.success("Login Successful");
        location.state ? navigate(location.state) : navigate("/");
    };

    const handlePasswordLogin = (data) => {
        const { email, password } = data;

        signInWithPassword(email, password)
            .then((result) => {
                successTask(result);
            })
            .catch((err) => {
                displayError(err);
            });
    };

    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                successTask(result);
                const data = {
                    name: result.user.displayName,
                    email: result.user.email,
                };
                addNewUser(data);
            })
            .catch((err) => {
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
                    Login
                </Typography>
                <Typography className="mb-8 text-gray-600 font-normal text-[18px]">
                    Enter your email and password to sign in
                </Typography>
                <AuthForm handleSubmit={handlePasswordLogin} />
                {/* <div className="!mt-4 flex justify-center">
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            variant="small"
                            className="font-medium"
                        >
                            Forgot password
                        </Typography>
                    </div> */}
                <Button
                    disabled={loading}
                    onClick={handleGoogle}
                    variant="outlined"
                    size="lg"
                    className="mt-6 flex h-12 items-center justify-center gap-2"
                    fullWidth
                >
                    <img
                        src="https://www.material-tailwind.com/logos/logo-google.png"
                        alt="google"
                        className="h-6 w-6"
                    />
                    sign in with google
                </Button>
                <Typography
                    variant="small"
                    color="gray"
                    className="!mt-4 text-center font-normal"
                >
                    Not registered?{" "}
                    <Link to="/register" className="font-medium text-gray-900">
                        Create account
                    </Link>
                </Typography>
            </div>
        </section>
    );
};

export default Login;
