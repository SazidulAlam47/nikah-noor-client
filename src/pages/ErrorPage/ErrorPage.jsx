import { Helmet } from "react-helmet-async";
import errorPic from "../../assets/icons/404.png";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>Nikah Noor | 404</title>
            </Helmet>

            <Header />
            <div className="flex flex-col gap-3 justify-center items-center h-[80vh]">
                <img src={errorPic} alt="error" className="w-[30%]" />
                <h3 className="font-bold text-2xl">404 - PAGE NOT FOUND</h3>
                <p className="max-w-md text-center text-[#6A6A6A]">
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                </p>
                <Link to="/">
                    <Button>GO TO HOMEPAGE</Button>
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default ErrorPage;
