import { Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { BsExclamationCircleFill } from "react-icons/bs";

const AuthForm = ({ register: registerPage, handleSubmit: onSubmit }) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const { loading } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handlePasswordValidate = (password) => {
        if (password === "") {
            return "Please fill in the password";
        } else if (password.length < 6) {
            return "Password must be at least 6 characters long";
        } else if (!/[a-z]/.test(password) && !/[A-Z]/.test(password)) {
            return "Password must contain at least one letter";
        } else if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter";
        } else if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter";
        } else if (!/[0-9]/.test(password)) {
            return "Password must contain at least one number";
        } else if (
            !/(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)
        ) {
            return "Password must contain at least one special character";
        }
        return true;
    };

    return (
        <form className="min-w-[430px]" onSubmit={handleSubmit(onSubmit)}>
            {registerPage && (
                <div className="mb-6">
                    <Input
                        label="Name"
                        size="lg"
                        {...register("name", {
                            required: "Please enter your name",
                        })}
                        error={Boolean(errors.name)}
                    />
                    {errors.name && (
                        <div className="flex gap-2 items-center text-red-600 pt-1">
                            <BsExclamationCircleFill />
                            <Typography>{errors.name.message}</Typography>
                        </div>
                    )}
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
                    error={Boolean(errors.email)}
                />
                {errors.email && (
                    <div className="flex gap-2 items-center text-red-600 pt-1">
                        <BsExclamationCircleFill />
                        <Typography>{errors.email.message}</Typography>
                    </div>
                )}
            </div>
            <div className="mb-6">
                {registerPage ? (
                    <>
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
                                validate: handlePasswordValidate,
                            })}
                            error={Boolean(errors.password)}
                        />
                        {errors.password && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill />
                                <Typography>
                                    {errors.password.message}
                                </Typography>
                            </div>
                        )}
                    </>
                ) : (
                    <>
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
                            error={Boolean(errors.password)}
                        />
                        {errors.password && (
                            <div className="flex gap-2 items-center text-red-600 pt-1">
                                <BsExclamationCircleFill />
                                <Typography>
                                    {errors.password.message}
                                </Typography>
                            </div>
                        )}
                    </>
                )}
            </div>
            {registerPage && (
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
                        htmlFor="file_input"
                    >
                        Profile Photo
                    </label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file-input"
                        id="file_input"
                        type="file"
                        {...register("image", {
                            required: "Please Upload Profile Photo",
                        })}
                    ></input>
                    {errors.image && (
                        <div className="flex gap-2 items-center text-red-600 pt-1">
                            <BsExclamationCircleFill />
                            <Typography>{errors.image.message}</Typography>
                        </div>
                    )}
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
