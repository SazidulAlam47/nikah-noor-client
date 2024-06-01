import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const AuthForm = ({ register: registerPage, handleSubmit: onSubmit }) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const { loading } = useAuth();

    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();

    // const onSubmit = (data) => {
    //     console.log(data);
    // };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {registerPage && (
                <div className="mb-6">
                    <Input
                        label="Name"
                        size="lg"
                        {...register("name", {
                            required: "Please enter your name",
                        })}
                    />
                </div>
            )}

            <div className="mb-6">
                <Input
                    label="Email"
                    size="lg"
                    {...register("email", {
                        required: "Please enter your email address.",
                        pattern: {
                            value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Invalid email",
                        },
                    })}
                />
            </div>
            <div className="mb-6">
                <Input
                    label="Password"
                    size="lg"
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
                    {...register("password", {
                        required: "Please fill in the password",
                    })}
                />
            </div>
            {registerPage && (
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
                        htmlFor="file_input"
                    >
                        Upload Profile Photo
                    </label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                    ></input>
                </div>
            )}
            <Button
                type="submit"
                loading={loading}
                size="lg"
                className="mt-6 justify-center"
                fullWidth
            >
                {registerPage ? "Register" : "Login"}
            </Button>
        </form>
    );
};

AuthForm.propTypes = {
    register: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
