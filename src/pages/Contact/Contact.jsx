import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Container from "../../components/Container/Container";
import { useForm } from "react-hook-form";
import { BsExclamationCircleFill } from "react-icons/bs";
import Swal from "sweetalert2";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        Swal.fire({
            icon: "success",
            title: "Thank you for your inquiry!",
            text: "We have received your message and will be in touch shortly.",
            showConfirmButton: false,
            timer: 2500,
        });
        reset();
    };

    return (
        <>
            <Helmet>
                <title>Nikah Noor | Contact Us</title>
            </Helmet>
            <PageTitle title="Contact Us" />
            <Container py>
                <Typography className="max-w-screen-md mx-auto text-center mb-8">
                    For any queries or assistance, please fill out the form
                    below and send it to us. We will get back to you as soon as
                    possible, InShaAllah.
                </Typography>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-screen-md mx-auto border rounded-xl p-5 sm:p-10 space-y-5 shadow-lg"
                >
                    <div className="space-y-1">
                        <Input
                            {...register("name", {
                                required: "Please enter your name",
                            })}
                            label="Name"
                            size="lg"
                            error={Boolean(errors.name)}
                        />
                        {errors.name && (
                            <div className="flex gap-2 items-center text-red-600">
                                <BsExclamationCircleFill />
                                <Typography>{errors.name.message}</Typography>
                            </div>
                        )}
                    </div>
                    <div className="space-y-1">
                        <Input
                            {...register("email", {
                                required: "Please enter your email address.",
                                pattern: {
                                    value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Invalid email",
                                },
                            })}
                            label="Email"
                            size="lg"
                            error={Boolean(errors.email)}
                        />
                        {errors.email && (
                            <div className="flex gap-2 items-center text-red-600">
                                <BsExclamationCircleFill />
                                <Typography>{errors.email.message}</Typography>
                            </div>
                        )}
                    </div>
                    <div>
                        <Input
                            {...register("subject")}
                            label="Subject"
                            size="lg"
                        />
                    </div>
                    <div>
                        <Textarea
                            {...register("description", {
                                required: "Please enter your message",
                            })}
                            label="Description"
                            size="lg"
                            error={Boolean(errors.description)}
                        />
                        {errors.description && (
                            <div className="flex gap-2 items-center text-red-600">
                                <BsExclamationCircleFill />
                                <Typography>
                                    {errors.description.message}
                                </Typography>
                            </div>
                        )}
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        fullWidth
                        className="rounded-full bg-gradient-to-r from-[#542b79] to-[#eb3284]"
                    >
                        Send
                    </Button>
                </form>
            </Container>
        </>
    );
};

export default Contact;
