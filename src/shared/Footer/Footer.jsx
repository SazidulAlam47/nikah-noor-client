import { Typography } from "@material-tailwind/react";
import Logo from "../../components/Logo/Logo";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../../components/Container/Container";

const SITEMAP = [
    {
        title: "Company",
        links: ["About Us", "Careers", "Our Team", "Projects"],
    },
    {
        title: "Help Center",
        links: ["Discord", "Twitter", "GitHub", "Contact Us"],
    },
    {
        title: "Resources",
        links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
    },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="relative w-full">
            <Container>
                <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
                    <Logo />
                    {SITEMAP.map(({ title, links }, key) => (
                        <div key={key} className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-4 font-bold uppercase opacity-50"
                            >
                                {title}
                            </Typography>
                            <ul className="space-y-1">
                                {links.map((link, key) => (
                                    <Typography
                                        key={key}
                                        as="li"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        <a
                                            href="#"
                                            className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                        >
                                            {link}
                                        </a>
                                    </Typography>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        &copy; {currentYear}{" "}
                        <a href="https://material-tailwind.com/">Nikah Noor</a>.
                        All Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <a
                            href="#"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            <FaFacebook size={18} />
                        </a>
                        <a
                            href="#"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="#"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            <FaXTwitter size={18} />
                        </a>
                        <a
                            href="#"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            <FaYoutube size={18} />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
