import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";

const SITEMAP = [
    {
        title: "Company",
        links: [
            { name: "About Us", path: "/about" },
            { name: "Careers", path: "/" },
            { name: "Our Team", path: "/" },
            { name: "Projects", path: "/" },
        ],
    },
    {
        title: "Help Center",
        links: [
            { name: "FAQ", path: "/" },
            { name: "Support Center", path: "/" },
            { name: "Live Chat", path: "/" },
            { name: "Contact Us", path: "/contact" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", path: "/" },
            { name: "Newsletter", path: "/" },
            { name: "Free Products", path: "/" },
            { name: "Affiliate Program", path: "/" },
        ],
    },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="relative w-full bg-black/5">
            <Container>
                <div className="mx-auto grid w-full grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-4">
                    <div className="lg:pr-4 xl:pr-8 col-span-2 md:col-span-3 lg:col-span-1 text-center lg:text-start">
                        <Logo width="2/5" />
                        <Typography className="font-normal text-gray-800 pt-2">
                            Connecting hearts and building lifelong
                            partnerships. At Nikah Noor, we make finding your
                            soulmate easy and secure.
                        </Typography>
                    </div>
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
                                        <Link
                                            to={link.path}
                                            className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                        >
                                            {link.name}
                                        </Link>
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
                        &copy; {currentYear} <Link to="/">Nikah Noor</Link>. All
                        Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <a
                            href="https://www.facebook.com/OrdhekDeen/"
                            target="_blank"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            <FaFacebook size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/ordhekdeen/"
                            target="_blank"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href="https://x.com/ordhekdeen"
                            target="_blank"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        >
                            <FaXTwitter size={18} />
                        </a>
                        <a
                            href="https://www.youtube.com/OrdhekDeen"
                            target="_blank"
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
