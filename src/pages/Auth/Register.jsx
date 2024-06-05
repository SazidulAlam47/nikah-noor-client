import { Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AuthForm from "./AuthForm";
import useAuth from "../../hooks/useAuth";
import useDisplayError from "../../hooks/useDisplayError";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import useAddNewUser from "../../hooks/useAddNewUser";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateInfo, setLoading } = useAuth();
    const displayError = useDisplayError();
    const addNewUser = useAddNewUser();

    const handleRegister = async (data) => {
        setLoading(true);

        const { name, email, password, image } = data;

        const imageFile = new FormData();
        imageFile.append("image", image[0]);

        const imgApiUrl = `https://api.imgbb.com/1/upload?&key=${
            import.meta.env.VITE_IMG_BB_KEY
        }`;

        const config = {
            headers: {
                "content-Type": "multipart/form-data",
            },
        };

        try {
            const imgRes = await axios.post(imgApiUrl, imageFile, config);
            const imgUrl = imgRes?.data?.data?.url;

            createUser(email, password)
                .then((result) => {
                    const profile = {
                        displayName: name,
                        photoURL: imgUrl,
                    };
                    updateInfo(result.user, profile)
                        .then(() => {
                            console.log("profile updated", result.user);
                            const data = {
                                name,
                                email,
                            };
                            addNewUser(data);
                            navigate("/dashboard/edit-biodata");
                            toast.success("Register Successful");
                        })
                        .catch((error) => {
                            console.error(error.message);
                        });
                })
                .catch((err) => {
                    displayError(err);
                });
        } catch {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    };

    return (
        <section className="grid text-center py-12 items-center min-h-[calc(100vh-425px)] px-3 sm:px-0 ">
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
                <AuthForm register handleSubmit={handleRegister} />
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
