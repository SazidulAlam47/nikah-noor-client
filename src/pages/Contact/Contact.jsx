import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Container from "../../components/Container/Container";

const Contact = () => {
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
                <form className="max-w-screen-md mx-auto border rounded-xl p-10 space-y-5 shadow-lg">
                    <Input label="Name" size="lg" error={false} />
                    <Input label="Email" size="lg" error={false} />
                    <Input label="Subject" size="lg" error={false} />
                    <Textarea label="Description" size="lg" error={false} />
                    <Button size="lg" fullWidth className="rounded-full">
                        Send
                    </Button>
                </form>
            </Container>
        </>
    );
};

export default Contact;
